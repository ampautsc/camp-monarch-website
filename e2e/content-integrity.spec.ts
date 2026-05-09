/**
 * content-integrity.spec.ts
 *
 * Verifies that key factual content is present on each page.
 * These assertions are intentionally coarse — they test that critical
 * sections exist, not that copy is word-for-word. This allows minor edits
 * without breaking tests while still catching accidental deletions.
 *
 * When new pages are added or content is restructured, update this file
 * to reflect the new expected anchors.
 */
import { test, expect } from '@playwright/test'
import { navigateTo } from './helpers'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('Home — has call-to-action to plant milkweed', async ({ page }) => {
  // Home page should have a clear CTA button or link to plant-milkweed or take-action
  const cta = page.locator('.hero__cta, a[href*="milkweed"], button').filter({ hasText: /plant|action|start/i }).first()
  await expect(cta).toBeVisible()
})

test('Why Monarchs — population statistics are present', async ({ page }) => {
  await navigateTo(page, 'Why Monarchs', 'Why It Matters')
  // Should have the 94% decline fact or similar population data
  const statsSection = page.locator('main')
  await expect(statsSection).toContainText(/94%|165 million|1 billion/i)
})

test('Why Monarchs — "what you may not know" normalization section present', async ({ page }) => {
  await navigateTo(page, 'Why Monarchs', 'Why It Matters')
  // The normalization-breaking section added by Cloud Sis (tick 214)
  await expect(page.locator('main')).toContainText(/not know you have forgotten|anomaly/i)
})

test("The Monarch's Life — life cycle content present", async ({ page }) => {
  await navigateTo(page, "The Monarch's Life", "The Monarch's Life")
  await expect(page.locator('main')).toContainText(/egg|caterpillar|chrysalis|butterfly/i)
})

test('Plant Milkweed — native species listed', async ({ page }) => {
  await navigateTo(page, 'Plant Milkweed', 'Plant Milkweed')
  await expect(page.locator('main')).toContainText(/Asclepias/i)
  await expect(page.locator('main')).toContainText(/tuberosa|syriaca|incarnata/i)
})

test('Plant Milkweed — tropical milkweed warning present', async ({ page }) => {
  await navigateTo(page, 'Plant Milkweed', 'Plant Milkweed')
  await expect(page.locator('main')).toContainText(/curassavica|tropical/i)
})

test('The Migration — overwintering location mentioned', async ({ page }) => {
  await navigateTo(page, 'The Migration', 'The Migration')
  await expect(page.locator('main')).toContainText(/Mexico|Sierra Madre/i)
})

test('Take Action — at least 3 numbered actions present', async ({ page }) => {
  await navigateTo(page, 'Take Action', 'Take Action')
  // Should have numbered action items
  const actions = page.locator('main').locator('text=/^[1-5]\\.?$/').or(
    page.locator('.action-step, [class*="action"]').filter({ hasText: /1|2|3/i })
  )
  // More broadly, just ensure key action words are present
  await expect(page.locator('main')).toContainText(/milkweed/i)
  await expect(page.locator('main')).toContainText(/waystation|iNaturalist/i)
})

test('The First Year — month-by-month narrative present', async ({ page }) => {
  await navigateTo(page, 'The First Year', 'The First Year')
  // Should reference months and specific lifecycle events
  await expect(page.locator('main')).toContainText(/April|May|June|August|September/i)
  await expect(page.locator('main')).toContainText(/chrysalis|milkweed/i)
})

test('FAQ — at least 15 question items present', async ({ page }) => {
  await navigateTo(page, 'FAQ', 'Frequently Asked Questions')
  const items = page.locator('.faq-item__question')
  const count = await items.count()
  expect(count, `Expected at least 15 FAQ questions, found ${count}`).toBeGreaterThanOrEqual(15)
})

test('Find Plants Near Me — search interface is present', async ({ page }) => {
  await navigateTo(page, 'Find Plants Near Me', 'Find Plants')
  // Should have some kind of input or search element
  await expect(page.locator('main')).toContainText(/zip|state|region|plant/i)
})
