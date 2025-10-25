/**
 * @fileoverview Tests for basad rule
 * @author Your Name
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const { RuleTester } = require("eslint");
const rule = require("../rules/basad");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  }
});

ruleTester.run("basad", rule, {
  valid: [
    {
      code: "// TODO: This is a valid comment\nconst x = 1;",
      options: [{ pattern: "^//\\s*TODO:.*$" }]
    },
    {
      code: "/* TODO: Block comment */\nconst x = 1;",
      options: [{ pattern: "^/\\*\\s*TODO:.*\\*/$" }]
    },
    {
      code: "// @license MIT\nfunction test() {}",
      options: [{ pattern: "^//\\s*@license.*$" }]
    }
  ],

  invalid: [
    {
      code: "const x = 1;",
      options: [{ pattern: "^//\\s*TODO:.*$" }],
      errors: [{
        messageId: "missingComment"
      }]
    },
    {
      code: "\nconst x = 1;",
      options: [{ pattern: "^//\\s*TODO:.*$" }],
      errors: [{
        messageId: "missingComment"
      }]
    },
    {
      code: "// This is a comment\nconst x = 1;",
      options: [{ pattern: "^//\\s*TODO:.*$" }],
      errors: [{
        messageId: "invalidPattern"
      }]
    },
    {
      code: "\n// TODO: This is too late\nconst x = 1;",
      options: [{ pattern: "^//\\s*TODO:.*$" }],
      errors: [{
        messageId: "missingComment"
      }]
    }
  ]
});

console.log("All tests passed!");
