import { expect, test } from '@playwright/test';
import { playWrightEnv } from '../../config/global-setup';

test.describe('Login', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('display error when User login fails', async ({ page }) => {
		// Expect a title "Login | PRES" a substring.
		await expect(page).toHaveTitle('Login | PRES');

		await page.locator('[data-cy=username]').type('testuser');
		await page.locator('[data-cy=password]').type('testpassword');
		await page.locator('[data-cy=submit]').click();

		// We should have visible errors now
		await expect(page.getByText('Invalid password. Please check the entered password')).toBeVisible();

		// and still be on the same URL
		await expect(page).toHaveURL('/login');
	});

	test('display error when username and password are null or empty', async ({ page }) => {
		await page.locator('[data-cy=submit]').click();

		// We should have visible errors now
		await expect(page.getByText('Username is required')).toBeVisible();
	});

	test('display error when password is null or empty', async ({ page }) => {
		await page.locator('[data-cy=username]').type('testuser');
		await page.locator('[data-cy=submit]').click();

		// We should have visible errors now
		await expect(page.getByText('Password is required')).toBeVisible();
	});

	test('display error when username is null or empty', async ({ page }) => {
		await page.locator('[data-cy=password]').type('testpassword');
		await page.locator('[data-cy=submit]').click();

		// We should have visible errors now
		await expect(page.getByText('Username is required')).toBeVisible();
	});

	test('Redirect to Home page on successful login', async ({ page }) => {
		await page.locator('[data-cy=username]').type(playWrightEnv.registering_user_username);
		await page.locator('[data-cy=password]').type(playWrightEnv.registering_user_password);
		await page.locator('[data-cy=submit]').click();

		// see home page
		await expect(page).toHaveURL('/home');

		// We should see Patients tile
		await expect(page.getByRole('link', { name: 'Patients' })).toBeVisible();
	});
});
