import { BasePage } from "./base-page";

export class NavigationLinksPage extends BasePage {
  private complicatedPageLink = "a[href='../complicated-page']";
  private fakeLandingPageLink = "a[href='../fake-landing-page']";
  private fakePricingPageLink = "a[href='../fake-pricing-page']";
  private fillOuFormPageLink = "Fill out forms";

  private complicatedPageTitle = "#Skills_Improved";
  private fakeLandingPageTitle = "h1:first-of-type";
  private fakePricingPageTitle = "h1:first-of-type";
  private fillOuFormPage = "#et_pb_contact_message_0";

  navigateToComplicatedPage() {
    cy.get(this.complicatedPageLink).should("be.visible").click();
  }

  navigateToFakeLandingPage() {
    cy.get(this.fakeLandingPageLink).should("be.visible").click();
  }

  navigateToFakePricingPage() {
    cy.get(this.fakePricingPageLink).should("be.visible").click();
  }

  navigateToFillOutFormPage() {
    cy.contains("a", this.fillOuFormPageLink).click();
  }

  verifyComplicatedPage() {
    this.assertElementContainsText(
      this.complicatedPageTitle,
      "Skills Improved"
    );
  }

  verifyFakeLandingPage() {
    this.assertElementContainsText(
      this.fakeLandingPageTitle,
      "Learn to Code Websites, Apps & Games"
    );
  }

  verifyFakePricingPage() {
    this.assertElementContainsText(
      this.fakePricingPageTitle,
      "Pick a Plan that Works for Your Business Model"
    );
  }

  verifyFillOutFormPage() {
    cy.get(this.fillOuFormPage).should("be.visible");
  }
}
