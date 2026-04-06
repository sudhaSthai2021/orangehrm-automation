import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly dashboardHeader: Locator;
  readonly assignLeave: Locator;
  readonly leaveList: Locator;
  readonly timesheets:Locator;
  readonly applyLeave: Locator;
  readonly myLeave: Locator;
  readonly myTimesheet: Locator;
  readonly quickLaunch: Locator;


  constructor(page: Page) {
    this.page = page;
    //this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });
    this.dashboardHeader = this.page.getByRole('heading', { name: 'Dashboard' });


    this.assignLeave = page.getByRole('button', { name: 'Assign' });
    this.leaveList = page.locator('button[title="Leave List"]');
    this.timesheets=page.locator('button[title="Timesheets"]');
    this.applyLeave = page.locator('button[title="Apply Leave"]');
    this.myLeave = page.locator('button[title="My Leave"]');
    this.myTimesheet = page.locator('button[title="My Timesheet"]');
    this.quickLaunch =  page.locator('div.orangehrm-dashboard-widget-header', { hasText: 'Quick Launch' });

    
  }

  async verifyDashboardLoaded() {
     //await this.page.waitForSelector('h6:has-text("Dashboard")');
    //await (this.dashboardHeader).waitFor({state: 'visible', timeout:20000});

    await expect(this.page).toHaveURL(/dashboard/,{timeout:20000});
    await expect(this.dashboardHeader).toBeVisible({timeout: 20000});

  

  }

  async verifyDashboardHeaderVisible() {
    await expect(this.dashboardHeader).toBeVisible({ timeout: 20000 });
}

  async verifyQuickLaunchSectionVisible(){
    
    await expect (this.quickLaunch).toBeVisible({timeout:20000});
  
  }

async verifyDashboardURLContains(text: string) {
    await expect(this.page).toHaveURL(new RegExp(text), { timeout: 20000 });
}

  async clickAssignLeave() {
    await this.assignLeave.highlight();
    

    await Promise.all([
        this.page.waitForURL(/assignLeave/),
        this.assignLeave.click(),
        
    ]);

  }
    
  async clickLeaveList() {
    await this.leaveList.click();
  }

  async clickTimesheets() {
    await this.timesheets.click();
  }

  async clickApplyLeave() {
    await this.applyLeave.click();
  }

  async clickMyLeave() {
    await this.myLeave.click();    
  }

  async clickMyTimesheet() {
    await this.myTimesheet.click();
  }

  async verifyAssignLeavePage(){  
  
    await expect(this.page).toHaveURL(/assignLeave/);
  }

  async verifyLeaveListPage() {
    await expect(this.page).toHaveURL(/viewLeaveList/);
  }

  async verifyTimesheetsPage(){
    await expect(this.page).toHaveURL(/viewEmployeeTimesheet/);    
  }

  async verifyApplyLeavePage(){
    await expect(this.page).toHaveURL(/applyLeave/);
  }

  async verifyMyLeavePage(){
    await expect(this.page).toHaveURL(/viewMyLeaveList/);
  }

  async verifyMyTimesheetPage(){
    await expect(this.page).toHaveURL(/viewMyTimesheet/);
  }


}