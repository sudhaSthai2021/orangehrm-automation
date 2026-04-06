import { Page, Locator, expect } from '@playwright/test';

export class PIMPage {
  readonly page: Page;
  readonly pimMenu: Locator;
  readonly addEmployeeButton: Locator;
  readonly employeeListTab: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pimMenu = page.getByRole('link', { name: 'PIM' });
    this.addEmployeeButton = page.getByRole('button', { name: 'Add' });
    this.employeeListTab = page.getByRole('link', { name: 'Employee List' });
  }

  async goToPIM() {
    await this.pimMenu.click();
    await expect(this.page).toHaveURL(/pim/);
  }

  async clickAddEmployee() {
    await this.addEmployeeButton.click();
    await expect(this.page).toHaveURL(/addEmployee/);
  }

  async goToEmployeeList() {
    await this.employeeListTab.click();
    await expect(this.page).toHaveURL(/viewEmployeeList/);
  }
}