# ESLint Plugin Basad - Quick Reference

## 📦 What You Have

A complete ESLint plugin with one rule: **basad**

The rule ensures that JavaScript, TypeScript, JSX, and TSX files start with a comment on the first line that matches a specific regex pattern.

## 🎯 Default Behavior

- **Default Pattern**: `^//\s*TODO:.*$` (matches comments starting with "TODO:")
- **Supported Files**: .js, .ts, .jsx, .tsx
- **Error Messages**:
  - Missing comment on first line
  - Comment doesn't match the required pattern

## 🚀 Quick Start

1. **Install dependencies** (already done):

   ```bash
   npm install
   ```

2. **Run tests**:

   ```bash
   npm test
   ```

3. **Use in a project**:

   ```javascript
   // eslint.config.js
   const basad = require("eslint-plugin-basad");

   module.exports = [
     {
       files: ["**/*.{js,ts,jsx,tsx}"],
       plugins: { basad },
       rules: {
         "basad/basad": [
           "error",
           {
             pattern: "^//\\s*YOUR_PATTERN_HERE$",
           },
         ],
       },
     },
   ];
   ```

## 📁 Project Structure

```
eslint-plugin-basad/
├── index.js                    # Plugin entry point
├── rules/
│   └── basad.js               # The basad rule implementation
├── tests/
│   └── basad.test.js          # Rule tests (using RuleTester)
├── examples/                   # Example files showing valid/invalid cases
├── package.json               # Package configuration
├── README.md                  # Main documentation
├── DEVELOPMENT.md             # Developer guide
├── ADVANCED_USAGE.md          # Advanced configuration examples
└── eslint.config.example.js   # Example ESLint config
```

## 🔧 Customizing the Pattern

Change the `pattern` option when configuring the rule:

```javascript
"basad/basad": ["error", { pattern: "YOUR_REGEX_HERE" }]
```

### Common Patterns

| Use Case          | Pattern                  |
| ----------------- | ------------------------ |
| TODO comments     | `^//\s*TODO:.*$`         |
| License headers   | `^//\s*@license.*$`      |
| Copyright notices | `^//\s*Copyright.*$`     |
| File descriptions | `^//\s*@fileoverview.*$` |
| Custom prefix     | `^//\s*BASAD:.*$`        |

## ✅ Valid Examples

With pattern `^//\s*TODO:.*$`:

```javascript
// TODO: Implement feature X
const code = "here";
```

```javascript
/* TODO: Refactor this */
const code = "here";
```

## ❌ Invalid Examples

```javascript
// Missing comment on first line
const code = "here";
```

```javascript
// Wrong pattern
const code = "here";
```

```javascript
// Comment not on first line
const code = "here";
```

## 🧪 Testing

Tests are in `tests/basad.test.js` using ESLint's RuleTester:

- **Valid cases**: Files that pass the rule
- **Invalid cases**: Files that should trigger errors

Run with: `npm test`

## 📤 Publishing (Future)

When ready to publish to npm:

1. Update version in `package.json`
2. Run `npm test`
3. Run `npm publish`

Users can then install with:

```bash
npm install eslint-plugin-basad --save-dev
```

## 🔗 Useful Commands

```bash
# Install dependencies
npm install

# Run tests
npm test

# Link plugin locally for testing in other projects
npm link

# In another project
npm link eslint-plugin-basad
```

## 📚 More Information

- **README.md**: User documentation and basic usage
- **DEVELOPMENT.md**: Development guide and architecture
- **ADVANCED_USAGE.md**: Advanced configuration examples
- **examples/**: Sample files showing valid and invalid code

## 🎨 Next Steps

1. **Customize the default pattern** in `rules/basad.js` if needed
2. **Add more test cases** in `tests/basad.test.js`
3. **Try the plugin** in a real project using `npm link`
4. **Update documentation** with your specific use case
5. **Consider adding** additional rules if needed

## 💡 Tips

- The rule checks BOTH single-line (`//`) and block (`/* */`) comments
- The comment must start on line 1 (no blank lines before it)
- You can use different patterns for different file types using multiple config blocks
- Use `"warn"` instead of `"error"` for non-critical violations

---

**Happy Linting! 🎉**
