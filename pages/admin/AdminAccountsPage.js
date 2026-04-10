import fs from 'fs/promises';
import path from 'path';

export class AdminAccountsPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.addAccountButton = page.getByRole('button', { name: 'Add Account' })

    this.inputAccountName = page.locator('input#name')
    this.inputCompanyURL = page.locator('input#companyUrl')
    this.inputCompanyPhone = page.locator('input#phone')
    this.inputAddress1 = page.locator('input#address1')
    this.inputAddress2 = page.locator('input#address2')
    this.inputCity = page.locator('input#city')
    this.classificationDropdown = page.locator('select#classification');
    this.accountManagerDropdown = page.locator('select#accountManagerUuid'); // New locator for

    this.clickSubmitButton = page.getByRole('button', { name: 'Save Account' })

    //confirm modal locators
    this.confirmSaveonModalButton = page.locator('app-modal').getByRole('button', { name: 'Save' })
  }

  async adminClicksAddAccount() {
    try {
      await this.addAccountButton.click();
    } catch (error) {
      throw new Error(`Cannot add account: ${error.message}`);
    }
  }

  async userFillsAddAccountForm(accountName) {    
    try{
      await this.inputAccountName.fill(accountName);
    }catch(error){
      throw new Error(`Cannot fill add account form: ${error.message}`);
    }
  }

  async userFillsCompanyURL(companyURL) {
    try {
      await this.inputCompanyURL.fill(companyURL);
    } catch (error) {
      throw new Error(`Cannot fill add account form with details: ${error.message}`);
    }
  }

  async userFillsCompanyPhone(companyPhone) {
    try {
      await this.inputCompanyPhone.fill(companyPhone);
    } catch (error) {
      throw new Error(`Cannot fill add account form with details: ${error.message}`);
    }
  }

  async userFillsAddress(address1, address2) {
    try {
      await this.inputAddress1.fill(address1);
      await this.inputAddress2.fill(address2);
    } catch (error) {
      throw new Error(`Cannot fill add account form with details: ${error.message}`);
    }
  }

  async userFillsCity(city) {
    try {
      await this.inputCity.fill(city);
    } catch (error) {
      throw new Error(`Cannot fill add account form with details: ${error.message}`);
    }
  }

  async selectClassification(classification) {
    try {
      await this.classificationDropdown.selectOption(classification);
    } catch (error) {
      throw new Error(`Cannot select classification: ${error.message}`);
    }
  }

  async selectAccountManager(accountManager) {
    try {
      await this.accountManagerDropdown.selectOption(accountManager);
    } catch (error) {
      throw new Error(`Cannot select account manager: ${error.message}`);
    }
  }

  async comfirmAccountCreation() {
    try {
      await this.confirmSaveonModalButton.click();
      await this.page.getByText('The requested action has successfully completed.').waitFor({ state: 'visible', timeout: 5000 });
      await this.page.waitForTimeout(10000);
    } catch (error) {
      throw new Error(`Account creation confirmation failed: ${error.message}`);
    }
  }

  async userClicksSaveAccount() {
    try {
      await this.clickSubmitButton.click();
    } catch (error) {
      throw new Error(`Cannot save account: ${error.message}`);
    }
  }
}
