/**
 * @fileoverview Ensures the first line of the file is a comment matching a certain regex
 * @author Your Name
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Ensures the first line of the file is a comment matching a certain regex",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [
      {
        type: "object",
        properties: {
          pattern: {
            type: "string",
            description: "Regular expression pattern that the first line comment must match"
          }
        },
        additionalProperties: false
      }
    ], // Add a schema if the rule has options
    messages: {
      missingComment: "File must start with a comment on the first line",
      invalidPattern: "First line comment must match the required pattern: {{pattern}}"
    }
  },

  create(context) {
    // Get the regex pattern from options (default to a placeholder)
    const options = context.options[0] || {};
    const patternString = options.pattern || "^//\\s*TODO:.*$"; // Placeholder pattern
    const pattern = new RegExp(patternString);

    const sourceCode = context.sourceCode || context.getSourceCode();

    return {
      Program(node) {
        // Get all comments in the file
        const comments = sourceCode.getAllComments();
        
        // Check if there are any comments
        if (comments.length === 0) {
          context.report({
            node,
            loc: { line: 1, column: 0 },
            messageId: "missingComment"
          });
          return;
        }

        // Get the first comment
        const firstComment = comments[0];

        // Check if the first comment starts on line 1
        if (firstComment.loc.start.line !== 1) {
          context.report({
            node,
            loc: { line: 1, column: 0 },
            messageId: "missingComment"
          });
          return;
        }

        // Get the comment text (remove the comment markers)
        let commentText;
        if (firstComment.type === "Line") {
          // For single-line comments, the value already has the '//' removed
          commentText = "//" + firstComment.value;
        } else if (firstComment.type === "Block") {
          // For block comments, the value already has '/*' and '*/' removed
          commentText = "/*" + firstComment.value + "*/";
        }

        // Test against the pattern
        if (!pattern.test(commentText)) {
          context.report({
            node: firstComment,
            loc: firstComment.loc,
            messageId: "invalidPattern",
            data: {
              pattern: patternString
            }
          });
        }
      }
    };
  }
};
