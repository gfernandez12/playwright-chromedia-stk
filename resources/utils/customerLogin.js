import { CustomerLoginPage } from '../../pages/customer/CustomerLoginPage.js';

export const CUSTOMER_LOGIN_PATH = '/login';

/**
 * Navigate to the customer portal and authenticate using stored credentials.
 *
 * Usage:
 *   import { performCustomerLogin } from '../../../resources/utils/customerLogin.js';
 *
 *   test.beforeEach(async ({ page }) => {
 *     await performCustomerLogin(page);
 *   });
 *
 * @param {import('@playwright/test').Page} page
 * @param {string} [loginPath] - Customer login path. Defaults to CUSTOMER_LOGIN_PATH.
 */
export async function performCustomerLogin(page, loginPath = CUSTOMER_LOGIN_PATH) {
  await page.goto(loginPath);
  const loginPage = new CustomerLoginPage(page);
  const credentials = await loginPage.readCredentials();
  await loginPage.login(credentials.username, credentials.password);
}
