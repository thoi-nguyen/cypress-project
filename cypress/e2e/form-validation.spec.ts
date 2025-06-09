import { FormValidationPage } from "../support/page-objects/form-validation-page";
import { DataGenerator } from "../support/utils/data-generator";

describe("Form Validation Tests", () => {
  let formValidationPage = new FormValidationPage();

  beforeEach(() => {
    formValidationPage.navigateTo("/");
  });

  it("should navigate to a form link and fill the form successfully with valid data", () => {
    formValidationPage.clickNavigationLink();

    // Generate random data
    const formData = {
      name: `${DataGenerator.generateFirstName()} ${DataGenerator.generateLastName()}`,
      email: DataGenerator.generateEmail(),
      role: DataGenerator.generateRole(),
      companyName: DataGenerator.generateCompanyName(),
      message: DataGenerator.generateMessage(),
    };

    // Use the page object method to fill the form
    formValidationPage.fillFormInCrossOrigin(formData);
    formValidationPage.verifyFormSubmissionSuccess();
  });

  it.skip("should display an error message when the form is submitted with invalid data", () => {
    formValidationPage.clickNavigationLink();

    // Generate invalid form data
    const invalidFormData = {
      name: "", // Empty name
      email: "invalid-email", // Invalid email format
      role: "", // Empty role
      companyName: "", // Empty company name
      message: "", // Empty message
    };

    // Use the page object method to fill the form with invalid data
    formValidationPage.fillFormInCrossOrigin(invalidFormData);
    formValidationPage.verifyFormSubmissionError();
  });
});
