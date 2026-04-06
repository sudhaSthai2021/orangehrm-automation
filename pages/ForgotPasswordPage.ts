import { Page,Locator, expect} from '@playwright/test';
export class ForgotPasswordPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly resetButton: Locator;
    readonly cancelButton: Locator;
    readonly resetMessage: Locator;
    readonly requiredMessage: Locator;
    readonly successMessage:Locator;


    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.locator('input[name="username"]');
        this.resetButton = page.locator('button[type="submit"]');
        this.cancelButton=page.locator('button:has-text("Cancel")');
       this.resetMessage = page.locator('h6:has-text("Reset Password")');
        this.requiredMessage = page.locator('text=Required');
        this.successMessage = this.page.getByRole('heading', {name: 'Reset Password link sent successfully'
});
  }

    

    async requestReset(username: string){
        await this.usernameInput.fill(username);
        await this.resetButton.click()
   

   // ✅ Wait for heading (this IS a heading based on your screenshot)
   //await expect(
    // this.page.getByRole('heading', { name: 'Reset Password link sent successfully' })
   //).toBeVisible({ timeout: 90000 });

  //console.log(this.page.url());
        }

    

    async clickCancel(){
        await this.cancelButton.click();
        // 🔥 WAIT for navigation to login page
        await this.page.waitForURL('**/login');
    }

   
}