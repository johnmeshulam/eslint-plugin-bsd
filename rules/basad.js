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
    type: "problem",
    docs: {
      description: "Ensures the code file is Kosher",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: "code", // Or `code` or `whitespace`
    messages: {
      missingComment:
        "Your code is not Kosher! Please add בס˝ד at the top of your file.",
      invalidPattern:
        "Your code is not Kosher! Please add בס˝ד at the top of your file.",
    },
  },

  create(context) {
    const patternString =
      /(\s*\/\/.*בס["""＂″˝ˮ]ד.*|\s*\/\*.*בס["""＂″˝ˮ]ד.*\*\/)/g;
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
            messageId: "missingComment",
            fix(fixer) {
              return fixer.insertTextBeforeRange([0, 0], '// בס"ד\n');
            },
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
            messageId: "missingComment",
            fix(fixer) {
              return fixer.insertTextBeforeRange([0, 0], '// בס"ד\n');
            },
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
            fix(fixer) {
              return fixer.insertTextBeforeRange([0, 0], '// בס"ד\n');
            },
          });
        }
      },
    };
  },
};
