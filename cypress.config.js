const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: "https://coe-webstore.tdlbox.com/us/",
    env: {
      username: "labais@gmail.com",
      password: "labdien",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
