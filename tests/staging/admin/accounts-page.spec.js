import { test } from '../../../fixtures/index.js';
import { AdminAssertions } from '../../../resources/assertions/adminAssertions.js';
import { generateAccountFormData } from '../../../resources/data/DataFactory.js';

const ACCOUNT_MANAGER = process.env.ACCOUNT_MANAGER ?? 'Gerome Fernandez';

/** All account classifications to verify creation flow for each. */
const CLASSIFICATIONS = ['Ortho', 'Wound', 'Neuro', 'Regen', 'Combo'];

test.describe('Admin - Accounts Page', () => {

  for (const classification of CLASSIFICATIONS) {
    test(`Admin creates ${classification} account`, async ({ page, adminAccountsHomePage, adminAccountsPage }) => {
      const assert = new AdminAssertions(page);

      await adminAccountsHomePage.navigateToAccountsPage();
      await assert.assertOnAccountsListPage();

      await adminAccountsPage.clickAddAccount();
      await assert.assertOnAddAccountPage();

      const formData = generateAccountFormData();
      await adminAccountsPage.fillForm(formData);
      await adminAccountsPage.selectClassification(classification);
      await adminAccountsPage.selectAccountManager(ACCOUNT_MANAGER);

      await adminAccountsPage.saveAccount();
      await adminAccountsPage.confirmAccountCreation();
      await assert.assertAccountCreationSuccess();
    });
  }

});
