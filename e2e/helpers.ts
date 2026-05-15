/**
 * Shared helpers for Camp Monarch E2E tests.
 * All navigation is SPA-based (client-side React state) — no URL changes.
 */
import { type Page } from '@playwright/test'

/** Click a nav link by its visible label and wait for the hero eyebrow to appear. */
export async function navigateTo(page: Page, navLabel: string, eyebrow: string) {
  await page.getByRole('button', { name: navLabel, exact: true }).click()
  await page.locator('.hero__eyebrow', { hasText: eyebrow }).waitFor({ state: 'visible' })
}

/** Return all image elements on the page with their src attributes. */
export async function getAllImageSrcs(page: Page): Promise<string[]> {
  return page.evaluate(() =>
    Array.from(document.querySelectorAll('img'))
      .map(img => img.src)
      .filter(src => !!src)
  )
}

/** Check if a URL returns a non-4xx/5xx HTTP status. */
export async function checkUrl(page: Page, url: string): Promise<number> {
  const response = await page.request.get(url)
  return response.status()
}

/** All pages defined in the site with their nav label and hero eyebrow. */
export const PAGES = [
  { navLabel: 'Home',               eyebrow: 'Camp Monarch',              id: 'home' },
  { navLabel: 'Why Monarchs',       eyebrow: 'Why It Matters',            id: 'why-monarchs' },
  { navLabel: "The Monarch's Life", eyebrow: "The Monarch's Life",        id: 'monarch-life' },
  { navLabel: 'Plant Milkweed',     eyebrow: 'Plant Milkweed',            id: 'plant-milkweed' },
  { navLabel: 'Find Plants Near Me',eyebrow: 'Find Plants',               id: 'native-plant-near-me' },
  { navLabel: 'Choose a Plant',     eyebrow: 'Plant Finder',              id: 'choose-a-plant' },
  { navLabel: 'The Migration',      eyebrow: 'The Migration',             id: 'the-migration' },
  { navLabel: 'Raise a Monarch',    eyebrow: 'Raise a Monarch',           id: 'raise-a-monarch' },
  { navLabel: 'The First Year',     eyebrow: 'The First Year',            id: 'the-first-year' },
  { navLabel: 'Take Action',        eyebrow: 'Take Action',               id: 'take-action' },
  { navLabel: 'FAQ',                eyebrow: 'Frequently Asked Questions',id: 'faq' },
] as const

/**
 * Sub-pages accessible by direct URL but not listed in the top-level PAGES nav array.
 * Each id corresponds to the URL slug (e.g. id 'fireflies' → path '/fireflies').
 */
export const SUBPAGES = [
  { id: 'log-a-sighting',             label: 'Log a Sighting' },
  { id: 'waystation-guide',           label: 'Waystation Guide' },
  { id: 'fireflies',                  label: 'Fireflies' },
  { id: 'box-turtles',                label: 'Box Turtles' },
  { id: 'native-bees',                label: 'Native Bees' },
  { id: 'talking-points',             label: 'Talking Points' },
  { id: 'gray-tree-frogs',            label: 'Gray Tree Frogs' },
  { id: 'downy-woodpecker',           label: 'Downy Woodpecker' },
  { id: 'baltimore-oriole',           label: 'Baltimore Oriole' },
  { id: 'northern-cardinal',          label: 'Northern Cardinal' },
  { id: 'eastern-bluebird',           label: 'Eastern Bluebird' },
  { id: 'black-capped-chickadee',     label: 'Black-capped Chickadee' },
  { id: 'ruby-throated-hummingbird',  label: 'Ruby-throated Hummingbird' },
  { id: 'american-goldfinch',         label: 'American Goldfinch' },
  { id: 'american-robin',             label: 'American Robin' },
  { id: 'indigo-bunting',             label: 'Indigo Bunting' },
  { id: 'tiger-swallowtail',          label: 'Tiger Swallowtail' },
  { id: 'green-darner',               label: 'Green Darner' },
  { id: 'garter-snake',               label: 'Garter Snake' },
  { id: 'dark-eyed-junco',            label: 'Dark-eyed Junco' },
  { id: 'eastern-chipmunk',           label: 'Eastern Chipmunk' },
  { id: 'spring-peeper',              label: 'Spring Peeper' },
  { id: 'toad',                       label: 'American Toad' },
  { id: 'little-brown-bat',           label: 'Little Brown Bat' },
  { id: 'wood-thrush',                label: 'Wood Thrush' },
  { id: 'eastern-screech-owl',        label: 'Eastern Screech Owl' },
  { id: 'polyphemus-moth',            label: 'Polyphemus Moth' },
  { id: 'luna-moth',                  label: 'Luna Moth' },
  { id: 'common-nighthawk',           label: 'Common Nighthawk' },
  { id: 'cecropia-moth',              label: 'Cecropia Moth' },
  { id: 'virginia-opossum',           label: 'Virginia Opossum' },
  { id: 'american-bumble-bee',        label: 'American Bumble Bee' },
  { id: 'chimney-swift',              label: 'Chimney Swift' },
  { id: 'purple-martin',              label: 'Purple Martin' },
  { id: 'red-tailed-hawk',            label: 'Red-tailed Hawk' },
  { id: 'eastern-meadowlark',         label: 'Eastern Meadowlark' },
  { id: 'seasonal-calendar',          label: 'Seasonal Calendar' },
  { id: 'species-gallery',            label: 'Species Gallery' },
  { id: 'habitat-transformation',     label: 'From Lawn to Habitat' },
  { id: 'hoa-guide',                  label: 'Navigating HOA Rules' },
  { id: 'habitat-score',              label: 'Yard Check' },
  { id: 'spring-checklist',           label: 'Spring Checklist' },
  { id: 'pesticide-guide',            label: 'Pesticides & Your Habitat' },
  { id: 'water-for-wildlife',         label: 'Water for Wildlife' },
  { id: 'leave-the-leaves',           label: 'Leave the Leaves' },
  { id: 'invasive-plants',            label: 'Remove Invasive Plants' },
] as const
