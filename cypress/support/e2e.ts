// This file is automatically loaded before your test files.
// It can be used to set up global configurations or behaviors for Cypress tests.
// You can add global configurations or behaviors here.
import "./commands";
import "cypress-mochawesome-reporter/register";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
