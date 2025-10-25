/**
 * @fileoverview ESLint plugin to ensure your code follows the Halacha
 * @author John Meshulam
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// Read package.json for name and version
const pkg = require("./package.json");

const plugin = {
  meta: {
    name: pkg.name,
    version: pkg.version,
    namespace: "bsd"
  },
  
  rules: requireIndex(__dirname + "/rules"),
  
  configs: {
    recommended: {
      rules: {
        "bsd/basad": "error"
      }
    }
  }
};

module.exports = plugin;
