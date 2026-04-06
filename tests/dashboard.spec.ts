import { test,expect } from './fixtures';


test.describe('OrangeHRM Dashboard Tests',()=>{

  test.beforeEach(async ({ loginPage, dashboardPage }) => {
    
    await loginPage.gotoLoginPage();
    await loginPage.login('Admin', 'admin123');

    await dashboardPage.verifyDashboardLoaded();

  });


    // TC01 - Verify Dashboard URL
    test('Verify Dashboard URL',async({ page }) =>{
        await expect(page).toHaveURL(/dashboard/);
    });

    // TC02 - Verify Page Title
    test('Verify Page Title', async({page})=>{
        await expect(page).toHaveTitle(/OrangeHRM/);
    });

    // TC03 - Verify Dashboard Heading
    test('Verify Dashboard Heading', async({dashboardPage})=>{
      await dashboardPage.verifyDashboardLoaded();
       
    });


    // TC04 - Verify Quick Launch Section
    test('Verify Quick Launch Section Visible', async({page})=>{
        await expect(page.locator('text=Quick Launch')).toBeVisible();
    });

    // TC05 - Verify Assign Leave Navigation
    test('Verify Assign Leave Navigation',async({dashboardPage})=>{
        await dashboardPage.clickAssignLeave();
        await dashboardPage.verifyAssignLeavePage();      
    });

    // TC06 - Verify Profile Dropdown opens
    test('Verify User DropDown', async({page})=>{
        await page.locator('.oxd-userdropdown-name').click();
        await expect(page.locator('text=Logout')).toBeVisible();
    });

    // TC07 - Verify Logout Functionality
    test('Verify Logout',async({page}) => {
        await page.locator('.oxd-userdropdown-name').click();
        await page.click('text=Logout');
        await expect(page).toHaveURL(/auth\/login/);

    });

});

