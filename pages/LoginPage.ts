import {Page,Locator,expect} from '@playwright/test';

export class LoginPage{

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly requiredMessage: Locator
    readonly forgotPasswordLink: Locator;


    constructor(page:Page){
        this.page=page;
        this.usernameInput = this.page.getByPlaceholder('Username');
        this.passwordInput = this.page.getByPlaceholder('Password');
        this.loginButton=this.page.locator('button[type="submit"]');
        this.errorMessage = page.locator('.oxd-alert-content-text');
        this.requiredMessage = page.locator('.oxd-input-field-error-message');
        this.forgotPasswordLink= page.locator('.orangehrm-login-forgot-header');
              
    }

    async gotoLoginPage(){

       // await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'domcontentloaded' });
        await this.page.goto('/web/index.php/auth/login');
        //await this.page.waitForLoadState('domcontentloaded');
        //await this.page.waitForLoadState('networkidle');
        await expect(this.usernameInput).toBeVisible({ timeout:60000});

       // await this.page.pause();
       // await this.page.goto('/web/index.php/auth/login');

    }
     
    async login(username: string, password : string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
       
        await this.loginButton.click()
     
             
        

    }

   
    async verifySuccessfulLogin() {
//await this.page.pause();
        // 1️⃣ Verify URL contains dashboard
        await expect(this.page).toHaveURL(/dashboard/, { timeout:60000 });

        // 2️⃣ Verify Dashboard header is visible
        const dashboardHeader = this.page.getByRole('heading', { name: 'Dashboard' });
        await expect(dashboardHeader).toBeVisible();
    }

    async verifyInvalidLogin(){
        //await (this.errorMessage).waitFor({ state: 'visible', timeout:60000});
        await expect(this.errorMessage).toBeVisible({ timeout:60000});
        await expect(this.errorMessage).toContainText('Invalid credentials');

    }

    async forgotPasswordLinkClicked(){
        await this.forgotPasswordLink.click();
    }

    async gotoForgotPasswordPage(){
      await this.forgotPasswordLink.click();
              
        await this.page.waitForURL(/requestPasswordResetCode/, { timeout: 15000 });
        await this.page.waitForLoadState('networkidle');
       // await expect(this.usernameInput).toBeVisible({ timeout:60000});


       // await this.page.goto('/web/index.php/auth/login');

    }

}