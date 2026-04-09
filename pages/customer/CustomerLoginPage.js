import fs from 'fs/promises';
import path from 'path';

export class CustomerLoginPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]').first();
  }

  async readCredentials(filePath = 'resources/credentials.json') {
    if (process.env.TEST_USERNAME && process.env.TEST_PASSWORD) {
      return {
        username: process.env.TEST_USERNAME,
        password: process.env.TEST_PASSWORD,
      };
    }
    const abs = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
    const content = await fs.readFile(abs, 'utf8');
    const parsed = JSON.parse(content);
    if (!parsed.username || !parsed.password) {
      throw new Error('credentials.json must include username and password fields');
    }
    return parsed;
  }

  async inputEmail(email) {
    try {
      await this.emailInput.fill(email);
    } catch (error) {
      throw new Error(`Cannot input email: ${error.message}`);
    }
  }

  async inputPassword(password) {
    try {
      await this.passwordInput.fill(password);
    } catch (error) {
      throw new Error(`Cannot input password: ${error.message}`);
    }
  }

  async clickLoginButton() {
    try {
      await this.loginButton.click();
    } catch (error) {
      throw new Error(`Cannot click login button: ${error.message}`);
    }
  }

  async login(username, password) {
    await this.inputEmail(username);
    await this.inputPassword(password);
    await this.clickLoginButton();
  }
}
