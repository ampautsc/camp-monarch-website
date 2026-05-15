/**
 * external-links.spec.ts
 *
 * Verifies that all external links (<a target="_blank">) on every main-nav
 * page have a non-empty, well-formed href AND that each linked URL actually
 * responds with an acceptable HTTP status code.
 *
 * Acceptable statuses (server is reachable, access intentionally gated):
 *   2xx / 3xx — success or redirect
 *   401       — authentication required
 *   403       — forbidden (server is up)
 *   405       — method not allowed (server is up)
 *   429       — rate-limited (server is up)
 *
 * URLs are deduplicated per page to avoid redundant requests.
 *
 * Sub-pages are covered by subpages.spec.ts.
 */
import { test, expect } from '@playwright/test'
import { navigateTo, PAGES } from './helpers'

/** HTTP status codes that mean "server is up, request intentionally gated". */
const ACCEPTABLE_STATUSES = new Set([401, 403, 405, 429])

for (const p of PAGES) {
  test(`all external links are valid and reachable on "${p.navLabel}"`, async ({ page }) => {
    await page.goto('/')
    if (p.id !== 'home') {
      await navigateTo(page, p.navLabel, p.eyebrow)
    }

    const links = await page.locator('a[target="_blank"]').all()
    const issues: string[] = []
    const checked = new Set<string>()

    for (const link of links) {
      const href = await link.getAttribute('href')
      const text = (await link.innerText()).trim().slice(0, 60)

      if (!href) {
        issues.push(`Missing href on link: "${text}"`)
        continue
      }
      if (!href.startsWith('http://') && !href.startsWith('https://')) {
        issues.push(`Non-absolute href "${href}" on link: "${text}"`)
        continue
      }

      if (checked.has(href)) continue
      checked.add(href)

      try {
        const res = await page.request.get(href, { timeout: 15_000 })
        const status = res.status()
        if (status >= 400 && !ACCEPTABLE_STATUSES.has(status)) {
          issues.push(`${href} → HTTP ${status} (link: "${text}")`)
        }
      } catch {
        issues.push(`${href} → fetch failed (link: "${text}")`)
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
