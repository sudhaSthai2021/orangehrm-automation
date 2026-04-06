import { Given, When, Then } from '@cucumber/cucumber';
//import { LoginPage } from '../../pages/LoginPage';
//import { DashboardPage } from '../../pages/DashboardPage';
import { CustomWorld } from '../support/world';

//let loginPage: LoginPage;
//let dashboardPage: DashboardPage;


Given ('the user is on the login page', async function (this:CustomWorld){

    //loginPage = new LoginPage(this.page);
    await this.loginPage.gotoLoginPage();
    //await this.page.waitForLoadState('domcontentloaded');
    
});

When('the user enters {string} and {string}', async function (this:CustomWorld,username:string,password:string){
    console.log('Current URL:', await this.page.url()); // 👈 ADD HERE
    await this.loginPage.login(username,password);

});
Then('the login result should be {string}', async function (this:CustomWorld,result: string){
    if (result === 'Dashboard'){
        await this.loginPage.verifySuccessfulLogin();
    }else if (result === 'Error') {
        await this.loginPage.verifyInvalidLogin();

    }

});

    

    






