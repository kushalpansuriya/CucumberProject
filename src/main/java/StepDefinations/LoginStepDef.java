package StepDefinations;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDef {

	WebDriver driver;

	@Given("^User is on home page$")
	public void user_is_on_home_page() throws InterruptedException {
		System.setProperty("webdriver.gecko.driver", "/Users/kushalpansuriya/Desktop/QA/SelenuimJars/geckodriver");
		driver = new FirefoxDriver();
		driver.get("https://www.airbnb.ca/");
		Thread.sleep(3000);
	}

	@When("^title of the page is \\\"([^\\\"]*)\\\"$")
	public void title_of_the_page_is(String title) {
		String expectedTitle = title;
		String actualTitle = driver.getTitle();
		System.out.println(actualTitle);
		Assert.assertEquals(expectedTitle, actualTitle);
	}

	@Then("^user click on login button$")
	public void user_click_on_login_button() throws InterruptedException {
		
		

		driver.get("https://www.airbnb.ca/login");
		driver.manage().window().fullscreen();
		Thread.sleep(3000);
	
	}

	@Then("^user enters id \\\"([^\\\"]*)\\\"$")
	public void user_enters_id(String LoginId) throws InterruptedException {
		if (driver.findElement(By.xpath("//button[contains(text(),'OK')]")).isDisplayed()) {
			driver.findElement(By.xpath("//button[contains(text(),'OK')]")).click();
		}

		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,500)");

	    driver.findElement(By.xpath("//div[@class='_jwti9r']//button[@type='button']")).click();
		
		driver.findElement(By.xpath("//input[@id='email-login-email']")).sendKeys(LoginId + Keys.ENTER);

	}

	@Then("^user enters pass \\\"([^\\\"]*)\\\"$")
	public void user_enters_pass(String Pass) throws InterruptedException {
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@id='email-signup-password']")).sendKeys(Pass);

	}

	@Then("click on signIn")
	public void click_on_sign_in() {
		driver.findElement(By.xpath("//span[@class='t1dqvypu dir dir-ltr']")).click();
	}

	@Then("user is on final homepage")
	public void user_is_on_final_homepage() throws InterruptedException {
		Thread.sleep(5000);
		String expectedTitle = "Vacation Homes & Condo Rentals - Airbnb - Airbnb";
		String actualTitle = driver.getTitle();
		System.out.println(actualTitle);
		Assert.assertEquals(expectedTitle, actualTitle);
		driver.close();
	}
	
	
	
	
	//********************List method with one row of data*******************
	
//	 @Then("^user enters deal details$")
//	 public void user_enters_contacts_details(DataTable dealData){
//		 List<List<String>> dealValues =  dealData.raw();
//		 driver.findElement(By.id("title")).sendKeys(dealValues.get(0).get(0));
	
	
	
	
	//*****************Parameterized method using mapping************************
	
	
//	@Then("^user enters deal details$")
//	public void user_enters_contacts_details(DataTable dealData) {
//
//		for (Map<String, String> data : dealData.asMaps(String.class, String.class)) {
//
//			driver.findElement(By.id("title")).sendKeys(data.get("title"));
//			driver.findElement(By.id("amount")).sendKeys(data.get("amount"));
//			driver.findElement(By.id("probability")).sendKeys(data.get("probability"));
//			driver.findElement(By.id("commission")).sendKeys(data.get("commission"));
//			
//			driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click(); //save button
//			
//			//move to new deal page:
//			Actions action = new Actions(driver);
//			action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
//			driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
//
//		}
}
