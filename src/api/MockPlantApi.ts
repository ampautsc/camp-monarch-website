import { IPlantApi } from './PlantApi';
import { Plant, PlantFilters } from '../types/Plant';
import { PlantDataLoader } from './PlantDataLoader';
import {
  calculatePlantPriorityScore,
  getHostedSpeciesCount,
  getFoodOrShelterGroupsCount,
} from '../config/plantPrioritization';
import { stateNamesToFips } from '../utils/fipsUtils';

/**
 * Camp Monarch implementation of the Plant API.
 * Uses dynamically loaded data from public/data/plants directory.
 * SeedShare and Garden features are not active in this version.
 */
export class MockPlantApi implements IPlantApi {
  private plantsCache: Plant[] | null = null;

  // Stub — SeedShare not active in Camp Monarch v1
  setSeedShareVolumes(_volumes: unknown[]): void {}

  // Stub — Garden not active in Camp Monarch v1
  setGardenPlants(_plantIds: Set<string>): void {}

  async getAllPlants(): Promise<Plant[]> {
    if (!this.plantsCache) {
      this.plantsCache = await PlantDataLoader.getAllPlants();
    }
    return [...this.plantsCache];
  }

  async getPlantById(id: string): Promise<Plant | null> {
    return await PlantDataLoader.getPlantById(id);
  }

  async searchPlants(filters: PlantFilters): Promise<Plant[]> {
    if (!this.plantsCache) {
      this.plantsCache = await PlantDataLoader.getAllPlants();
    }

    let results = [...this.plantsCache];

    // Text search
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      results = results.filter(plant =>
        plant.commonName.toLowerCase().includes(query) ||
        plant.scientificName.toLowerCase().includes(query) ||
        plant.description.toLowerCase().includes(query)
      );
    }

    // Sun requirements
    if (filters.sun && filters.sun.length > 0) {
      results = results.filter(plant =>
        plant.requirements && filters.sun!.includes(plant.requirements.sun)
      );
    }

    // Moisture requirements
    if (filters.moisture && filters.moisture.length > 0) {
      results = results.filter(plant =>
        plant.requirements && filters.moisture!.includes(plant.requirements.moisture)
      );
    }

    // Soil requirements
    if (filters.soil && filters.soil.length > 0) {
      results = results.filter(plant =>
        plant.requirements && filters.soil!.includes(plant.requirements.soil)
      );
    }

    // Bloom color
    if (filters.bloomColor && filters.bloomColor.length > 0) {
      results = results.filter(plant =>
        plant.characteristics?.bloomColor?.some(color =>
          filters.bloomColor!.includes(color)
        )
      );
    }

    // Bloom time
    if (filters.bloomTime && filters.bloomTime.length > 0) {
      results = results.filter(plant =>
        plant.characteristics?.bloomTime?.some(time =>
          filters.bloomTime!.includes(time)
        )
      );
    }

    // State FIPS
    if (filters.stateFips && filters.stateFips.length > 0) {
      results = results.filter(plant => {
        if (plant.distribution?.statesFips) {
          return filters.stateFips!.some(stateFips =>
            plant.distribution!.statesFips!.includes(stateFips)
          );
        }
        if (plant.characteristics?.nativeRange) {
          const plantStateFips = stateNamesToFips(plant.characteristics.nativeRange);
          return filters.stateFips!.some(stateFips =>
            plantStateFips.includes(stateFips)
          );
        }
        return false;
      });
    }

    // County FIPS
    if (filters.countyFips && filters.countyFips.length > 0) {
      results = results.filter(plant =>
        plant.distribution?.fipsCodes &&
        filters.countyFips!.some(countyFips =>
          plant.distribution!.fipsCodes.includes(countyFips)
        )
      );
    }

    // Host plant relationships
    if (filters.hostPlantTo && filters.hostPlantTo.length > 0) {
      results = results.filter(plant =>
        plant.relationships?.hostPlantTo?.some(host =>
          filters.hostPlantTo!.some(filter =>
            host.toLowerCase().includes(filter.toLowerCase())
          )
        )
      );
    }

    // Food for relationships
    if (filters.foodFor && filters.foodFor.length > 0) {
      results = results.filter(plant =>
        plant.relationships?.foodFor?.some(food =>
          filters.foodFor!.some(filter =>
            food.toLowerCase().includes(filter.toLowerCase())
          )
        )
      );
    }

    // Shelter for relationships
    if (filters.shelterFor && filters.shelterFor.length > 0) {
      results = results.filter(plant =>
        plant.relationships?.shelterFor?.some(shelter =>
          filters.shelterFor!.some(filter =>
            shelter.toLowerCase().includes(filter.toLowerCase())
          )
        )
      );
    }

    return this.sortByPriority(results);
  }

  private sortByPriority(plants: Plant[]): Plant[] {
    return plants.sort((a, b) => {
      const scoreA = this.calculatePlantScore(a);
      const scoreB = this.calculatePlantScore(b);
      if (scoreA !== scoreB) return scoreB - scoreA;
      return a.commonName.localeCompare(b.commonName);
    });
  }

  private calculatePlantScore(plant: Plant): number {
    const hostedSpecies = getHostedSpeciesCount(plant);
    const foodShelterGroups = getFoodOrShelterGroupsCount(plant);
    return calculatePlantPriorityScore(hostedSpecies, foodShelterGroups, 0, 0);
  }

  async getFilterOptions(): Promise<{
    bloomColors: string[];
    bloomTimes: string[];
    hostPlantTo: string[];
    foodFor: string[];
    shelterFor: string[];
  }> {
    if (!this.plantsCache) {
      this.plantsCache = await PlantDataLoader.getAllPlants();
    }

    const bloomColors = new Set<string>();
    const bloomTimes = new Set<string>();
    const hostPlantTo = new Set<string>();
    const foodFor = new Set<string>();
    const shelterFor = new Set<string>();

    this.plantsCache.forEach(plant => {
      plant.characteristics?.bloomColor?.forEach(c => bloomColors.add(c));
      plant.characteristics?.bloomTime?.forEach(t => bloomTimes.add(t));
      plant.relationships?.hostPlantTo?.forEach(h => hostPlantTo.add(h));
      plant.relationships?.foodFor?.forEach(f => foodFor.add(f));
      plant.relationships?.shelterFor?.forEach(s => shelterFor.add(s));
    });

    return {
      bloomColors: Array.from(bloomColors).sort(),
      bloomTimes: Array.from(bloomTimes).sort(),
      hostPlantTo: Array.from(hostPlantTo).sort(),
      foodFor: Array.from(foodFor).sort(),
      shelterFor: Array.from(shelterFor).sort(),
    };
  }
}
