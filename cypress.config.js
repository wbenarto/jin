module.exports = {
  // The rest of the Cypress config options go here...
  projectId: "9chbz1",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
};
