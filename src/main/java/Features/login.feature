

Feature: Login to AirBnB
  

  Scenario: Login to airbnb test
  
    Given User is on home page
    When title of the page is "Vacation Homes & Condo Rentals - Airbnb - Airbnb"
    Then user click on login button
    Then user enters id "kushalp033@gmail.com"
    Then user enters pass "Java@000" 
    Then click on signIn
    Then user is on final homepage
