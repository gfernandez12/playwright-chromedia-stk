import { test, expect } from '@playwright/test';
import { performAdminLogin } from '../../../resources/utils/adminLogin.js';
import { AdminAccountsHomePage } from '../../../pages/admin/AdminAccountsHomePage.js';
import { AdminAccountsPage } from '../../../pages/admin/AdminAccountsPage.js';
import { commonResources } from '../../../resources/common/commonResources.js';

test.describe.serial('Accounts Page - Staging', () => {
  test.beforeEach(async ({ page }) => {
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.error('PAGE ERROR:', error.message));
    await performAdminLogin(page);
  });


  test('Admin creates Ortho Account', async ({ page }) => {
    const accountsHomePage = new AdminAccountsHomePage(page);
    const accountsPage = new AdminAccountsPage(page);
    const common = new commonResources(page);

    await accountsHomePage.navigateToAccountsPage();
    await expect(page).toHaveURL(/\/manage\/accounts/);

    await accountsPage.adminClicksAddAccount();
    await expect(page).toHaveURL(/\/manage\/accounts\/add/);

    const accountName = common.generateAccountName();
    await accountsPage.userFillsAddAccountForm(accountName);

    const companyURL = common.generateTestUrl();
    await accountsPage.userFillsCompanyURL(companyURL);

    const companyPhone = common.generateCompanyPhone();
    await accountsPage.userFillsCompanyPhone(companyPhone);

    const address1 = common.generateAddress();
    const address2 = `${common.generateCity()}, CA 90210`;
    await accountsPage.userFillsAddress(address1, address2);

    const city = common.generateCity();
    await accountsPage.inputCity.fill(city);

    await accountsPage.selectClassification('Ortho');
    await accountsPage.selectAccountManager('Gerome Fernandez');

    await accountsPage.userClicksSaveAccount();
    await accountsPage.comfirmAccountCreation();
  });

   test('Admin creates Wound Account', async ({ page }) => {
    const accountsHomePage = new AdminAccountsHomePage(page);
    const accountsPage = new AdminAccountsPage(page);
    const common = new commonResources(page);

    await accountsHomePage.navigateToAccountsPage();
    await expect(page).toHaveURL(/\/manage\/accounts/);

    await accountsPage.adminClicksAddAccount();
    await expect(page).toHaveURL(/\/manage\/accounts\/add/);

    const accountName = common.generateAccountName();
    await accountsPage.userFillsAddAccountForm(accountName);

    const companyURL = common.generateTestUrl();
    await accountsPage.userFillsCompanyURL(companyURL);

    const companyPhone = common.generateCompanyPhone();
    await accountsPage.userFillsCompanyPhone(companyPhone);

    const address1 = common.generateAddress();
    const address2 = `${common.generateCity()}, CA 90210`;
    await accountsPage.userFillsAddress(address1, address2);

    const city = common.generateCity();
    await accountsPage.inputCity.fill(city);

    await accountsPage.selectClassification('Wound');
    await accountsPage.selectAccountManager('Gerome Fernandez');

    await accountsPage.userClicksSaveAccount();
    await accountsPage.comfirmAccountCreation();
  });

   test('Admin creates Neuro Account', async ({ page }) => {
    const accountsHomePage = new AdminAccountsHomePage(page);
    const accountsPage = new AdminAccountsPage(page);
    const common = new commonResources(page);

    await accountsHomePage.navigateToAccountsPage();
    await expect(page).toHaveURL(/\/manage\/accounts/);

    await accountsPage.adminClicksAddAccount();
    await expect(page).toHaveURL(/\/manage\/accounts\/add/);

    const accountName = common.generateAccountName();
    await accountsPage.userFillsAddAccountForm(accountName);

    const companyURL = common.generateTestUrl();
    await accountsPage.userFillsCompanyURL(companyURL);

    const companyPhone = common.generateCompanyPhone();
    await accountsPage.userFillsCompanyPhone(companyPhone);

    const address1 = common.generateAddress();
    const address2 = `${common.generateCity()}, CA 90210`;
    await accountsPage.userFillsAddress(address1, address2);

    const city = common.generateCity();
    await accountsPage.inputCity.fill(city);

    await accountsPage.selectClassification('Neuro');
    await accountsPage.selectAccountManager('Gerome Fernandez');

    await accountsPage.userClicksSaveAccount();
    await accountsPage.comfirmAccountCreation();
  });

   test('Admin creates Regen Account', async ({ page }) => {
    const accountsHomePage = new AdminAccountsHomePage(page);
    const accountsPage = new AdminAccountsPage(page);
    const common = new commonResources(page);

    await accountsHomePage.navigateToAccountsPage();
    await expect(page).toHaveURL(/\/manage\/accounts/);

    await accountsPage.adminClicksAddAccount();
    await expect(page).toHaveURL(/\/manage\/accounts\/add/);

    const accountName = common.generateAccountName();
    await accountsPage.userFillsAddAccountForm(accountName);

    const companyURL = common.generateTestUrl();
    await accountsPage.userFillsCompanyURL(companyURL);

    const companyPhone = common.generateCompanyPhone();
    await accountsPage.userFillsCompanyPhone(companyPhone);

    const address1 = common.generateAddress();
    const address2 = `${common.generateCity()}, CA 90210`;
    await accountsPage.userFillsAddress(address1, address2);

    const city = common.generateCity();
    await accountsPage.inputCity.fill(city);

    await accountsPage.selectClassification('Regen');
    await accountsPage.selectAccountManager('Gerome Fernandez');

    await accountsPage.userClicksSaveAccount();
    await accountsPage.comfirmAccountCreation();
  });

   test('Admin creates Combo Account', async ({ page }) => {
    const accountsHomePage = new AdminAccountsHomePage(page);
    const accountsPage = new AdminAccountsPage(page);
    const common = new commonResources(page);

    await accountsHomePage.navigateToAccountsPage();
    await expect(page).toHaveURL(/\/manage\/accounts/);

    await accountsPage.adminClicksAddAccount();
    await expect(page).toHaveURL(/\/manage\/accounts\/add/);

    const accountName = common.generateAccountName();
    await accountsPage.userFillsAddAccountForm(accountName);

    const companyURL = common.generateTestUrl();
    await accountsPage.userFillsCompanyURL(companyURL);

    const companyPhone = common.generateCompanyPhone();
    await accountsPage.userFillsCompanyPhone(companyPhone);

    const address1 = common.generateAddress();
    const address2 = `${common.generateCity()}, CA 90210`;
    await accountsPage.userFillsAddress(address1, address2);

    const city = common.generateCity();
    await accountsPage.inputCity.fill(city);

    await accountsPage.selectClassification('Combo');
    await accountsPage.selectAccountManager('Gerome Fernandez');

    await accountsPage.userClicksSaveAccount();
    await accountsPage.comfirmAccountCreation();
  });
});
