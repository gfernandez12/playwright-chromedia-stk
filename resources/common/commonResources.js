export class commonResources {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.logoutMenu = page.locator('button[aria-haspopup="menu"]').first();
  }

  async navigateTo(url) {
    await this.page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  }

  async logout() {
    try {
      await this.logoutMenu.click();
      await this.page.getByRole('menuitem', { name: /logout/i }).waitFor({ state: 'visible', timeout: 5000 });
      await this.page.getByRole('menuitem', { name: /logout/i }).click();
    } catch (error) {
      console.error(`Logout failed: ${error.message}`);
    }
  }
}
