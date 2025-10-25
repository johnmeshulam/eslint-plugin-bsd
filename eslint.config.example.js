// Example ESLint configuration using eslint-plugin-bsd
// This file demonstrates how to configure the basad rule with the flat config format
// Requires ESLint 9+

const { defineConfig } = require("eslint/config");
const bsd = require("./index.js");

module.exports = defineConfig([
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    plugins: {
      bsd
    },
    rules: {
      "bsd/basad": "error"
    }
  }
]);
