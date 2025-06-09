# My Cypress Project

This is a sample Cypress project to demonstrate the setup and usage of Cypress for end-to-end testing.

## Project Structure

```
my-cypress-project
├── cypress
│   ├── fixtures
│   │   └── example.json
│   ├── integration
│   │   └── sample.spec.ts
│   ├── plugins
│   │   └── index.ts
│   └── support
│       ├── commands.ts
│       └── index.ts
├── cypress.json
├── package.json
└── README.md
```

## Setup Instructions

1. **Clone the repository:**

   ```
   git clone <repository-url>
   cd my-cypress-project
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Open Cypress:**
   ```
   npx cypress open
   ```

## Usage

- Place your test files in the `cypress/integration` directory.
- Use the `cypress/fixtures` directory to store any mock data needed for your tests.
- Customize Cypress behavior using the `cypress/plugins/index.ts` file.
- Define reusable commands in `cypress/support/commands.ts`.

# Test Plan

1. Introduction

   This document outlines the testing plan for the Ultimate QA automation website (https://ultimateqa.com/automation). The website provides practice areas for automation testing, including sample forms, applications, and interactive elements. The goal is to validate the functionality, usability, and reliability of the website using a risk-based testing approach, ensuring a seamless experience for users practicing automation testing.

2. Objectives

   - Validate the functionality of key features like forms, buttons, and navigation.
   - Ensure the website performs reliably under typical usage.
   - Identify and mitigate high-risk areas that could impact user experience.
   - Complete testing within the defined timeline using available resources.

3. Scope

- In-Scope
  - Functional testing of forms (e.g., "Simple HTML Form Example", "Fake Landing Page").
  - Navigation and link functionality across pages.
  - UI responsiveness on desktop browsers (Chrome, Firefox, Safari, Edge).
  - Automation testing using Cypress for regression and functional tests.
- Out-of-Scope
  - Performance testing
  - Mobile responsiveness
  - Performance testing
  - Security testing

4. Risk-Based Testing (RBT) Section

- Form Submission Failures: Forms are central to the website’s purpose. Errors in form submission could prevent users from practicing automation, leading to a poor user experience.
- Broken Navigation Links: Links to sample applications or pages might fail, disrupting user navigation.
- UI Misalignment: UI elements might render incorrectly on different browsers, affecting usability.

5. Risk Mitigation Strategies

- Form Submission Failures: Prioritize functional and regression testing on forms. Automate form submission tests using Cypress to catch errors early.
- Broken Navigation Links: Perform link validation tests across all pages. Use Cypress to automate link checks.
- UI Misalignment: Conduct cross-browser testing on Chrome and Firefox. Manually inspect UI elements for alignment issues.

6. Testing Strategy

- Approach

  - Manual Testing: Exploratory testing to identify usability issues and edge cases (e.g., invalid form inputs).
  - Automated Testing: Use Cypress for functional, regression, and navigation testing to ensure consistency and efficiency, integrated into the CI/CD pipeline.
  - Risk-Based Prioritization: Focus on high-risk areas (e.g., forms) first, followed by medium and low-risk areas.

- Types of Testing

  - Functional Testing: Validate that forms, buttons, and links work as expected.
  - Regression Testing: Ensure new changes (if any) don’t break existing functionality.
  - Cross-Browser Testing: Test on Chrome, Firefox, Safari and Edge to ensure compatibility.
  - Exploratory Testing: Manually explore the website to uncover unexpected issues.

- Tools

  - Cypress: For automated functional, regression, and navigation tests.
  - BrowserStack: For cross-browser testing (Chrome, Firefox).
  - Jira: For test case management and reporting.

7. Testing Scenarios

- Form Submission
  - Happy test case
    - Fill in all fields with valid data (e.g., name, email, message).
  - Negative test case
    - Leave all required fields empty.
    - Fill in email fields with invalid data invalid email format(e.g, john..doe@gmail.com, john@doe@gmail.com).
    - Fill in existed email.
    - Fill in name fields with special chars(e.g, empty, space, number, special chars).
    - Verify min/maximum charater of each fields.
- Link Navigation
  - Redirects to the correct page without errors.
  - Verify the UI of page not found.

8. Resources

- 2 QAs: Manual and automation for features
- QA Manager: Oversees the testing process, manages test activities, and reports progress.

9. Timelines

- Total Duration: 1 sprint(10 days) (June 5, 2025 – June 23, 2025).
  - Phase 1: Planning and Setup
  - Phase 2: Test Development
  - Phase 3: Test Execution
  - Phase 4: Reporting and Closure

10. Entry and Exit Criteria

- Entry Criteria
  - Test setup and config in CI/CD(Cypress).
  - Test cases prepared and reviewed in TestRail.
  - Features are ready for testing.
- Exit Criteria
  - 100% of high-risk test scenarios pass.
  - 90% of medium/low-risk test scenarios pass.
  - No critical defects remain unresolved.
  - Final test report submitted and approved.
