import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  

  testDir: './tests',
  reporter: [['html', { open: 'never' }]], // 'open: always' to auto-open
  timeout:90000, //90 seconds for test
  use: {
    headless: false, // you can change to false for headed runs
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    trace: 'on-first-retry',
    navigationTimeout:90000,
    actionTimeout:30000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  
  workers:1,

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
   
  ],
    
 
});
