const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://outfit-store-alpha.vercel.app",
  },
  fixturesFolder: false,
});
