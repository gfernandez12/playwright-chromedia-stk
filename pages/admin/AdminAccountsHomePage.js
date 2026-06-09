import { BasePage } from '../BasePage.js';

export class AdminAccountsHomePage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.accountsSideBarLink = page.locator('span.tab-name', { hasText: 'Accounts' });
  }

  async navigateToAccountsPage() {
    await this.accountsSideBarLink.click();
  }
}
