/**
 * Configuration for plant prioritization in the wildflower list
 * 
 * Plants are sorted by priority score (higher score = higher priority)
 * The score is calculated based on multiple weighted factors.
 * 
 * EDIT THIS FILE to adjust how plants are prioritized in the list.
 */

export interface PlantPrioritizationConfig {
  /**
   * Points per species hosted (e.g., per butterfly/moth species)
   * Applied to hostPlantTo relationships
   */
  pointsPerHostedSpecies: number;

  /**
   * Points per group provided food or shelter
   * Applied to foodFor groups (e.g., "butterflies", "bees", "birds")
   */
  pointsPerFoodOrShelterGroup: number;

  /**
   * Weight for plants with seeds offered through the seed share program
   * Higher priority if seeds are available for distribution
   */
  seedsOfferedWeight: number;

  /**
   * Weight for plants with adoption requests
   * Higher priority if someone is requesting seeds for this plant
   */
  adoptionRequestWeight: number;
}

/**
 * Default prioritization weights
 * 
 * Priority scoring:
 * - 3 points per species hosted (hostPlantTo)
 * - 1 point per food/shelter group (foodFor)
 * - Seeds offered and adoption requests use multiplier weights
 */
export const DEFAULT_PRIORITIZATION_CONFIG: PlantPrioritizationConfig = {
  pointsPerHostedSpecies: 3,       // 3 points per butterfly/moth species hosted
  pointsPerFoodOrShelterGroup: 1,  // 1 point per food/shelter group (bees, birds, etc.)
  seedsOfferedWeight: 100,         // Seeds offered multiplier
  adoptionRequestWeight: 10,       // Adoption request multiplier
};

/**
 * Calculate priority score for a plant
 */
export function calculatePlantPriorityScore(
  hostedSpeciesCount: number,
  foodOrShelterGroupsCount: number,
  seedsOffered: number,
  adoptionRequests: number,
  config: PlantPrioritizationConfig = DEFAULT_PRIORITIZATION_CONFIG
): number {
  let score = 0;

  // Add points per hosted species (e.g., Monarch, Queen butterfly, etc.)
  score += hostedSpeciesCount * config.pointsPerHostedSpecies;

  // Add points per food/shelter group (e.g., butterflies, bees, birds, etc.)
  score += foodOrShelterGroupsCount * config.pointsPerFoodOrShelterGroup;

  // Add points for seeds offered (proportional to quantity)
  score += seedsOffered * config.seedsOfferedWeight;

  // Add points for adoption requests (proportional to quantity)
  score += adoptionRequests * config.adoptionRequestWeight;

  return score;
}

/**
 * Count the number of species a plant hosts
 * Each entry in hostPlantTo array represents a species
 */
export function getHostedSpeciesCount(plant: { 
  relationships?: { hostPlantTo?: string[] } 
}): number {
  if (!plant.relationships?.hostPlantTo) {
    return 0;
  }
  
  return plant.relationships.hostPlantTo.length;
}

/**
 * Count the number of food/shelter groups a plant supports
 * Each entry in foodFor array represents a group (bees, butterflies, birds, etc.)
 */
export function getFoodOrShelterGroupsCount(plant: {
  relationships?: { foodFor?: string[] }
}): number {
  if (!plant.relationships?.foodFor) {
    return 0;
  }
  
  return plant.relationships.foodFor.length;
}

// ─── Camp Monarch curated plant sets ─────────────────────────────────────────
//
// Tier 1 — Milkweed: the ONLY caterpillar host plants for Monarch butterflies.
// These must always rank first regardless of wildlife score.
//
// Tier 2 — Season Long Nectar Collection: Camp Monarch's curated nectar plants.
// Critical for fueling monarchs through spring, summer, and fall migration.
// Sourced from campmonarch.org/programs/habitat-hero/seed-collections

const CAMP_MONARCH_MILKWEED_IDS = new Set([
  'asclepias-syriaca',       // Common Milkweed     — most important eastern host
  'asclepias-tuberosa',      // Butterfly Weed      — drought-tolerant, beginner-friendly
  'asclepias-incarnata',     // Swamp Milkweed      — moist-soil, garden-adaptable
  'asclepias-verticillata',  // Whorled Milkweed    — late-season, dry/rocky sites
]);

const CAMP_MONARCH_NECTAR_IDS = new Set([
  'zizia-aurea',               // Golden Alexander    — spring gap-filler Apr–Jun
  'coreopsis-lanceolata',      // Lance-Leaved Coreopsis — May–Jul, drought-tolerant
  'rudbeckia-hirta',           // Black-Eyed Susan    — easy entry-level nectar
  'monarda-fistulosa',         // Wild Bergamot       — Jul–Sep midsummer magnet
  'liatris-aspera',            // Rough Blazing Star  — midsummer monarch magnet
  'symphyotrichum-laeve',      // Smooth Blue Aster   — Aug–Oct, blooms through frost
  'helianthus-grosseserratus', // Sawtooth Sunflower  — Aug–Nov fall migration fuel
  'solidago-speciosa',         // Showy Goldenrod     — most important fall nectar
]);

/**
 * Returns a curation bonus for Camp Monarch's highest-priority monarch plants.
 *
 * Tier 1 (milkweed) → +200: Monarch caterpillar host plants, always rank first.
 * Tier 2 (nectar)   → +100: Curated nectar collection, rank after milkweed.
 * All others        →   +0: Ranked by wildlife score only.
 *
 * The 200/100 gap ensures tier separation even when raw wildlife scores vary.
 */
export function getCampMonarchCurationBonus(plantId: string): number {
  if (CAMP_MONARCH_MILKWEED_IDS.has(plantId)) return 200;
  if (CAMP_MONARCH_NECTAR_IDS.has(plantId)) return 100;
  return 0;
}
