// Example ESLint configuration using eslint-plugin-bsd
// This file demonstrates how to configure the basad rule

const basad = require("./index.js");

module.exports = [
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    plugins: {
      basad
    },
    rules: {
      "bsd/basad": "error"
    }
  }
];
