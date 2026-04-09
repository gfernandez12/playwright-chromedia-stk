export class CustomerHomePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.marketsLink = page.getByRole('listitem', { name: 'Markets' });
  }

  async selectMarketsLink() {
    try {
      await this.marketsLink.click();
    } catch (error) {
      throw new Error(`Cannot click Markets link: ${error.message}`);
    }
  }
}
