import fs from 'fs/promises';
import path from 'path';

export class LoginPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.userEmail = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.getByRole('button', { type: 'submit' }).first();
  }

  async readCredentials(filePath = 'resources/credentials.json') {
    const abs = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
    const content = await fs.readFile(abs, 'utf8');
    const parsed = JSON.parse(content);
    if (!parsed.username || !parsed.password) {
      throw new Error('credentials file must include username and password');
    }
    return parsed;
  }

  async inputUserEmailAddress(email) {
      try {
      await this.userEmail.fill(email);
    } catch (error) {
      throw new Error(`Cannot Input email: ${error.message}`);
    }
  }

  async inputPassword(password) {
    try {
      await this.passwordInput.fill(password);
    } catch (error) {
      throw new Error(`Cannot Input password: ${error.message}`);
    }
  }
  
  async clickLoginButton() {
    try {
      await this.loginButton.click();
    } catch (error) {
      throw new Error(`Cannot Click Login Button: ${error.message}`);
    }
  }   
}

// export default LoginPage;