import { test,expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Regression Tests - Login', () =>{

    test('Invalid password @regression', async({page}) => {

        const loginPage= new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login('Admin','wrongpass');
        await loginPage.verifyInvalidLogin();

    });


    test('Invalid Username @regression', async({page})=> {

        const loginPage =new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login('wronguser','admin123');
        await loginPage.verifyInvalidLogin(); 

    });

    test ('Empty Login and valid password @regression',async({page})=> {

        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        //await page.pause();
        await loginPage.login(' ','admin123');
        await loginPage.loginButton.click();
        await expect (loginPage.requiredMessage).toBeVisible();
        
    });

    test('Empty Login and password Fields @regression', async({page}) => {

        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.loginButton.click();
        await expect(loginPage.requiredMessage).toHaveCount(2);



    });
    
});
