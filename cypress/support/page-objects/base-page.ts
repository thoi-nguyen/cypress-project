/// <reference types="cypress" />

export class BasePage {
  navigateTo(url: string): void {
    cy.visit(url);
    cy.url().should("include", url);
  }

  getElement(selector: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(selector);
  }

  clickElement(selector: string): void {
    this.getElement(selector).click();
  }

  assertElementContainsText(selector: string, expectedText: string): void {
    this.getElement(selector).should("contain.text", expectedText);
  }
}
