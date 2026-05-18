/**
 * Canonical list of all valid URL slugs in the Camp Monarch website.
 *
 * This is the single source of truth for which pages exist:
 *  - App.tsx imports this to validate incoming URL paths.
 *  - e2e/helpers.ts imports this to automatically include every page in
 *    the test suite — no manual update to the tests is required when a
 *    new page is added.
 *
 * When adding a new page:
 *   1. Add the slug here.
 *   2. Add the import + switch-case in App.tsx renderPage().
 *   3. Optionally add a nav entry in Nav.tsx (if it should appear in the nav).
 *   4. Optionally add a human-readable label override in PAGE_LABEL_OVERRIDES
 *      below (only needed when automatic title-casing is misleading, e.g.
 *      acronyms or slugs that omit a key word).
 *
 * The e2e tests will automatically cover the new page on the next run.
 */
export const ALL_PAGE_SLUGS = [
  'home',
  'why-monarchs',
  'plant-milkweed',
  'the-migration',
  'take-action',
  'choose-a-plant',
  'native-plant-near-me',
  'monarch-life',
  'raise-a-monarch',
  'the-first-year',
  'faq',
  'log-a-sighting',
  'waystation-guide',
  'fireflies',
  'box-turtles',
  'native-bees',
  'talking-points',
  'gray-tree-frogs',
  'downy-woodpecker',
  'baltimore-oriole',
  'northern-cardinal',
  'eastern-bluebird',
  'plants',
  'plants-finder',
  'plants-by-family',
  'plants-by-purpose',
  'plants-by-conditions',
  'plants-milkweeds',
  'plants-starter-plants',
  'plants-species-index',
  'plants-getting-started',
  'plants-host-plants',
  'plants-bloom-calendar',
  'plants-communities',
  'plants-common-mistakes',
  'plants-library',
  'black-capped-chickadee',
  'ruby-throated-hummingbird',
  'american-goldfinch',
  'american-robin',
  'indigo-bunting',
  'tiger-swallowtail',
  'great-spangled-fritillary',
  'green-darner',
  'garter-snake',
  'dark-eyed-junco',
  'eastern-chipmunk',
  'spring-peeper',
  'toad',
  'little-brown-bat',
  'wood-thrush',
  'eastern-screech-owl',
  'polyphemus-moth',
  'luna-moth',
  'common-nighthawk',
  'cecropia-moth',
  'virginia-opossum',
  'american-bumble-bee',
  'chimney-swift',
  'purple-martin',
  'red-tailed-hawk',
  'eastern-meadowlark',
  'american-kestrel',
  'brown-thrasher',
  'eastern-towhee',
  'carolina-wren',
  'gray-catbird',
  'mourning-dove',
  'song-sparrow',
  'seasonal-calendar',
  'species-gallery',
  'habitat-transformation',
  'hoa-guide',
  'habitat-hero',
  'habitat-score',
  'spring-checklist',
  'pesticide-guide',
  'water-for-wildlife',
  'leave-the-leaves',
  'invasive-plants',
] as const

export type PageSlug = typeof ALL_PAGE_SLUGS[number]

/**
 * Human-readable label overrides for slugs where automatic title-casing is
 * misleading (acronyms, omitted words, etc.).  Only add an entry here when
 * the auto-generated label would be confusing in test output.
 */
export const PAGE_LABEL_OVERRIDES: Partial<Record<PageSlug, string>> = {
  'toad':      'American Toad',   // slug omits the genus word
  'hoa-guide': 'HOA Guide',       // "HOA" is an acronym; auto-case gives "Hoa Guide"
  'faq':       'FAQ',             // all-caps acronym
}
