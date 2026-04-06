import { Page, Locator, expect } from '@playwright/test';

export class EmployeeDetailsPage {
  readonly page: Page;

  // Header (used to confirm page load)
  readonly personalDetailsHeader: Locator;

  // Editable fields
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;

  // Save button (there are multiple → use first visible)
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Page validation
    this.personalDetailsHeader = page.getByRole('heading', { name: 'Personal Details' });

    // Inputs (on Personal Details page)
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');

    // There are multiple Save buttons → pick first visible one
    this.saveButton = page.locator('button[type="submit"]').first();
  }

  // 🔹 Validate page is loaded
  async assertPageLoaded() {
    await expect(this.personalDetailsHeader).toBeVisible();
  }

  // 🔹 Update employee name
  async editEmployee(newFirstName: string, newLastName: string) {
    await this.firstNameInput.fill(newFirstName);
    await this.lastNameInput.fill(newLastName);

    await this.saveButton.click();

    // ✅ Verify changes persisted
    await expect(this.firstNameInput).toHaveValue(newFirstName);
    await expect(this.lastNameInput).toHaveValue(newLastName);
  }

  // 🔹 Get employee name (useful for validation)
  async getEmployeeName() {
    const firstName = await this.firstNameInput.inputValue();
    const lastName = await this.lastNameInput.inputValue();

    return `${firstName} ${lastName}`;
  }
}