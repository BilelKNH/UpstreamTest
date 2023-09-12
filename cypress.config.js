const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
     // Ceci permet de definir par défaut lors d'un cy.visit et cy.request l'url de base à utiliser
    baseUrl: 'https://testqa.purse.tech/fake-contact'
  },
});