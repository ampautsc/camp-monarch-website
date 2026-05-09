/**
 * mobile.spec.ts
 *
 * Basic mobile viewport sanity checks at 390×844 (iPhone 14 equivalent).
 * Verifies pages don't overflow horizontally and key nav elements are accessible.
 *
 * Playwright config already runs navigation.spec.ts and images.spec.ts on
 * Pixel 5 viewport — this file adds mobile-specific interaction checks.
 */
import { test, expect } from '@playwright/test'
import { navigateTo, PAGES } from './helpers'

// Run these tests on a narrow mobile viewport
test.use({ viewport: { width: 390, height: 844 } })

for (const p of PAGES) {
  test(`"${p.navLabel}" — no horizontal overflow on mobile`, async ({ page }) => {
    await page.goto('/')
    if (p.id !== 'home') {
      await navigateTo(page, p.navLabel, p.eyebrow)
    }

    // Scroll to bottom to trigger any lazy-loaded content
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(300)

    const overflow = await page.evaluate(() => {
      return document.body.scrollWidth > document.documentElement.clientWidth
    })

    expect(
      overflow,
      `Page "${p.navLabel}" overflows horizontally on mobile (390px)`
    ).toBe(false)
  })
}

test('FAQ accordion is usable on mobile', async ({ page }) => {
  await page.goto('/')
  await navigateTo(page, 'FAQ', 'Frequently Asked Questions')

  const firstQuestion = page.locator('.faq-item__question').first()
  await expect(firstQuestion).toBeVisible()
  await firstQuestion.click()
  await expect(firstQuestion).toHaveAttribute('aria-expanded', 'true')
})

test('nav links are accessible on mobile', async ({ page }) => {
  await page.goto('/')
  // Nav should exist — may be collapsed on mobile but should be present in DOM
  await expect(page.locator('.site-nav')).toBeAttached()
})
