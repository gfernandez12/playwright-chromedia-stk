import { BasePage } from '../BasePage.js';

export class AdminAccountsPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.addAccountButton = page.getByRole('button', { name: 'Add Account' });

    this.accountNameInput = page.locator('input#name');
    this.companyUrlInput = page.locator('input#companyUrl');
    this.companyPhoneInput = page.locator('input#phone');
    this.address1Input = page.locator('input#address1');
    this.address2Input = page.locator('input#address2');
    this.cityInput = page.locator('input#city');
    this.classificationDropdown = page.locator('select#classification');
    this.accountManagerDropdown = page.locator('select#accountManagerUuid');

    this.saveAccountButton = page.getByRole('button', { name: 'Save Account' });
    this.confirmSaveButton = page.locator('app-modal').getByRole('button', { name: 'Save' });
    this.successMessage = page.getByText('The requested action has successfully completed.');
  }

  async clickAddAccount() {
    await this.addAccountButton.click();
  }

  /**
   * Fill all account form fields from a structured data object.
   * @param {{ name: string, url: string, phone: string, address1: string, address2: string, city: string }} data
   */
  async fillForm(data) {
    await this.accountNameInput.fill(data.name);
    await this.companyUrlInput.fill(data.url);
    await this.companyPhoneInput.fill(data.phone);
    await this.address1Input.fill(data.address1);
    await this.address2Input.fill(data.address2);
    await this.cityInput.fill(data.city);
  }

  async selectClassification(classification) {
    await this.classificationDropdown.selectOption(classification);
  }

  async selectAccountManager(accountManager) {
    await this.accountManagerDropdown.selectOption(accountManager);
  }

  async saveAccount() {
    await this.saveAccountButton.click();
  }

  async confirmAccountCreation() {
    await this.confirmSaveButton.click();
    await this.successMessage.waitFor({ state: 'visible', timeout: 8000 });
  }
}
