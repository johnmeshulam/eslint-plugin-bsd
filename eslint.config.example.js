// Example ESLint configuration using eslint-plugin-basad
// This file demonstrates how to configure the basad rule

const basad = require("./index.js");

module.exports = [
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    plugins: {
      basad
    },
    rules: {
      // Configure the basad rule with a custom pattern
      // This example requires files to start with a comment containing "@license"
      "basad/basad": ["error", { 
        pattern: "^//\\s*@license.*$" 
      }]
    }
  }
];
