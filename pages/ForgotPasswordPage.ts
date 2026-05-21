import { Page, Locator } from '@playwright/test';

export class ForgotPasswordPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly resetButton: Locator;
  readonly cancelButton: Locator;
  readonly resetMessage: Locator;
  readonly requiredMessage: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.resetButton = page.locator('button[type="submit"]');
    this.cancelButton = page.locator('button:has-text("Cancel")');

    this.resetMessage = page.locator('h6:has-text("Reset Password")');
    this.requiredMessage = page.locator('.oxd-input-field-error-message');

    this.successMessage = page.getByRole('heading', {
      name: /Reset Password link sent successfully/i,
    });
  }

  async requestReset(username: string) {
    if (username) {
      await this.usernameInput.fill(username);
    }

    await this.resetButton.click();
  }

  async clickCancel() {
    await this.cancelButton.click();
  }
}