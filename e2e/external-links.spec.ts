/**
 * external-links.spec.ts
 *
 * Verifies that all external links (<a target="_blank">) on every page
 * have a non-empty, well-formed href. Does NOT follow links (would be slow
 * and rate-limit external sites). Catches copy-paste errors and broken
 * hrefs introduced during editing.
 *
 * Cloud Sis: if a link shows as having an empty href after you add content,
 * add a targeted test here with the expected URL pattern.
 */
import { test, expect } from '@playwright/test'
import { navigateTo, PAGES } from './helpers'

for (const p of PAGES) {
  test(`all external links have valid href on "${p.navLabel}"`, async ({ page }) => {
    await page.goto('/')
    if (p.id !== 'home') {
      await navigateTo(page, p.navLabel, p.eyebrow)
    }

    const links = await page.locator('a[target="_blank"]').all()
    const issues: string[] = []

    for (const link of links) {
      const href = await link.getAttribute('href')
      const text = (await link.innerText()).trim().slice(0, 60)

      if (!href) {
        issues.push(`Missing href on link: "${text}"`)
        continue
      }
      if (!href.startsWith('http://') && !href.startsWith('https://')) {
        issues.push(`Non-absolute href "${href}" on link: "${text}"`)
      }
    }

    expect(
      issues,
      `External link issues on "${p.navLabel}":\n${issues.join('\n')}`
    ).toHaveLength(0)
  })
}

// Key links that must exist on specific pages
test('Take Action — iNaturalist link present', async ({ page }) => {
  await page.goto('/')
  await navigateTo(page, 'Take Action', 'Take Action')
  await expect(page.locator('a[href*="inaturalist.org"]')).toBeVisible()
})

test('Take Action — Monarch Watch link present', async ({ page }) => {
  await page.goto('/')
  await navigateTo(page, 'Take Action', 'Take Action')
  await expect(page.locator('a[href*="monarchwatch.org"]')).toBeVisible()
})

test('FAQ — Journey North link present', async ({ page }) => {
  await page.goto('/')
  await navigateTo(page, 'FAQ', 'Frequently Asked Questions')
  // Open the arrival timing question to reveal the link
  await page.locator('.faq-item__question', { hasText: /when do Monarchs arrive/i }).click()
  await expect(page.locator('a[href*="journeynorth.org"]')).toBeVisible()
})
