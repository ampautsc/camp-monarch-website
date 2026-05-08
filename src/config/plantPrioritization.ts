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

// ─── Monarch Relevance Ranking ────────────────────────────────────────────────
//
// Plants are ranked in four tiers based on research from Monarch Watch, the
// Monarch Joint Venture, the Xerces Society, the Pollinator Partnership, and
// Camp Monarch's own seed collections (campmonarch.org/programs/habitat-hero).
//
// Tier separation is designed so no wildlife score can bridge a tier boundary.
// Database max wildlife score = 17 pts (5 host species × 3 + 2 food groups × 1).
// Tier gaps are 40–50 pts — safely above 17.
//
// ── TIER 1 · +200 · Milkweed (Asclepias spp.) ───────────────────────────────
// Milkweed is the ONLY plant monarch caterpillars can eat. No milkweed = no
// monarchs. Female monarchs lay their eggs exclusively on Asclepias species.
// All 10 Asclepias species in this database qualify.
// Sources: Monarch Watch, MJV, Pollinator Partnership, Camp Monarch.
//
// ── TIER 2 · +120 · Critical Fall Migration Nectar ──────────────────────────
// Fall-migrating monarchs must double their body weight in fat before reaching
// Mexico. Goldenrods (Solidago) and native asters (Symphyotrichum) are the
// single most important fall fueling plants across every major authority.
// They bloom late August–November, perfectly aligned with the fall migration.
// Sources: Monarch Watch Waystation Program, Xerces Society, MJV, Camp Monarch.
//
// ── TIER 3 · +80 · High-Value Summer/Fall Monarch Nectar ────────────────────
// Joe-Pye Weed & boneset (Eutrochium/Eupatorium): peak Aug–Sep, major nectar
//   source as monarchs begin southward movement.
// Sunflowers (Helianthus): bloom Aug–Oct, documented monarch fueling stations
//   along the Texas migration corridor.
// Blazing Stars (Liatris): mid-summer bloom, strong monarch magnet confirmed
//   by Xerces and MJV.
// Ironweed (Vernonia): late summer, highly attractive to fall migrants.
// Blue Mistflower (Conoclinium): critical Texas corridor fall nectar plant.
// Sources: Monarch Watch, Xerces Society, Pollinator Partnership, MJV.
//
// ── TIER 4 · +50 · Confirmed Monarch Nectar Plants ──────────────────────────
// Excellent nectar plants visited by monarchs throughout the breeding season
// and during migration. Less migration-critical than Tier 3 but well documented.
// Echinacea/Rudbeckia (coneflowers): summer bloom, widely confirmed nectar.
// Monarda (wild bergamot): Jul–Sep, attracts monarchs and other pollinators.
// Coreopsis: long-blooming, spring–summer nectar bridge.
// Verbena (vervain): summer–fall, documented monarch nectar plant.
// Zizia aurea (golden alexander): spring gap-filler, critical early-season nectar.
// Phyla nodiflora (frogfruit): key Texas migration corridor ground cover.
// Sources: Camp Monarch seed collection, Monarch Watch, Pollinator Partnership.

/**
 * Returns a monarch-relevance bonus based on plant genus (via ID prefix).
 *
 * Uses genus-level prefix matching so all species and variety IDs within a
 * genus receive the correct tier automatically (e.g., symphyotrichum-laeve and
 * symphyotrichum-laeve-var-laeve both start with 'symphyotrichum-').
 *
 * Tier gaps (40–50 pts) exceed the database's maximum wildlife score (17 pts),
 * guaranteeing tier order is preserved regardless of individual wildlife data.
 */
export function getCampMonarchCurationBonus(plantId: string): number {
  // ── Tier 1 · +200 · ALL Milkweed ─────────────────────────────────────────
  // Asclepias: monarch caterpillar's exclusive food source
  if (plantId.startsWith('asclepias-')) return 200;

  // ── Tier 2 · +120 · Critical Fall Migration Nectar ───────────────────────
  // Solidago (goldenrods) — most important fall migration fuel, coast to coast
  // Symphyotrichum (native asters) — bloom through frost, fuels final push to Mexico
  if (plantId.startsWith('solidago-') ||
      plantId.startsWith('symphyotrichum-')) return 120;

  // ── Tier 3 · +80 · High-Value Summer/Fall Monarch Nectar ─────────────────
  // Eutrochium/Eupatorium (Joe-Pye Weed, boneset) — peak Aug–Sep nectar source
  // Helianthus (sunflowers) — Aug–Oct, critical Texas corridor migration fuel
  // Liatris (blazing stars) — mid-summer monarch magnet
  // Vernonia (ironweed) — late summer, highly attractive to fall migrants
  // Conoclinium (blue mistflower) — key fall nectar in Texas migration corridor
  if (plantId.startsWith('eutrochium-') ||
      plantId.startsWith('eupatorium-') ||
      plantId.startsWith('helianthus-') ||
      plantId.startsWith('liatris-') ||
      plantId.startsWith('vernonia-') ||
      plantId === 'conoclinium-coelestinum') return 80;

  // ── Tier 4 · +50 · Confirmed Monarch Nectar Plants ───────────────────────
  // Echinacea (purple coneflower) — summer nectar, Camp Monarch recommended
  // Rudbeckia (black-eyed Susan, coneflowers) — summer nectar bridge
  // Monarda (wild bergamot, beebalm) — Jul–Sep midsummer magnet
  // Coreopsis (tickseed) — spring–summer bloom, nectar bridge
  // Verbena (vervain) — summer–fall documented monarch nectar
  // Zizia aurea (golden alexander) — spring gap-filler, early-season nectar
  // Phyla nodiflora (frogfruit) — Texas corridor ground-level migration nectar
  if (plantId.startsWith('echinacea-') ||
      plantId.startsWith('rudbeckia-') ||
      plantId.startsWith('monarda-') ||
      plantId.startsWith('coreopsis-') ||
      plantId.startsWith('verbena-') ||
      plantId === 'zizia-aurea' ||
      plantId === 'phyla-nodiflora') return 50;

  return 0;
}
