import { AdminLoginPage } from '../../pages/admin/AdminLoginPage.js';

export const ADMIN_LOGIN_PATH = '/manage/login';

/**
 * Navigate to the admin portal and authenticate using stored credentials.
 *
 * Usage:
 *   import { performAdminLogin } from '../../../resources/utils/adminLogin.js';
 *
 *   test.beforeEach(async ({ page }) => {
 *     await performAdminLogin(page);
 *   });
 *
 * @param {import('@playwright/test').Page} page
 * @param {string} [loginPath] - Admin login path. Defaults to ADMIN_LOGIN_PATH.
 */
export async function performAdminLogin(page, loginPath = ADMIN_LOGIN_PATH) {
  await page.goto(loginPath);
  const loginPage = new AdminLoginPage(page);
  const credentials = await loginPage.readCredentials();
  await loginPage.login(credentials.username, credentials.password);
}
