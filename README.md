# eslint-plugin-bsd

Ensures your code is Kosher and follows the Halacha

## Installation

```bash
npm install eslint-plugin-bsd --save-dev
```

## Usage

Add `basad` to the plugins section of your ESLint configuration file.

```javascript
// eslint.config.js
import basad from "eslint-plugin-bsd";

export default [
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    plugins: {
      basad,
    },
    rules: {
      "bsd/basad": "error",
    },
  },
];
```

Or use the recommended configuration:

```javascript
// eslint.config.js
import basad from "eslint-plugin-bsd";

export default [
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    ...basad.configs.recommended,
  },
];
```

## Rules

### `bsd/basad`

Ensures that the first line of the file is a comment starting with `// בס"ד`.

This rule requires files to begin with the comment `// בס"ד` (Besiyata Dishmaya - "with the help of heaven").

**This rule is fixable.** When you use the quick fix option or run ESLint with `--fix`, it will automatically add `// בס"ד` at the top of your file.

#### Examples

**Valid**:

```javascript
// בס"ד
const x = 1;
```

```javascript
// בס"ד
function test() {}
```

**Invalid**:

```javascript
const x = 1;
```

```javascript
// This is a regular comment
const x = 1;
```

When using ESLint with `--fix` or via editor quick fix, these invalid cases will automatically be fixed to include `// בס"ד` at the top.

## License

Unlicense
