import { Page, Locator, expect } from '@playwright/test';

export class EmployeeListPage {
  readonly page: Page;

  // Search field
  readonly employeeNameInput: Locator;
  readonly searchButton: Locator;

  // Table
  readonly employeeTableRows: Locator;

  // Delete
  readonly deleteButton: Locator;
  readonly confirmDeleteButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // 🔍 Search input (Employee Name)
    this.employeeNameInput = page.locator('input[placeholder="Type for hints..."]').first();

    // 🔍 Search button
    this.searchButton = page.getByRole('button', { name: 'Search' });

    // 📋 Table rows
    this.employeeTableRows = page.locator('.oxd-table-body .oxd-table-row');

    // 🗑️ Delete buttons
    this.deleteButton = page.locator('.oxd-icon.bi-trash');
    this.confirmDeleteButton = page.getByRole('button', { name: 'Yes, Delete' });
  }

  // 🔹 Search employee
  async searchEmployee(name: string) {
    await this.employeeNameInput.fill(name);

    // Wait for dropdown suggestion and select
    const option = this.page.locator('.oxd-autocomplete-dropdown div').first();
    await option.waitFor({ state: 'visible' });
    await option.click();

    await this.searchButton.click();

    // Wait for results
    await expect(this.employeeTableRows.first()).toBeVisible();
  }

  // 🔹 Get row by employee name
  employeeRow(name: string): Locator {
    return this.page.locator('.oxd-table-row', {
      has: this.page.locator(`text=${name}`)
    });
  }

  // 🔹 Verify employee exists
  async verifyEmployeePresent(name: string) {
    await expect(this.employeeRow(name)).toBeVisible();
  }

  // 🔹 Delete employee
  async deleteEmployee(name: string) {
    const row = this.employeeRow(name);

    // Click delete icon inside row
    await row.locator('.oxd-icon.bi-trash').click();

    // Confirm delete
    await this.confirmDeleteButton.click();

    // Verify deletion (row disappears)
    await expect(row).toHaveCount(0);
  }
}