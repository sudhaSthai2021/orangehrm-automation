import { LoginPage } from 'pages/LoginPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
import {test, expect }from './fixtures';

test.describe('Login Tests', () => {

  //-------------Positive T----------------//

  test('Verify login page loads', async ({ loginPage}) => {

    await loginPage.gotoLoginPage();

    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();

  });

  test('Verify valid login', async ({ loginPage, dashboardPage })=>{

    await loginPage.gotoLoginPage();

    await loginPage.login('Admin', 'admin123');

    await dashboardPage.verifyDashboardLoaded();


  });


  //--------------Negative Tests--------------------//

  test('Login with invalid password', async ({ loginPage }) => {

    await loginPage.gotoLoginPage();

    await loginPage.login('Admin', 'wrongPassword');

    await loginPage.verifyInvalidLogin();

  });


  test('Login with invalid username', async ({ loginPage }) => {

    await loginPage.gotoLoginPage();

    await loginPage.login('WrongUser', 'admin123');

    await loginPage.verifyInvalidLogin();

  });


  test('Login with invalid username and password', async ({ loginPage }) => {

    await loginPage.gotoLoginPage();

    await loginPage.login('WrongUser', 'WrongPassword');

    await loginPage.verifyInvalidLogin();

  });


  test('Login with empty username', async ({ loginPage }) => {

    await loginPage.gotoLoginPage();

    await loginPage.login('', 'admin123');

    await expect(loginPage.requiredMessage).toBeVisible();

  });


  test('Login with empty password', async ({ loginPage }) => {

    await loginPage.gotoLoginPage();

    await loginPage.login('Admin', '');

    await expect(loginPage.requiredMessage).toBeVisible();

  });


  test('Login with empty username and password', async ({ loginPage }) => {

    await loginPage.gotoLoginPage();

    await loginPage.login('', '');

    await expect(loginPage.requiredMessage).toHaveCount(2);

  });

  
  test('Request password reset', async ({ loginPage,forgotPasswordPage }) => {
    
    await loginPage.gotoLoginPage();
    await loginPage.gotoForgotPasswordPage();
    await expect(forgotPasswordPage.usernameInput).toBeVisible();
    await forgotPasswordPage.requestReset('Admin');
 // ✅ First confirm navigation
await expect(forgotPasswordPage.page)
    .toHaveURL(/requestPasswordReset/, { timeout: 20000 });

// ✅ Then confirm UI
await expect(
    forgotPasswordPage.page.getByRole('heading', {name: 'Reset Password link sent successfully'})).toBeVisible();

  });

  test ('Verify Cancel button', async ({ loginPage,forgotPasswordPage})=> {
     await loginPage.gotoLoginPage();
     await loginPage.gotoForgotPasswordPage();
     await forgotPasswordPage.clickCancel();
     // ✅ Assertion: verify user is back on login page
    await expect(loginPage.usernameInput).toBeVisible();

  })


});




