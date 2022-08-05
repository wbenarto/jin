const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor') .default

module.exports = defineConfig({
  // The rest of the Cypress config options go here...
  projectId: "9chbz1",
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 10000,
  reporter: "mochawesome",
  env: {
    url: 'https://rahulshettyacademy.com/angularpractice/'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    // specPattern: 'cypress/integration/examples/BDD/*.feature'
    specPattern: 'cypress/integration/examples/'
  },
});
