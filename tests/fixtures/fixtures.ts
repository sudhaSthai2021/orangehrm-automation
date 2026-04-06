import { test as base,expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { ForgotPasswordPage } from '../../pages/ForgotPasswordPage';
import { AssignLeavePage } from '../../pages/AssignLeavePage';


import { PIMPage } from '../../pages/PIMPage';
import { AddEmployeePage } from '../../pages/AddEmployeePage';
import { EmployeeListPage } from '../../pages/EmployeeListPage';
import { EmployeeDetailsPage } from '../../pages/EmployeeDetailsPage';

type MyFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    forgotPasswordPage: ForgotPasswordPage;
    assignLeavePage: AssignLeavePage;

    pimPage: PIMPage;
    addEmployeePage: AddEmployeePage;
    employeeListPage: EmployeeListPage;
    employeeDetailsPage: EmployeeDetailsPage;
  

};

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    dashboardPage: async ({ page}, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },
    forgotPasswordPage: async({ page}, use)=> {
        const forgotPasswordPage = new ForgotPasswordPage(page);
        await use(forgotPasswordPage);
    },
    assignLeavePage: async({ page}, use)=> {
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page)
        const assignLeavePage = new AssignLeavePage(page);

           // Do full setup here
        await loginPage.gotoLoginPage();
        await loginPage.login('Admin','admin123');
        await loginPage.verifySuccessfulLogin();
        await dashboardPage.clickAssignLeave();
        await assignLeavePage.assertPageLoaded();

        await use(assignLeavePage);
    },

    pimPage: async ({ page }, use) => {
       const pimPage = new PIMPage(page);
       await use(pimPage);
    },

    addEmployeePage: async ({ page }, use) => {
        const addEmployeePage = new AddEmployeePage(page);
      await use(addEmployeePage);
    },

    employeeListPage: async ({ page }, use) => {
        const employeeListPage = new EmployeeListPage(page);
        await use(employeeListPage);
    },

    employeeDetailsPage: async ({ page }, use) => {
        const employeeDetailsPage = new EmployeeDetailsPage(page);
        await use(employeeDetailsPage);
    },


});


export {expect};