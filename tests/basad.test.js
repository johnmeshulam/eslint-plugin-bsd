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
  languageOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
});

ruleTester.run("basad", rule, {
  valid: [{ code: '// בס"ד' }, { code: "/* בס˝ד */" }],

  invalid: [
    {
      code: "const x = 1;",
      output: '// בס"ד\nconst x = 1;',
      errors: [{ messageId: "missingComment" }],
    },
    {
      code: "\nconst x = 1;",
      output: '\n// בס"ד\nconst x = 1;',
      errors: [{ messageId: "missingComment" }],
    },
    {
      code: "// This is a comment\nconst x = 1;",
      output: '// בס"ד\nconst x = 1;',
      errors: [{ messageId: "invalidPattern" }],
    },
    {
      code: "\n// TODO: This is too late\nconst x = 1;",
      output: '\n// בס"ד\n// TODO: This is too late\nconst x = 1;',
      errors: [{ messageId: "missingComment" }],
    },
  ],
});

console.log("All tests passed!");
