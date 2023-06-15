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
  "name": "user enters id \"kushalp033@gmail.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters pass \"Java@000\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on signIn",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user is on final homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_home_page()"
});
formatter.result({
  "duration": 9002770750,
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
  "duration": 11932417,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_click_on_login_button()"
});
formatter.result({
  "duration": 4297636000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kushalp033@gmail.com",
      "offset": 16
    }
  ],
  "location": "LoginStepDef.user_enters_id(String)"
});
formatter.result({
  "duration": 928151334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java@000",
      "offset": 18
    }
  ],
  "location": "LoginStepDef.user_enters_pass(String)"
});
formatter.result({
  "duration": 1075803333,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.click_on_sign_in()"
});
formatter.result({
  "duration": 233899584,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_is_on_final_homepage()"
});
formatter.result({
  "duration": 5728026041,
  "status": "passed"
});
});