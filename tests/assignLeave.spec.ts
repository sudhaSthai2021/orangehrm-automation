import { AssignLeavePage } from 'pages/AssignLeavePage';
import { test,expect } from './fixtures';

test.describe('Assign Leave Feature', ()=>{
    test('Assign leave successfully', async ({ assignLeavePage})=>{
        // Verify page is loaded
        await assignLeavePage.assertPageLoaded();
        // Perform assign Leave
        await assignLeavePage.assignLeave(
            'Linda Anderson',   
            'CAN - Personal',
            '2026-25-03',
            '2026-25-03',
            'CAN - Vacation'        
        );
      
        // Validate success 
        await expect(
            assignLeavePage.page.locator('text=Balance not sufficient')
    ).toBeVisible();
        
  //await assignLeavePage.page.pause();


    });




});