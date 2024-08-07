import { devices, type PlaywrightTestConfig } from '@playwright/test';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
	testDir: './playwright/e2e',
	/* Maximum time one test can run for. */
	timeout: 30000,
	expect: {
		/**
		 * Maximum time expect() should wait for the condition to be met.
		 * For example in `await expect(locator).toHaveText();`
		 */
		timeout: 30000,
	},
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env['CI'],
	/* Retry on CI only */
	retries: process.env['CI'] ? 2 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env['CI'] ? 4 : 4,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: process.env['CI'] ? 'dot' : 'list',
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
		actionTimeout: 0,
		/* Base URL to use in actions like `await page.goto('/')`. */
		//baseURL: process.env['CI'] ? process.env.URL : 'http://localhost:4200',
		baseURL: process.env['URL'],
		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: 'on-first-retry',
		screenshot: 'off',
		video: 'on',
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: 'chromium',

			/* Project-specific settings. */
			use: {
				...devices['Desktop Chrome'],
			},
		},
		/* Test against branded browsers. */
		// {
		// 	name: 'Microsoft Edge',
		// 	use: {
		// 		channel: 'msedge',
		// 	},
		// },
		// {
		// 	name: 'Google Chrome',
		// 	use: {
		// 		channel: 'chrome',
		// 	},
		// },
		// {
		// 	name: 'firefox',
		// 	use: {
		// 		...devices['Desktop Firefox'],
		// 	},
		// },
		// {
		// 	name: 'webkit',
		// 	use: {
		// 		...devices['Desktop Safari'],
		// 	},
		// },
		/* Test against mobile viewports. */
		// {
		// 	name: 'Mobile Chrome',
		// 	use: {
		// 		...devices['Pixel 5'],
		// 	},
		// },
		// {
		// 	name: 'Mobile Safari',
		// 	use: {
		// 		...devices['iPhone 12'],
		// 	},
		// },
	],

	/* Folder for test artifacts such as screenshots, videos, traces, etc. */
	// outputDir: 'test-results/',

	/* Run your local dev server before starting the tests */
	webServer: {
		command: 'pnpm start',
		port: 4200,
	},
};

export default config;
