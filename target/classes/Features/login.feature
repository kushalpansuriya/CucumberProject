

Feature: Login to AirBnB
  
@SmokeTest 
  Scenario: Login to airbnb test
  
    Given User is on home page
    When title of the page is "Vacation Homes & Condo Rentals - Airbnb - Airbnb"
    Then user click on login button
    Then user enters id
         |kushalp033@gmail.com|
    
    Then user enters pass
         | Password |
         | Java@000 |
         
    Then click on signIn
    Then user is on final homepage


#@SmokeTest @RegressionTest

#  Scenario Outline: Free CRM Create a new contact scenario

#Given user is already on Login Page
#When title of login page is Free CRM
#Then user enters "<username>" and "<password>"
#Then user clicks on login button
#Then user is on home page
#Then user moves to new contact page
#Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
#Then Close the browser

#Examples:
#	| username | password | firstname | lastname | position |
