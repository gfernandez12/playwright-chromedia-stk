// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pageObjects/loginPage.js';

test.describe.serial('Login - Staging (manage portal)', () => {
  test.beforeEach(async ({ page }) => {
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.error('PAGE ERROR:', error.message));
    await page.goto('/manage/login');
  });

  test('Login to Smart Trak manage portal', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const credentials = await loginPage.readCredentials();
    await loginPage.login(credentials.username, credentials.password);
    await expect(page).not.toHaveURL('/manage/login');
  });
});
