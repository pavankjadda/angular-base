import {expect, test} from '@playwright/test';


test.describe('Logout Test', () =>
{
    test.beforeEach(async ({page}) =>
    {
        //await integrationTestsUtil.loginRegistrar(page);
        await page.goto('/home');
    });

    test('Should redirect to Home Page On Successful Login and Logout', async ({page}) =>
    {
        // click on profile and then logout button
        await page.locator('[data-cy=profile-menu]').click();
        await page.locator('[data-cy=profile-menu-logout]').click();

        await page.locator('[data-cy=username]').type('testuser');
        await page.locator('[data-cy=password]').type('testpassword');
        await page.locator('[data-cy=submit]').click();

        // URL should include /login and Login text should present
        await expect(page.getByText('Login').first()).toBeVisible();
        await expect(page).toHaveURL('/login');
    });
});
