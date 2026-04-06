Feature: Forgot Password 

Background:
    Given the user is on the login page
    And the user navigates to the Forgot Password page

@smoke @forgotpassword
Scenario Outline: Forgot password validation
   
    When the user submits username "<username>"
    Then the "<message>" message should be displayed

Examples:
| username | message |
| Admin    | success |
|          | Required|

@smoke @forgotpassword
Scenario: Cancel forgot password request
    When the user clicks the Cancel button
    Then the login page should be displayed