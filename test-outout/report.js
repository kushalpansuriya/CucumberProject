$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/kushalpansuriya/Desktop/QA/CucumberWorkspace/ProjectTest/src/main/java/Features/login.feature");
formatter.feature({
  "line": 3,
  "name": "Login to AirBnB",
  "description": "",
  "id": "login-to-airbnb",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Login to airbnb test",
  "description": "",
  "id": "login-to-airbnb;login-to-airbnb-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "title of the page is \"Vacation Homes \u0026 Condo Rentals - Airbnb - Airbnb\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters id",
  "rows": [
    {
      "cells": [
        "kushalp033@gmail.com"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters pass",
  "rows": [
    {
      "cells": [
        "Password"
      ],
      "line": 15
    },
    {
      "cells": [
        "Java@000"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "click on signIn",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is on final homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_home_page()"
});
formatter.result({
  "duration": 8567731958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vacation Homes \u0026 Condo Rentals - Airbnb - Airbnb",
      "offset": 22
    }
  ],
  "location": "LoginStepDef.title_of_the_page_is(String)"
});
formatter.result({
  "duration": 20500083,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_click_on_login_button()"
});
formatter.result({
  "duration": 4203828834,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_enters_id(DataTable)"
});
formatter.result({
  "duration": 800637709,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_enters_pass(DataTable)"
});
formatter.result({
  "duration": 2078070875,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.click_on_sign_in()"
});
formatter.result({
  "duration": 235303084,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_final_homepage()"
});
formatter.result({
  "duration": 5808394584,
  "status": "passed"
});
});