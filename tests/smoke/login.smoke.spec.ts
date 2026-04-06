//import { LoginPage } from '../../pages/LoginPage';
//import { DashboardPage } from '../../pages/DashboardPage';
import { test, expect } from '../fixtures/fixtures';

test.describe('Smoke Tests - Login', ()=>{
    test('Verify Loginpage loads @smoke', async ({ loginPage }) => {


        //const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await expect(loginPage.usernameInput).toBeVisible();
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.loginButton).toBeVisible();
    });

    test('Verify valid login @smoke', async ({loginPage,dashboardPage}) => {
        //const loginPage = new LoginPage(page);
       // const dashboardPage = new DashboardPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login('Admin','admin123');
        await loginPage.verifySuccessfulLogin();
        
       
    });


});





/*test('Login test - Valid User name and Password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  // Example usage
  await loginPage.login('Admin', 'admin123');
  await dashboardPage.verifyDashboardLoaded();
  console.log("Login Positive test case - Valid User name and Password - Passed");
});

test('Login Negative test case - Valid User name and invalid Password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  // Example usage
  await loginPage.login('Admin', 'wrongPasswd');
  await expect(loginPage.errorMessage).toBeVisible(); 
  console.log("Login Negative test case- Valid User name and Invalid Password - Passed");
 
});

test('Login Negative test case - Invalid User name and Valid Password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  // Example usage
  await loginPage.login('WrongUser', 'admin123');
  await expect(loginPage.errorMessage).toBeVisible();  
  console.log("Login Negative test case- Invalid User name and Valid Password - Passed");
});

test('Login Negative test case - Invalid Username and InValid Password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  // Example usage
  await loginPage.login('WrongUser', 'WrongPasswd');
  await expect(loginPage.errorMessage).toBeVisible();  
  console.log("Login Negative test case- Invalid User name and Invalid Password - Passed");
});

test('Login Negative test case - Empty User name and Valid Password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  // Example usage
  await loginPage.login(' ', 'admin123');
  await expect(loginPage.requiredMessage).toBeVisible();  

  console.log("Login Negative test case- Empty User name and Valid Password - Passed");
});

test('Login Negative test case - Valid User name and Empty Password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  // Example usage
  await loginPage.login('Admin', ' ');
  await expect(loginPage.requiredMessage).toBeVisible();  

  console.log("Login Negative test case- Valid User name and Empty Password - Passed");
});

test('Login Negative test case - Empty User name and Empty Password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  // Example usage
  await loginPage.login(' ', ' ');
  await expect(loginPage.requiredMessage).toHaveCount(2);

  console.log("Login Negative test case- Empty User name and Empty Password - Passed");

});*/