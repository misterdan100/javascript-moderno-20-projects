const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5500/52-Testing-Cypress/',

  },
  viewportWidth: 1000,
  viewportHeight: 1200,

});
