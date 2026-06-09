/**
 * Base class for all Page Objects.
 * Provides shared page reference and common wait utilities.
 */
export class BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
  }

  /** Wait for a visible toast/alert containing the given text. */
  async waitForSuccessMessage(text, timeout = 8000) {
    await this.page.getByText(text).waitFor({ state: 'visible', timeout });
  }

  /** Wait for a URL pattern after a navigation action. */
  async waitForURL(pattern, timeout = 15000) {
    await this.page.waitForURL(pattern, { timeout });
  }
}
