import { Page, Locator, expect } from '@playwright/test';

export class AddEmployeePage {
  readonly page: Page;

  // Form fields
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly employeeIdInput: Locator;

  // Actions
  readonly saveButton: Locator;

  // Success / navigation check
  readonly personalDetailsHeader: Locator;

  constructor(page: Page) {
    this.page = page;

    // Inputs
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.employeeIdInput = page.locator('input.oxd-input').nth(4); // Employee ID (index-based in OrangeHRM)

    // Buttons
    this.saveButton = page.getByRole('button', { name: 'Save' });

    // After save → navigates to Personal Details page
    this.personalDetailsHeader = page.getByRole('heading', { name: 'Personal Details' });
  }

  // 🔹 Add employee (main reusable method)
  async addEmployee(firstName: string, lastName: string) {

    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);

    // Optional: capture employee ID
    const empId = await this.employeeIdInput.inputValue();

    await this.saveButton.click();

    // ✅ Validate navigation to Personal Details page
    await expect(this.personalDetailsHeader).toBeVisible();

    return empId; // useful for later search/delete
  }

  // 🔹 Fill only (if you want step-by-step control)
  async fillEmployeeDetails(firstName: string, lastName: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
  }

  // 🔹 Click Save separately
  async clickSave() {
    await this.saveButton.click();
  }
}