import { test, expect } from '@playwright/test';
import { PIMPage } from '../pages/PIMPage';
import { AddEmployeePage } from '../pages/AddEmployeePage';
import { EmployeeListPage } from '../pages/EmployeeListPage';
import { EmployeeDetailsPage } from '../pages/EmployeeDetailsPage';

test('Employee CRUD flow', async ({ page }) => {

  const pimPage = new PIMPage(page);
  const addEmployeePage = new AddEmployeePage(page);
  const employeeListPage = new EmployeeListPage(page);
  const employeeDetailsPage = new EmployeeDetailsPage(page);

  // CREATE
  await pimPage.goToPIM();
  await addEmployeePage.addEmployee('John', 'Doe');

  // READ
  await employeeListPage.searchEmployee('John Doe');
  await expect(employeeListPage.employeeRow('John Doe')).toBeVisible();

  // UPDATE
  await employeeDetailsPage.editEmployee('Johnny', 'Doe');

  // DELETE
  await employeeListPage.deleteEmployee('Johnny');
});