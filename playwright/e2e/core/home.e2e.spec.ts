import { expect, test } from '@playwright/test';

test.describe('Home', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('should show title Angular V16 Base', async ({ page }) => {
		await expect(page).toHaveTitle('Angular V16 Base');
	});

	test('should show title Angular V16 Base', async ({ page }) => {
		await expect(page.getByText('Employees')).toBeVisible();
	});
});
