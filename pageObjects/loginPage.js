import fs from 'fs/promises';
import path from 'path';

export class LoginPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.userEmail = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]').first();
  }

  async readCredentials(filePath = 'resources/credentials.json') {
    // Prefer environment variables (used in CI via GitHub secrets)
    if (process.env.TEST_USERNAME && process.env.TEST_PASSWORD) {
      return {
        username: process.env.TEST_USERNAME,
        password: process.env.TEST_PASSWORD,
      };
    }
    // Fall back to local credentials file for development
    const abs = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
    const content = await fs.readFile(abs, 'utf8');
    const parsed = JSON.parse(content);
    if (!parsed.username || !parsed.password) {
      throw new Error('credentials.json must include username and password fields');
    }
    return parsed;
  }

  async inputUserEmailAddress(email) {
    try {
      await this.userEmail.fill(email);
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

  /** Convenience method: fill credentials and submit the login form */
  async login(username, password) {
    await this.inputUserEmailAddress(username);
    await this.inputPassword(password);
    await this.clickLoginButton();
  }
}
