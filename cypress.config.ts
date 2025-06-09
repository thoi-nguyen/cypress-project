import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  fixturesFolder: "cypress/fixtures",
  e2e: {
    experimentalOriginDependencies: true,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return require("./cypress/plugins/index.ts")(on, config);
    },
    specPattern: "**/*spec.{js,jsx,ts,tsx}",
    baseUrl: "https://ultimateqa.com/automation",
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});
