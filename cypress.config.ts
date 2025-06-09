import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  fixturesFolder: "cypress/fixtures",
  e2e: {
    experimentalOriginDependencies: true,
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.ts")(on, config);
    },
    specPattern: "**/*spec.{js,jsx,ts,tsx}",
    baseUrl: "https://ultimateqa.com/automation",
  },
});
