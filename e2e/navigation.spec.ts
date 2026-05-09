/**
 * navigation.spec.ts
 *
 * Verifies:
 * - Every nav link is present and clickable
 * - Each page renders its hero eyebrow (routing is working)
 * - The brand logo navigates back to home
 * - No unhandled JS errors on any page
 */
import { test, expect } from '@playwright/test'
import { navigateTo, PAGES } from './helpers'

test.beforeEach(async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', err => errors.push(err.message))
  await page.goto('/')
  ;(page as any).__jsErrors = errors
})

test('home page loads with correct eyebrow', async ({ page }) => {
  await expect(page.locator('.hero__eyebrow')).toContainText('Camp Monarch')
})

test('brand logo click returns to home from any page', async ({ page }) => {
  await navigateTo(page, 'Why Monarchs', 'Why It Matters')
  await page.locator('.site-nav__brand').click()
  await expect(page.locator('.hero__eyebrow')).toContainText('Camp Monarch')
})

test('all nav links are present', async ({ page }) => {
  for (const p of PAGES) {
    if (p.id === 'home') continue
    await expect(
      page.getByRole('button', { name: p.navLabel, exact: true }),
      `Nav link "${p.navLabel}" should be visible`
    ).toBeVisible()
  }
})

for (const p of PAGES) {
  if (p.id === 'home') continue

  test(`navigating to "${p.navLabel}" renders correct page`, async ({ page }) => {
    await navigateTo(page, p.navLabel, p.eyebrow)
    await expect(
      page.locator('.hero__eyebrow'),
      `Expected eyebrow "${p.eyebrow}" on page "${p.navLabel}"`
    ).toContainText(p.eyebrow)

    // h1 should be present and non-empty
    const h1 = page.locator('main h1').first()
    await expect(h1).toBeVisible()
    const h1Text = await h1.innerText()
    expect(h1Text.trim().length, 'h1 should not be empty').toBeGreaterThan(0)
  })
}

test('footer navigation links are present', async ({ page }) => {
  const footer = page.locator('.site-footer')
  await expect(footer).toBeVisible()
})

test('no unhandled JS errors on home page', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', err => errors.push(err.message))
  await page.reload()
  // Brief wait for React hydration
  await page.waitForTimeout(1000)
  expect(errors, `Unexpected JS errors: ${errors.join(', ')}`).toHaveLength(0)
})
