// @ts-check
import { test, expect } from '@playwright/test';
import { performLogin, LOGIN_PATHS } from '../../resources/utils/baselogin.js';

test.describe.serial('Accounts Page - Staging', () => {
  test.beforeEach(async ({ page }) => {
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.error('PAGE ERROR:', error.message));
    await performLogin(page, LOGIN_PATHS.MANAGE_PORTAL);
  });

  test('Accounts page loads after login', async ({ page }) => {
    await expect(page).not.toHaveURL('/manage/login');
  });
});
