//support/world.ts
/*import { IWorld } from '@cucumber/cucumber';
import { Page, BrowserContext } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { ForgotPasswordPage } from '../../pages/ForgotPasswordPage';

export class CustomWorld implements IWorld{

 context!: BrowserContext;
 page!: Page;
 loginPage!: LoginPage;
 dashboardPage!: DashboardPage;
 forgotPasswordPage!: ForgotPasswordPage;

}*/


// features/support/world.
import { setWorldConstructor } from '@cucumber/cucumber';
import { Page, BrowserContext } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { ForgotPasswordPage } from '../../pages/ForgotPasswordPage';

export class CustomWorld  {
    
    context!: BrowserContext;
    page!: Page;
    loginPage!: LoginPage;
    dashboardPage!: DashboardPage;
    forgotPasswordPage!: ForgotPasswordPage;
}

setWorldConstructor(CustomWorld);