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
