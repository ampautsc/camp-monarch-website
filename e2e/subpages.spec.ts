/**
 * subpages.spec.ts
 *
 * Validates every sub-page (those not listed in the main-nav PAGES array)
 * by navigating directly to its URL path. Because the site is a React SPA
 * with Vercel catch-all rewrites, every slug served from /index.html will
 * read window.location.pathname and render the matching page component.
 *
 * For each sub-page this suite verifies:
 *  1. The page renders a visible, non-empty <h1> with no unhandled JS errors.
 *  2. No images return 4xx/5xx HTTP responses.
 *  3. All external links (<a href="http…">) have absolute hrefs that respond
 *     with an acceptable HTTP status code (2xx/3xx, or 401/403/405/429 which
 *     indicate the server is reachable but gating access).
 */
import { test, expect } from '@playwright/test'
import { getAllImageSrcs, SUBPAGES } from './helpers'

const SKIP_IMAGE_PREFIXES = ['data:', 'blob:']

/** HTTP status codes that mean "server is up, request intentionally gated". */
const ACCEPTABLE_STATUSES = new Set([401, 403, 405, 429])

for (const p of SUBPAGES) {
  const path = `/${p.id}`

  // ── 1. Page renders ───────────────────────────────────────────────────────
  test(`"${p.label}" renders at ${path}`, async ({ page }) => {
    const jsErrors: string[] = []
    page.on('pageerror', err => jsErrors.push(err.message))

    await page.goto(path)
    await page.waitForLoadState('networkidle')

    const h1 = page.locator('main h1').first()
    await expect(h1, `"${p.label}" must have a visible h1`).toBeVisible()
    const h1Text = await h1.innerText()
    expect(h1Text.trim().length, 'h1 should not be empty').toBeGreaterThan(0)

    expect(jsErrors, `Unhandled JS errors on "${p.label}": ${jsErrors.join(', ')}`).toHaveLength(0)
  })

  // ── 2. No broken images ───────────────────────────────────────────────────
  test(`no broken images on "${p.label}"`, async ({ page }) => {
    await page.goto(path)
    await page.waitForTimeout(500)

    const srcs = await getAllImageSrcs(page)
    const toCheck = srcs.filter(src => !SKIP_IMAGE_PREFIXES.some(pfx => src.startsWith(pfx)))

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

    expect(broken, `Broken images on "${p.label}":\n${broken.join('\n')}`).toHaveLength(0)
  })

  // ── 3. External links load ────────────────────────────────────────────────
  test(`external links load on "${p.label}"`, async ({ page }) => {
    await page.goto(path)

    const links = await page.locator('a[href^="http"]').all()
    const issues: string[] = []
    const checked = new Set<string>()

    for (const link of links) {
      const href = await link.getAttribute('href')
      if (!href || checked.has(href)) continue
      checked.add(href)

      try {
        const res = await page.request.get(href, { timeout: 15_000 })
        const status = res.status()
        if (status >= 400 && !ACCEPTABLE_STATUSES.has(status)) {
          const text = (await link.innerText()).trim().slice(0, 60)
          issues.push(`${href} → HTTP ${status} (link: "${text}")`)
        }
      } catch {
        const text = (await link.innerText()).trim().slice(0, 60)
        issues.push(`${href} → fetch failed (link: "${text}")`)
      }
    }

    expect(issues, `Broken URLs on "${p.label}":\n${issues.join('\n')}`).toHaveLength(0)
  })
}
