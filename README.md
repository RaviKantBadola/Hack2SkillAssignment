<div align="center"><img src="https://hack2skill.com/brandguidelines/assets/images/H2S_Gradient_Logo.svg" /></div>

# Heroku Automation

Introduction
🌟 <h4 id="description">Heroku is a cloud platform that allows developers to deploy, manage, and scale applications easily. It supports several programming languages such as Ruby, Node.js, Python, Java, and more.
With Heroku, you can focus on developing your application without worrying about infrastructure setup and maintenance.</h4>
 
<h2>Headings Of Test Scenarios</h2>
<h4># TSc 01: - Access http://the-internet.herokuapp.com/broken_images, validate if there are broken images.</h4>
 
<h4># TSc 02: - Access http://the-internet.herokuapp.com/upload and try uploading any file.</h4>

Installation
To set up the project locally, follow these steps:

Clone the repository:

```bash
git clone https://github.com/RaviKantBadola/Hack2SkillAssignment.git
```

Install the dependencies:
```bash
npm install
```

Set up the configuration:

Provide any necessary environment variables or configuration settings.
Update the cypress.json file with the appropriate configuration values.
Usage
To run the Cypress tests, use the following commands:

Open the Cypress Test Runner:

```bash
npx cypress open
```

🚀 This will open the Cypress Test Runner, allowing you to select and run the tests interactively.

Run the Cypress tests in headless mode:

```bash
npx cypress run
```
🏃‍♀️ This will run the Cypress tests in the command line without the Test Runner interface.

Tests
The tests included in this project follow the Page Object Model (POM) design pattern. The test files are organized as follows:

cypress/Heroku/*.js Description of the test file.

The POM approach separates the web elements and their interactions into separate page object files. This allows for better maintainability, reusability, and readability of the tests.

You check the allure report for checking all test cases that I deployed on Netlify


```bash
https://hack2skillassignmentallurereport.netlify.app/
```

## Thank you for visiting 😇


