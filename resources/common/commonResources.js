import { BasePage } from '../../pages/BasePage.js';

export class CommonResources extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.logoutMenuButton = page.locator('button[aria-haspopup="menu"]').first();
  }

  async navigateTo(url) {
    await this.page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  }

  async logout() {
    await this.logoutMenuButton.click();
    const logoutItem = this.page.getByRole('menuitem', { name: /logout/i });
    await logoutItem.waitFor({ state: 'visible', timeout: 5000 });
    await logoutItem.click();
  }
}
