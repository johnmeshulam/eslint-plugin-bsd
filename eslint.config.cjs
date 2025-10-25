const { defineConfig } = require("eslint/config");
const bsd = require("./index.js");

module.exports = defineConfig([
  {
    files: ["**/*.js"],
    plugins: {
      bsd
    },
    rules: {
      "bsd/basad": "error"
    }
  }
]);
