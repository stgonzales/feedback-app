import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://127.0.0.1:3000",
    viewportWidth: 1536,
    viewportHeight: 1280,
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
