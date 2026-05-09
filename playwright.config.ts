import { defineConfig, devices } from '@playwright/test'

/**
 * Camp Monarch E2E test configuration.
 * Tests run against the live Vercel deployment.
 * BASE_URL can be overridden for local dev: BASE_URL=http://localhost:5173 npx playwright test
 */
export default defineConfig({
  testDir: './e2e',
  timeout: 30_000,
  expect: { timeout: 8_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['html', { open: 'never' }],
    ['json', { outputFile: 'playwright-report/results.json' }],
    process.env.CI ? ['github'] : ['list'],
  ],
  use: {
    baseURL: process.env.BASE_URL || 'https://dist-phi-ebon-52.vercel.app',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'off',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
      // Only run navigation and images suites on mobile to keep CI fast
      testMatch: ['**/navigation.spec.ts', '**/images.spec.ts'],
    },
  ],
  outputDir: 'playwright-report/test-results',
})
