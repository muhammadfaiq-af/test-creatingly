const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dev-run-tests-575d44c88c.platform.creatingly.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
