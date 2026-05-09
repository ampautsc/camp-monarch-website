/**
 * images.spec.ts
 *
 * Verifies that no images return 4xx/5xx status codes on any page.
 * This catches the class of bug where images are referenced but not uploaded
 * (e.g., the broken plant images issue from earlier in the project).
 *
 * Strategy: visit each page, collect all <img> src values, request each one,
 * assert HTTP 200 (or 304 for cached). Data URIs and blobs are skipped.
 */
import { test, expect } from '@playwright/test'
import { navigateTo, getAllImageSrcs, PAGES } from './helpers'

const SKIP_PREFIXES = ['data:', 'blob:']

for (const p of PAGES) {
  test(`no broken images on "${p.navLabel}"`, async ({ page }) => {
    await page.goto('/')
    if (p.id !== 'home') {
      await navigateTo(page, p.navLabel, p.eyebrow)
    }

    // Wait for images to settle
    await page.waitForTimeout(500)

    const srcs = await getAllImageSrcs(page)
    const toCheck = srcs.filter(src => !SKIP_PREFIXES.some(prefix => src.startsWith(prefix)))

    const broken: string[] = []
    for (const src of toCheck) {
      try {
        const res = await page.request.get(src)
        if (res.status() >= 400) {
          broken.push(`${src} → HTTP ${res.status()}`)
        }
      } catch {
        broken.push(`${src} → fetch failed`)
      }
    }

    expect(
      broken,
      `Broken images on "${p.navLabel}":\n${broken.join('\n')}`
    ).toHaveLength(0)
  })
}

test('Choose a Plant — plant card images load when a plant is selected', async ({ page }) => {
  await page.goto('/')
  await navigateTo(page, 'Choose a Plant', 'Plant Finder')

  // Wait for plant cards to render
  await page.locator('.plant-card, [class*="plant"]').first().waitFor({ timeout: 10_000 }).catch(() => {})

  const srcs = await getAllImageSrcs(page)
  const toCheck = srcs.filter(src => !SKIP_PREFIXES.some(prefix => src.startsWith(prefix)))

  const broken: string[] = []
  for (const src of toCheck) {
    try {
      const res = await page.request.get(src)
      if (res.status() >= 400) {
        broken.push(`${src} → HTTP ${res.status()}`)
      }
    } catch {
      broken.push(`${src} → fetch failed`)
    }
  }

  expect(
    broken,
    `Broken images on Choose a Plant:\n${broken.join('\n')}`
  ).toHaveLength(0)
})
