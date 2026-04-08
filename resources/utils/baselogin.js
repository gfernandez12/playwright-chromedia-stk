import { LoginPage } from '../../pageObjects/loginPage.js';

/**
 * Login paths for each portal.
 * Import this constant to avoid hardcoding URLs in test files.
 */
export const LOGIN_PATHS = {
  USER_PORTAL: '/login',
  MANAGE_PORTAL: '/manage/login',
};

/**
 * Navigate to a login page and authenticate using stored credentials.
 * Works for both the user portal and the manage portal.
 *
 * Usage:
 *   import { performLogin, LOGIN_PATHS } from '../../resources/utils/baselogin.js';
 *
 *   test.beforeEach(async ({ page }) => {
 *     await performLogin(page, LOGIN_PATHS.MANAGE_PORTAL);
 *   });
 *
 * @param {import('@playwright/test').Page} page
 * @param {string} [loginPath] - Portal login path. Defaults to MANAGE_PORTAL.
 */
export async function performLogin(page, loginPath = LOGIN_PATHS.MANAGE_PORTAL) {
  await page.goto(loginPath);
  const loginPage = new LoginPage(page);
  const credentials = await loginPage.readCredentials();
  await loginPage.login(credentials.username, credentials.password);
}
