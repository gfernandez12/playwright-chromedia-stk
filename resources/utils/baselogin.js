import { LoginPage } from '../../pageObjects/loginPage.js';

/**
 * Shared login helper — reads credentials and performs login via LoginPage.
 * Use this in beforeEach hooks when tests require an authenticated session.
 *
 * @param {import('@playwright/test').Page} page
 */
export async function performLogin(page) {
  const loginPage = new LoginPage(page);
  const credentials = await loginPage.readCredentials();
  await loginPage.login(credentials.username, credentials.password);
}
