// @ts-check
import { test, expect } from '@playwright/test';
import { commonResources } from '../../resources/common/commonResources.js';
import { performLogin } from '../../resources/utils/baselogin.js';

test.describe.serial('Accounts Page - Staging', () => {
  /** @type {commonResources} */
  let commonResource;

  test.beforeEach(async ({ page }) => {
    commonResource = new commonResources(page);
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.error('PAGE ERROR:', error.message));
    await page.goto('/manage/login');
    await performLogin(page);
  });

  test('Accounts page loads after login', async ({ page }) => {
    await expect(page).not.toHaveURL('/manage/login');
  });
});
