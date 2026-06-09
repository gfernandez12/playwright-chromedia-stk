import { expect } from '@playwright/test';

export class AdminAssertions {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
  }

  async assertOnAccountsListPage() {
    await expect(this.page).toHaveURL(/\/manage\/accounts/);
  }

  async assertOnAddAccountPage() {
    await expect(this.page).toHaveURL(/\/manage\/accounts\/add/);
  }

  async assertAccountCreationSuccess() {
    await expect(
      this.page.getByText('The requested action has successfully completed.')
    ).toBeVisible({ timeout: 8000 });
  }

  async assertOnAdminDashboard() {
    await expect(this.page).toHaveURL(/\/manage/);
  }
}
