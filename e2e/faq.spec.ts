/**
 * faq.spec.ts
 *
 * Verifies FAQ page behavior:
 * - All 5 categories are rendered
 * - Accordion items start closed
 * - Clicking a question opens its answer
 * - Clicking again closes it
 * - aria-expanded attribute updates correctly
 * - Multiple items can be open simultaneously
 * - Key content present (regional guidance callouts)
 */
import { test, expect } from '@playwright/test'
import { navigateTo } from './helpers'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await navigateTo(page, 'FAQ', 'Frequently Asked Questions')
})

const EXPECTED_CATEGORIES = [
  'Caterpillar Care',
  'Milkweed',
  'OE Parasite',
  'Garden Planning',
  'Population & Conservation',
]

test('all FAQ categories are rendered', async ({ page }) => {
  for (const cat of EXPECTED_CATEGORIES) {
    await expect(
      page.locator('.faq-category__heading', { hasText: cat }),
      `Category "${cat}" should be visible`
    ).toBeVisible()
  }
})

test('FAQ items start collapsed', async ({ page }) => {
  const firstButton = page.locator('.faq-item__question').first()
  await expect(firstButton).toHaveAttribute('aria-expanded', 'false')
  // Answer should be hidden
  const firstAnswer = page.locator('.faq-item__answer').first()
  await expect(firstAnswer).toHaveAttribute('hidden', '')
})

test('clicking a question opens its answer', async ({ page }) => {
  const firstButton = page.locator('.faq-item__question').first()
  await firstButton.click()
  await expect(firstButton).toHaveAttribute('aria-expanded', 'true')
  const firstAnswer = page.locator('.faq-item__answer').first()
  await expect(firstAnswer).not.toHaveAttribute('hidden', '')
  // Answer text is visible
  await expect(firstAnswer).toBeVisible()
})

test('clicking an open question collapses it', async ({ page }) => {
  const firstButton = page.locator('.faq-item__question').first()
  await firstButton.click()
  await expect(firstButton).toHaveAttribute('aria-expanded', 'true')
  await firstButton.click()
  await expect(firstButton).toHaveAttribute('aria-expanded', 'false')
})

test('multiple FAQ items can be open simultaneously', async ({ page }) => {
  const buttons = page.locator('.faq-item__question')
  await buttons.nth(0).click()
  await buttons.nth(1).click()
  await expect(buttons.nth(0)).toHaveAttribute('aria-expanded', 'true')
  await expect(buttons.nth(1)).toHaveAttribute('aria-expanded', 'true')
})

test('"caterpillars disappeared" question contains wandering guidance', async ({ page }) => {
  // Find and open the caterpillars disappeared question
  const disappearedQ = page.locator('.faq-item__question', {
    hasText: /caterpillars yesterday/i,
  })
  await disappearedQ.click()
  const answer = page.locator('.faq-item__answer').filter({ hasText: /wander/i }).first()
  await expect(answer).toContainText(/wander/i)
})

test('tropical milkweed question has regional split callouts', async ({ page }) => {
  const tropicalQ = page.locator('.faq-item__question', {
    hasText: /tropical milkweed bad/i,
  })
  await tropicalQ.click()
  // Should have both orange and green callouts (the regional split pattern)
  const answer = page.locator('.faq-item__answer').filter({ hasText: /Florida|Texas/i }).first()
  await expect(answer.locator('.callout--orange')).toBeVisible()
  await expect(answer.locator('.callout--green')).toBeVisible()
})

test('egg bleaching question has regional split callouts', async ({ page }) => {
  const bleachQ = page.locator('.faq-item__question', {
    hasText: /bleach.*eggs/i,
  })
  await bleachQ.click()
  const answer = page.locator('.faq-item__answer').filter({ hasText: /Northeast|Midwest/i }).first()
  await expect(answer.locator('.callout--orange')).toBeVisible()
  await expect(answer.locator('.callout--green')).toBeVisible()
})

test('citizen science question links to iNaturalist and Journey North', async ({ page }) => {
  const citizenQ = page.locator('.faq-item__question', {
    hasText: /citizen science/i,
  })
  await citizenQ.click()
  const answer = page.locator('.faq-item__answer').filter({ hasText: /iNaturalist/i }).first()
  await expect(answer.locator('a[href*="inaturalist"]')).toBeVisible()
  await expect(answer.locator('a[href*="journeynorth"]')).toBeVisible()
})

test('Still have a question callout is present', async ({ page }) => {
  await expect(page.locator('.callout--green', { hasText: /Still have a question/i })).toBeVisible()
})
