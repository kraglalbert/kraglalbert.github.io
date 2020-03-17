---
layout: post
title: "Getting Started with Cucumber"
comments: true
description: "Want to spice up your test suite? Get the non-technical stakeholders involved."
keywords: "cucumber, gherkin, acceptance tests, testing"
reading_time: 5
---

1. [Why Use Cucumber?](#why-use-cucumber)

2. [Gherkin](#gherkin)

3. [Cucumber with Java Spring](#cucumber-with-java-spring)

4. [Cucumber with Flask](#cucumber-with-flask)

5. [Conclusion](#conclusion)

A few months ago I started using [Cucumber](https://cucumber.io/) for the first time. The concept is fairly straightforward: tests are centered around feature files, which are written in plain English. The feature files make use of Gherkin, which is the syntax for writing them. A few keywords are used to trigger actual code in your Cucumber tests, so that tests can be connected to the feature requirements for your application. This is a great way to ensure that your application is meeting all of its requirements.

## Why Use Cucumber?

Cucumber tests are really integration tests, since they (likely) test your application without mocking anything. However, while normal integration tests can verify that various components work together, Cucumber tests can verify that these components work together _to implement a certain feature successfully_.

The other added benefit is that feature files are written in plain English, so non-technical stakeholders can easily understand them and feel more confident that their requirements are being met.

## Gherkin

In this post I'll go over setting up Cucumber in Java (in a Spring project) as well as in Python (in a Flask project). But before we do that, let's take a look at the basics of Gherkin syntax.

Here's an example feature file:

```cucumber
Feature: a User can list an item for sale

    This is a description of the feature. It will not run any
    code, but it can be used to give more context for the feature.

    Scenario: User uploads a new item for sale
        Given the User is logged in
        When the User enters information about their item
        Then the item is posted for sale

    Scenario: User edits an existing item for sale
        Given the User is logged in
        And has an existing item listed for sale
        When the User edits information about their item
        Then the item posting is updated
```

Let's break this down. At the very top, the `Feature` keyword lets us know that this is a Cucumber feature. Below that, you can write a description of the feature, but this isn't required. The `Scenario` keyword defines a scenario, which is how test cases in a Cucumber feature can be organized. A feature file can have multiple scenarios; the example above has 2. Feature files are saved with the `.feature` extension, e.g. `list_item_for_sale.feature`.

The highlighted words within each scenario highlight the **Given-When-Then** flow that occurs within a scenario. These are known as steps in a scenario. The `Given` block is used as a setup for the scenario, i.e. what needs to already be true before the scenario can occur. The `When` block describes the action that causes the scenario to occur. Lastly, the `Then` block describes the expected outcome.

In addition to the three main step keywords, Gherkin also supports `And` and `But` as keywords. These are typically used to make a scenario more readable; an example can be scene in the second scenario above.

These are just the basics, but it's enough to get started. For the full Gherkin syntax reference, check out the [official documentation](https://cucumber.io/docs/gherkin/reference/).

## Cucumber with Java Spring

Cucumber offers official support for several different languages, and Java is one of them. For this post we'll assume we have a standard Spring Boot project with the following structure:

```
|-- pom.xml
|-- src/
    |-- main/
        |-- ... application code ...
    |-- test/
        |-- pkg/app-tests/
            |-- cucumber/
                |-- CucumberIT.java
                |-- CucumberContextConfiguration.java
                |-- ListItemForSaleIT.java
            |-- ApplicationTests.java
        |-- resources/
            |-- features/
                |-- list_item_for_sale.feature
```

I'll describe how you can run the tests using Maven, but you can use other build tools such as Gradle as well. To get Maven set up to run Cucumber, add the following to your `pom.xml`:

```xml
<dependencies>
    <dependency>
      <groupId>io.cucumber</groupId>
      <artifactId>cucumber-java8</artifactId>
      <version>4.8.0</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>io.cucumber</groupId>
      <artifactId>cucumber-spring</artifactId>
      <version>4.8.0</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>io.cucumber</groupId>
      <artifactId>cucumber-junit</artifactId>
      <version>4.8.0</version>
      <scope>test</scope>
    </dependency>
</dependencies>
...
<build>
    <pluginManagement>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-failsafe-plugin</artifactId>
            </plugin>
        </plugins>
    </pluginManagement>
</build>
```

Note that at the time of writing, 4.8.0 was the latest version of Cucumber for Maven; there may be newer versions available now.

> Side note: if you see files that end with `IT.java`, the IT is short for "integration test" and this is the default thing that the `maven-failsafe` plugin looks for when scanning for tests to run.

Next, we'll use the example feature file from before as our feature and put it under `src/test/resources/features`. Once that's done, we can start writing the actual test files. We'll take a look at the `CucumberIT.java` file first:

```java
package pkg.cucumber;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

/** Configuration for Cucumber tests */
@RunWith(Cucumber.class)
@CucumberOptions(
        features = "classpath:features",
        plugin = {"pretty", "json:target/cucumber-report.json"})
public class CucumberIT {}
```

This file defines two important things:

- How the Cucumber tests should be run: `@RunWith(Cucumber.class)`
- Where they can be found: `features = "classpath:features"`

Additionally, we also make use of the `pretty` plugin to make the test outputs a little nicer. Next, we make a file that configures the Spring context for all of our Cucumber tests:

```java
package pkg.cucumber;

import io.cucumber.java.Before;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class CucumberContextConfiguration {

    @Before
    public void setupCucumberSpringContext() {
        // Dummy method so cucumber will recognize this class as glue
        // and use its context configuration.
    }
}
```

Here I made use of three Spring annotations, but you can use any that you need in your context. With a setup like this, no context definitions are required in any of the actual Cucumber test files.

With those two files done, we're ready to write our first Cucumber test. In general, each feature file will have a corresponding Java test file. In this post we'll only work with one feature (`list_item_for_sale.feature`), but it's easy to add more. Our corresponding test file for this feature will be `ListItemForSaleIT.java`:

```java
package pkg.cucumber;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ListItemForSaleIT {

    /* Autowire anything you need here, or put global test variables */

    @Given("the User is logged in")
    public void userIsLoggedIn() {
        /* Verify that user exists and is logged in */
    }

    @And("has an existing item listed for sale")
    public void userHasItemListedForSale() {
        /* Verify that user has an item listed for sale */
    }

    @When("the User enters information about their item")
    public void userEntersItemInformation() {
        /* Code that creates the item listing */
    }

    @Then("the item is posted for sale")
    public void itemIsPosted() {
        /* Verify correctness with assert statements */
    }

    @When("the User edits information about their item")
    public void userEditsItem() {
        /* Code that updates the item listing */
    }

    @Then("the item posting is updated")
    public void itemIsUpdated() {
        /* Verify correctness with assert statements */
    }
}
```

I didn't put any actual test code, since the contents of each function will vary depending on the application and its implementation. If you have a RESTful API for you backend, `MockMvc` can be useful for testing your endpoints.

As you can probably tell, each of the `@Given`, `@When`, etc. tags in the file match with keywords in Cucumber feature files. The strings within the tags can also be written as regular expressions for more powerful matching. This is essentially how feature files connect to Java test files.

To actually run your Cucumber tests, run the following from the command line:

```
mvn failsafe:integration-test
```

If everything went well, you'll see the feature scenarios get printed along with the function that ran for each step.

## Cucumber with Flask

Unlike Cucumber in Java, Cucumber's support for Python is considered "semi-official" since the implementation is hosted outside of Cucumber (but still uses Cucumber components). The library we'll be using is called **behave**, and it has a lot of similarities with what we saw in Java. The main difference (that I've noticed, at least) is that behave offers somewhat less functionality compared to Java, but the core functionality is still there. I also found the initial setup to be a bit trickier.

Assuming you've already got a virtual environment set up and ready to go, you can install behave using pip:

```
pip install behave
```

In the rest of this section we'll be dealing with a Flask app that has the following structure:

```
|-- app-name/
    |-- backend/
        |-- tests/
        |-- features/
            |-- steps/
                |-- list_item_for_sale.py
            |-- environment.py
            |-- list_item_for_sale.feature
        |-- requirements.txt
        |-- config.py
        |-- manage.py
        |-- app/
            |-- main/
                |-- __init_.py
                |-- views.py
            |-- other_blueprint/
	            |-- __init_.py
	            |-- views.py
            |-- __init__.py
```

To start, we'll take a look at the contents of the `features` folder. First up is the `environment.py` file:

```python
from behave import fixture, use_fixture
from app import create_app, db

@fixture
def app_client(context, *args, **kwargs):
    context.app = create_app("testing")
    context.app_context = context.app.app_context()
    context.app_context.push()
    db.create_all()


def before_feature(context, feature):
    use_fixture(app_client, context)
```

Similar to the two Java files we had, this file defines the Cucumber environment that will be used to run our test files. We initialize our Flask app in `testing` mode, push the app context, and initialize the database (if applicable). The `before_feature` method is derived from [this page](https://behave.readthedocs.io/en/latest/usecase_flask.html) in the behave documentation, which shows how to integrate behave with Flask.

The next file in the `features` folder is the feature file itself, but this is the same as before. One thing to note is that behave translates `And` and `But` keywords to take the name of their preceding step—for example:

```cucumber
Given the User is logged in
And has an existing item listed for sale
```

Will be interpreted by behave as:

```cucumber
Given the User is logged in
Given has an existing item listed for sale
```

So we should only use the `@given`, `@when` and `@then` decorators in our test files. Next, we can move on to the `list_item_for_sale.py` test file:

```python
from behave import *

@given("the User is logged in")
def user_is_logged_in(context):
    assert True


@when("the User enters information about their item")
def user_enters_item_information(context):
    assert True


@then("the item is posted for sale")
def item_is_posted(context):
    assert True


@given("has an existing item listed for sale")
def user_has_item_listed_for_sale(context):
    assert True


@when("the User edits information about their item")
def user_edits_item(context):
    assert True


@then("the item posting is updated")
def item_is_updated(context):
    assert True

```

As before, I've left the actual methods unimplemented since the implementation will vary greatly depending on the app. Each method has access to a `context` variable, which contains some data about each scenario/step. Most of the time you probably won't need to use this variable, but if you think you might need to the official [behave documentation](https://behave.readthedocs.io/en/latest/tutorial.html) has lots of examples that use it.

At this point we're almost done, we just need a way to actually run the Cucumber tests. I managed (no pun intended) to do this by adding a command to the `manage.py` file:

```python
from app import create_app, db

app = create_app(os.getenv("FLASK_CONFIG") or "default")
manager = Manager(app)
migrate = Migrate(app, db)

...

@manager.command
def behave():
    """Run the behave tests."""
    os.system("behave")

...

if __name__ == "__main__":
    manager.run()
```

Then to run the tests:

```
python manage.py behave
```

And we're done!

## Conclusion

I hope you found this post helpful if you've been looking to add Cucumber to your project(s). There are of course other ways to get Cucumber set up in Spring and Flask, but this is just personally how I've done it. This is also the first time I've done a more in-depth technical tutorial, so please let me know if anything seems wrong or if you have any other feedback in general. Thanks for reading, and I'll see you next month with a new post!
