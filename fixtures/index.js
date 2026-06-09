import { test as base } from '@playwright/test';
import { AdminLoginPage } from '../pages/admin/AdminLoginPage.js';
import { AdminAccountsHomePage } from '../pages/admin/AdminAccountsHomePage.js';
import { AdminAccountsPage } from '../pages/admin/AdminAccountsPage.js';
import { CommonResources } from '../resources/common/commonResources.js';
import { CustomerLoginPage } from '../pages/customer/CustomerLoginPage.js';
import { CustomerHomePage } from '../pages/customer/CustomerHomePage.js';

/**
 * Extended test with pre-wired page objects and authenticated sessions.
 *
 * Usage in a test file:
 *   import { test, expect } from '../../fixtures/index.js';
 *
 *   test('my test', async ({ adminAccountsPage }) => { ... });
 */

export const test = base.extend({
  // ─── Admin: authenticated session ───────────────────────────────────────────

  /** Navigates to admin login and authenticates. Resolves to the authenticated page. */
  adminPage: async ({ page }, use) => {
    const loginPage = new AdminLoginPage(page);
    const credentials = await loginPage.readCredentials();
    await page.goto('/manage/login');
    await loginPage.login(credentials.username, credentials.password);
    await use(page);
  },

  /** Pre-authenticated AdminAccountsHomePage */
  adminAccountsHomePage: async ({ adminPage }, use) => {
    await use(new AdminAccountsHomePage(adminPage));
  },

  /** Pre-authenticated AdminAccountsPage */
  adminAccountsPage: async ({ adminPage }, use) => {
    await use(new AdminAccountsPage(adminPage));
  },

  /** Pre-authenticated CommonResources bound to admin session */
  adminCommon: async ({ adminPage }, use) => {
    await use(new CommonResources(adminPage));
  },

  // ─── Customer: authenticated session ────────────────────────────────────────

  /** Navigates to customer login and authenticates. Resolves to the authenticated page. */
  customerPage: async ({ page }, use) => {
    const loginPage = new CustomerLoginPage(page);
    const credentials = await loginPage.readCredentials();
    await page.goto('/login');
    await loginPage.login(credentials.username, credentials.password);
    await use(page);
  },

  /** Pre-authenticated CustomerHomePage */
  customerHomePage: async ({ customerPage }, use) => {
    await use(new CustomerHomePage(customerPage));
  },
});

export { expect } from '@playwright/test';
