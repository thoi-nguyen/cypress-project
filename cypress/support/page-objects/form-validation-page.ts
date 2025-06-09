import { BasePage } from "./base-page";

export class FormValidationPage extends BasePage {
  // Selectors
  private formNavigation = "#menu-item-217945 a";
  private nameInput = "#cu-form-control-0";
  private emailInput = "#cu-form-control-1";
  private role = "#cu-form-control-2";
  private companyName = "#cu-form-control-3";
  private evaluateSelection = "[data-test='select__dropdown__toggle']";
  private dropdownElevation = "[data-test='select-option']";
  private message = "#cu-form-control-5";
  private submitButton = "[data-test='form__submit-btn']";
  private successMessage = "div .ql-editor";
  private errorMessage = ".error-message";

  clickNavigationLink() {
    cy.get(this.formNavigation).should("be.visible").click();
  }

  // Method to handle cross-origin form filling
  fillFormInCrossOrigin(formData: {
    name: string;
    email: string;
    role: string;
    companyName: string;
    message: string;
  }) {
    // Pass the form data and selectors to cy.origin
    cy.origin(
      "https://forms.clickup.com",
      { args: { formData, selectors: this.getFormSelectors() } },
      ({ formData, selectors }) => {
        // Wait for the form to be fully loaded
        cy.get("body").should("exist");

        // Fill the form using the passed selectors
        cy.get(selectors.nameInput).should("be.visible").type(formData.name);
        cy.get(selectors.emailInput).should("be.visible").type(formData.email);
        cy.get(selectors.role).should("be.visible").type(formData.role);
        cy.get(selectors.companyName)
          .should("be.visible")
          .type(formData.companyName);
        cy.get(selectors.evaluateSelection).should("be.visible").click();

        // Handle dropdown selection
        cy.get(selectors.dropdownElevation)
          .children()
          .its("length")
          .then((lengthElevationOptions) => {
            const randomIndex = Math.floor(
              Math.random() * lengthElevationOptions
            );
            cy.get(selectors.dropdownElevation)
              .children()
              .eq(randomIndex)
              .click();
          });

        cy.get(selectors.message).should("be.visible").type(formData.message);
      }
    );
  }

  // Method to get form selectors for cross-origin operations
  private getFormSelectors() {
    return {
      nameInput: this.nameInput,
      emailInput: this.emailInput,
      role: this.role,
      companyName: this.companyName,
      evaluateSelection: this.evaluateSelection,
      dropdownElevation: this.dropdownElevation,
      message: this.message,
      submitButton: this.submitButton,
    };
  }

  verifyFormSubmissionSuccess() {
    cy.origin("https://forms.clickup.com", () => {
      cy.get("[data-test='form__submit-btn']").should("be.visible").click();
      cy.get("div .ql-editor").should(
        "contain.text",
        "We're excited to meet and speak with you, talk soon!"
      );
    });
  }

  verifyFormSubmissionError() {
    cy.origin("https://forms.clickup.com", () => {
      cy.get("[data-test='form__submit-btn']").should("be.visible").click();
      cy.get(".error-message").should("be.visible");
    });
  }
}

export default new FormValidationPage();
