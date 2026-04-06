import { Page, Locator, expect } from '@playwright/test';

export class AssignLeavePage{
    readonly page: Page;
    readonly header: Locator;
    readonly employeeNameInput: Locator;
    readonly leaveTypeDropdown: Locator;
    readonly leaveTypeOptions: Locator;
    readonly fromDateInput: Locator;
    readonly fromDateError: Locator;
    readonly toDateInput: Locator;
    readonly toDateError: Locator;
    readonly assignButton: Locator;
    readonly commentsInput: Locator;
    readonly successToast: Locator;
    readonly requiredMessages: Locator;




    constructor(page:Page){
        this.page = page;
        this.header = page.getByRole('heading', { name: 'Leave', exact: true });
        this.employeeNameInput=page.getByPlaceholder('Type for hints...');
        this.leaveTypeDropdown = page.locator('div.oxd-input-group:has(label:has-text("Leave Type"))').locator('.oxd-select-text');
        this.leaveTypeOptions = page.locator('.oxd-select-dropdown div');
        this.fromDateInput = page.locator('div.oxd-input-group:has(label:has-text("From Date")) input');
        this.fromDateError = page.locator('div.oxd-input-group:has(label:has-text("From Date")) .oxd-input-field-error-message');
        this.toDateInput = page.locator('div.oxd-input-group:has(label:has-text("To Date")) input'); 
        this.toDateError = page.locator('div.oxd-input-group:has(label:has-text("To Date")) .oxd-input-field-error-message');
        this.assignButton = page.getByRole('button', { name: 'Assign' });  
        this.commentsInput = page.locator('div.oxd-input-group:has(label:has-text("Comments")) textarea');
        this.successToast = page.locator('.oxd-toast--success');
        this.requiredMessages=page.locator('.oxd-input-field-error-message:visible');
  }  

    

    //=======================ACTION METHODS==================
 
    // Enter employee name and select first suggestion
    async selectFromAutocomplete(input: Locator,search:string) {

        await input.click();
        await input.fill('');
    if (!search) return;

    const options = this.page.locator('.oxd-autocomplete-dropdown div');

    // Type partial text
    const partial = search.slice(0, 2);
    await input.pressSequentially(partial, { delay: 100 });

    // Wait for dropdown to load
    await expect.poll(async () => {
        const texts = await options.allTextContents();
        return texts.length > 0 && texts.some(t => t.trim() !== 'Searching...');
    }).toBeTruthy();

    const validOptions = options.filter({ hasNotText: 'Searching...' });

    // ✅ Try exact match first
    const exactMatch = validOptions.filter({ hasText: search });

    if (await exactMatch.count() > 0) {
        const name = (await exactMatch.first().textContent())?.trim();
        console.log('Clicking exact match:', name);

        await exactMatch.first().click();
        await expect(input).toHaveValue(name!, { timeout: 10000 });

    } else {
        // ✅ Fallback to first option
        const firstValid = validOptions.first();

        const name = (await firstValid.textContent())?.trim();
        console.log('Fallback clicking:', name);

        await firstValid.click();
        await expect(input).toHaveValue(name!, { timeout: 10000 });
    }
}

//========================================================================================================================================
        // Select leave type from dropdown
    async selectLeaveType(leaveType:string){
        //  wait for dropdown to be visible
        await this.leaveTypeDropdown.waitFor({ state: 'visible' });

        //  ensure it's clickable
        await this.leaveTypeDropdown.scrollIntoViewIfNeeded();
        
        //open dropdown
        await this.leaveTypeDropdown.click();
        const visibleOption =this.leaveTypeOptions.filter({hasText: leaveType}).first();
        await visibleOption.waitFor({ state: 'visible' });

        await visibleOption.click();
    }
//==========================================================================================================================================
    async selectFromDate(date:string){
        await this.fromDateInput.clear();
        await this.fromDateInput.fill(date);
    }
//====================================================================================================================================
    async selectToDate(date:string){
        await this.toDateInput.clear();
        await this.toDateInput.fill(date);
    }
//======================================================================================================================================
    async enterComments(comment:string){
        await this.commentsInput.fill(comment);
    }
//===================================================================================================================================
    async clickAssign(){
        await this.assignButton.click();
        
    }

//=====================================================================================================================

async confirmAssignment(){
    await expect(this.page.locator('.orangehrm-modal-header')).toBeVisible();
    await this.page.getByRole('button', { name: 'Ok' }).click();
}
//====================================================================================================================


//.............Assertions===================

async assertPageLoaded(){
    
   // await this.page.waitForLoadState('networkidle'); // optional but helpful
    await expect(this.header).toBeVisible({ timeout:15000});
}

//======================================================================================================================================
async assertSuccessToastVisible(){
    
    await expect(this.successToast).toBeVisible();
   
}



//===============COMPLETE FLOW====================

async assignLeave(employee: string,leaveType:string, fromDate:string,toDate:string,comment:string){

        await this.selectFromAutocomplete(this.employeeNameInput,employee);  
           
        await this.selectLeaveType(leaveType);
        await this.selectFromDate(fromDate);
        await this.selectToDate(toDate);
        await this.enterComments(comment);
        await this.clickAssign();
        await this.confirmAssignment();

}
}

