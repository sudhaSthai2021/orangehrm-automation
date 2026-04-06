/*import { Before, After, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';
import { LoginPage } from  '../../pages/LoginPage';
import { DashboardPage } from  '../../pages/DashboardPage';
import { ForgotPasswordPage } from '../../pages/ForgotPasswordPage';
import { CustomWorld } from './world';


//let loginPage: LoginPage;
//let dashboardPage: DashboardPage;
let browser :Browser;

setDefaultTimeout(60 * 1000); // 20 seconds for all steps



const BASE_URL = 'https://opensource-demo.orangehrmlive.com';

BeforeAll(async () => {
   browser = await chromium.launch({ headless: false });
});

Before(async function (this:CustomWorld) {

  this.context = await browser.newContext({
    baseURL: BASE_URL
  });
  this.page = await this.context.newPage();

  //await this.page.goto(BASE_URL);

  // create POM instances for this scenario
  this.loginPage = new LoginPage(this.page);
  this.dashboardPage = new DashboardPage(this.page);
  this.forgotPasswordPage = new ForgotPasswordPage(this.page);

});





After(async function (this: CustomWorld) {
  if (this.page) {
    await this.page.close();
  }
  //await page.close();
  if (this.context){
    await this.context.close();
  }
  
});

AfterAll(async () => {
  await browser.close();
});
*/

// features/support/hooks.ts
import { Before, After, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { ForgotPasswordPage } from '../../pages/ForgotPasswordPage';
import { CustomWorld } from './world';

let browser: Browser;
const BASE_URL = 'https://opensource-demo.orangehrmlive.com';
setDefaultTimeout(120 * 1000);

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
});

Before(async function (this: CustomWorld) {
    this.context = await browser.newContext({ baseURL: BASE_URL });
    this.page = await this.context.newPage();
    await this.page.goto('/web/index.php/auth/login'); // ✅ ADD THIS
    // create POM instances
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.forgotPasswordPage = new ForgotPasswordPage(this.page);
});

After(async function (this: CustomWorld) {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
});

AfterAll(async () => {
    await browser.close();
});