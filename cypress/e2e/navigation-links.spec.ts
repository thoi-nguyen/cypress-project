import { NavigationLinksPage } from "../support/page-objects/navigation-links-page";
describe("Navigation Links", () => {
  let navigationLinksPage = new NavigationLinksPage();

  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to the complicated page", () => {
    navigationLinksPage.navigateToComplicatedPage();
    navigationLinksPage.verifyComplicatedPage();
  });

  it("should navigate to the fake landing page", () => {
    navigationLinksPage.navigateToFakeLandingPage();
    navigationLinksPage.verifyFakeLandingPage();
  });

  it("should navigate to the fake pricing page", () => {
    navigationLinksPage.navigateToFakePricingPage();
    navigationLinksPage.verifyFakePricingPage();
  });

  it("should navigate to the fill out form page", () => {
    navigationLinksPage.navigateToFillOutFormPage();
    navigationLinksPage.verifyFillOutFormPage();
  });
});
