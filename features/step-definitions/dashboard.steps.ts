import { Given, When, Then } from '@cucumber/cucumber';
//import { LoginPage } from  '../../pages/LoginPage';
//import { DashboardPage } from  '../../pages/DashboardPage';
import { CustomWorld } from '../support/world';


//let loginPage: LoginPage;
//let dashboardPage: DashboardPage;



Given('the user is logged into the OrangeHRM application', async function (this:CustomWorld) {
   // this.loginPage = new LoginPage(this.page);
 //   this.dashboardPage = new DashboardPage(this.page);

    await this.loginPage.gotoLoginPage();
    await this.loginPage.login('Admin', 'admin123');
    //wait for dashboard to load
    await this.dashboardPage.verifyDashboardLoaded();
    

    });
    

Then('the dashboard page should be visible', async function (this: CustomWorld) {
    
    await this.dashboardPage.verifyDashboardHeaderVisible();
});

Then('the dashboard URL contains {string}', async function (this: CustomWorld,text: string) {
    await this.dashboardPage.verifyDashboardURLContains(text);
});

When('the user navigates to the dashboard', async function (this: CustomWorld) {
    // assuming the user is already logged in, just verify dashboard is loaded
    await this.dashboardPage.verifyDashboardLoaded();
});

Then('the Quick Launch section should be visible', async function (this:CustomWorld) {
    // locator for Quick Launch section
    await this.dashboardPage.verifyQuickLaunchSectionVisible();
    
});

When('the user clicks on Assign Leave', async function (this:CustomWorld) {
    
    await  this.dashboardPage.clickAssignLeave();
});

Then('the user should be navigated to the Assign Leave page', async function (this:CustomWorld){
    await this.dashboardPage.verifyAssignLeavePage();
});

When('the user clicks on Leave List', async function (this:CustomWorld) {
    await this.dashboardPage.clickLeaveList();
});

Then('the user should be navigated to the Leave List page', async function (this:CustomWorld){
    await this.dashboardPage.verifyLeaveListPage();
});

When('the user clicks on Time Sheets', async function (this:CustomWorld) {
    await this.dashboardPage.clickTimesheets();
});

Then('the user should be navigated to the Time Sheets page', async function (this:CustomWorld){
    await this.dashboardPage.verifyTimesheetsPage();
});

When('the user clicks on Apply Leave', async function (this:CustomWorld) {
    await this.dashboardPage.clickApplyLeave();
});

Then('the user should be navigated to the Apply Leave page', async function (this:CustomWorld){
    await this.dashboardPage.verifyApplyLeavePage();
});

When('the user clicks on My Leave', async function (this:CustomWorld) {
    await this.dashboardPage.clickMyLeave();
});

Then('the user should be navigated to the My Leave page', async function (this:CustomWorld){
    await this.dashboardPage.verifyMyLeavePage();
});

When('the user clicks on My Timesheet', async function (this:CustomWorld) {
    await this.dashboardPage.clickMyTimesheet();
});

Then('the user should be navigated to the My Timesheet page', async function (this:CustomWorld){
    await this.dashboardPage.verifyMyTimesheetPage();
});




