
 // features/step-definitions/forgotPassword.steps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

When('the user navigates to the Forgot Password page', async function (this:CustomWorld) {
    await this.loginPage.gotoForgotPasswordPage();
});

When('the user submits username {string}', async function (this:CustomWorld,username: string) {
   // console.log('Current URL:', await this.page.url()); 
    await this.forgotPasswordPage.usernameInput.waitFor({ state: 'visible' });
    await this.forgotPasswordPage.requestReset(username);

});

Then('the {string} message should be displayed', async function (this:CustomWorld,message: string) {
    if (message === 'success') {
        await this.page.waitForURL(/sendPasswordReset/, { timeout: 90000 });
        await expect(this.forgotPasswordPage.successMessage).toBeVisible({ timeout: 90000});
    } else if (message === 'Required') {
        await expect(this.forgotPasswordPage.requiredMessage).toBeVisible();
    }
});

When('the user clicks the Cancel button', async function (this:CustomWorld) {
    await this.forgotPasswordPage.clickCancel();
});

Then('the login page should be displayed', async function (this:CustomWorld) {
     await expect(this.loginPage.usernameInput).toBeVisible();
});

