package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(

		features = {"/Users/kushalpansuriya/Desktop/QA/CucumberWorkspace/ProjectTest/src/main/java/Features/login.feature" },
		glue = {"StepDefinations" })
		//format= {"Pretty","html:test-output"})
public class TestRunner {

}