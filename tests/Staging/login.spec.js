// @ts-check
import { test, expect } from '@playwright/test';

// Common Resources
import { commonResources } from '../../resources/common/commonResources.js';

// Page Objects
import { LoginPage } from '../../pageObjects/loginPage.js';

// Assertions
import { LoginPageAssertions } from '../../resources/assertions/loginPageAssertions.js';

test.describe.serial('Login Scenario Staging', () => {
  let commonresource;
  let loginPageAssertions;

  test.beforeEach(async ({ page }) => {
    commonresource = new commonResources(page);
    loginPageAssertions = new LoginPageAssertions(page);

    // page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    // page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

    // await page.goto('https://strak-stage.chromedia.net/login', {
    //   waitUntil: 'networkidle',
    //   timeout: 30000
    // });

    await commonresource.navigateTo('https://strak-stage.chromedia.net/login');

  });

  test('Login to Smart Trak app', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const credentials = await loginPage.readCredentials();
    await loginPage.inputUserEmailAddress(credentials.username);
    await loginPage.inputPassword(credentials.password);
    await loginPage.clickLoginButton();
  });
});
