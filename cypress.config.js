const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    overwrite: false,
  },
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    trashAssetsBeforeRuns: true,
    baseUrl: "https://coe-webstore.tdlbox.com/us/",
    env: {
      username: "labais@gmail.com",
      password: "",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
