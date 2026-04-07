// @ts-check
import { test, expect } from '@playwright/test';
import { commonResources } from '../../resources/common/commonResources.js';
import { LoginPage } from '../../pageObjects/loginPage.js';

test.describe.serial('Login - Staging (user portal)', () => {
  /** @type {commonResources} */
  let commonResource;

  test.beforeEach(async ({ page }) => {
    commonResource = new commonResources(page);
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.error('PAGE ERROR:', error.message));
    await page.goto('/login');

  });

  test('Login to Smart Trak app', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const credentials = await loginPage.readCredentials();
    await loginPage.login(credentials.username, credentials.password);
    await expect(page).not.toHaveURL('/login');
    await commonResource.logout();
  });
});
