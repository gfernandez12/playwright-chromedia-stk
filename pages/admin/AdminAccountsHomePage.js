import fs from 'fs/promises';
import path from 'path';

export class AdminAccountsHomePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.accountsSideBarLink = page.locator('span.tab-name', { hasText: 'Accounts' });
    this.addAccountButton = page.getByRole('button', { name: 'Add Account' })
  }

  async navigateToAccountsPage() {
    try {
      await this.accountsSideBarLink.click();
    } catch (error) {
      throw new Error(`Cannot navigate to Accounts page: ${error.message}`);
    }
  }
}
