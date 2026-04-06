Feature: Login functionality

@smoke @login
Scenario: Login with valid credentials
  Given the user is on the login page
  When the user enters "Admin" and "admin123"
  Then the login result should be "Dashboard"


@regression @login
Scenario Outline: Login validation with invalid credentials
  Given the user is on the login page
  When the user enters "<username>" and "<password>"
  Then the login result should be "<result>"

Examples:
  | username | password  | result |
  | Admin    | wrong123  | Error  |
  | WrAdmin  | admin123  | Error  |
  | WrAdmin  | Wrong123  | Error  |






#Feature: Login functionality
#
 #Scenario Outline: Login validation
  #Given user is on the login page
  #When user enters "<username>" and "<password>"
  #Then login result should be "<result>"

#Examples: Valid Credentials
  #| username | password  | result      |
  #| Admin    | admin123  | Dashboard   |


#Examples: Invalid Credentials
 # | username | password  | result      |
 # | Admin    | wrong123  | Error       |

  
    