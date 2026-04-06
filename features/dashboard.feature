Feature: Dashboard functionality
    Background:
        Given the user is logged into the OrangeHRM application

    @smoke @dashboard
    
Scenario: Verify dashboard page is displayed
        Then the dashboard page should be visible
        Then the dashboard URL contains "dashboard"

    @smoke @dashboard
    Scenario: Verify Quick Launch section is displayed
        When the user navigates to the dashboard
        Then the Quick Launch section should be visible


    @regression @dashboard
    Scenario: Verify Assign Leave navigation
        When the user clicks on Assign Leave
        Then the user should be navigated to the Assign Leave page


    @regression @dashboard
    Scenario: Verify Leave List navigation
        When the user clicks on Leave List
        Then the user should be navigated to the Leave List page


    @regression @dashboard
    Scenario: Verify Time Sheets navigation
        When the user clicks on Time Sheets
        Then the user should be navigated to the Time Sheets page


    @regression @dashboard
    Scenario: Verify Apply Leave navigation
        When the user clicks on Apply Leave
        Then the user should be navigated to the Apply Leave page


    @regression @dashboard
    Scenario: Verify My Leave navigation
        When the user clicks on My Leave
        Then the user should be navigated to the My Leave page


    @regression @dashboard
    Scenario: Verify My Timesheet navigation
        When the user clicks on My Timesheet
        Then the user should be navigated to the My Timesheet page



