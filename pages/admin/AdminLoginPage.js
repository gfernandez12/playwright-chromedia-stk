import fs from 'fs/promises';
import path from 'path';
import { BasePage } from '../BasePage.js';

export class AdminLoginPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]').first();
  }

  async readCredentials(filePath = 'resources/credentials.json') {
    if (process.env.TEST_USERNAME && process.env.TEST_PASSWORD) {
      return { username: process.env.TEST_USERNAME, password: process.env.TEST_PASSWORD };
    }
    const abs = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
    const content = await fs.readFile(abs, 'utf8');
    const parsed = JSON.parse(content);
    if (!parsed.username || !parsed.password) {
      throw new Error('credentials.json must include username and password fields');
    }
    return parsed;
  }

  async login(username, password) {
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
