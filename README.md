# eslint-plugin-basad

Ensures your code is Kosher and follows the Halacha

## Installation

```bash
npm install eslint-plugin-basad --save-dev
```

## Usage

Add `basad` to the plugins section of your ESLint configuration file. You can omit the `eslint-plugin-` prefix:

```javascript
// eslint.config.js
import basad from "eslint-plugin-basad";

export default [
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    plugins: {
      basad,
    },
    rules: {
      "basad/basad": [
        "error",
        {
          pattern: "^//\\s*@license.*$", // Your custom regex pattern
        },
      ],
    },
  },
];
```

Or use the recommended configuration:

```javascript
// eslint.config.js
import basad from "eslint-plugin-basad";

export default [
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    ...basad.configs.recommended,
  },
];
```

## Rules

### `basad/basad`

Ensures that the first line of the file is a comment matching a specified regex pattern.

#### Options

- `pattern` (string): A regular expression pattern that the first line comment must match. Default: `"^//\\s*TODO:.*$"`

#### Examples

**Valid** (with pattern `"^//\\s*@license.*$"`):

```javascript
// @license MIT
const x = 1;
```

```javascript
/* @license Apache-2.0 */
function test() {}
```

**Invalid**:

```javascript
// Missing comment on first line
const x = 1;
```

```javascript
// Comment doesn't match pattern
const x = 1;
```

## Configuration

The rule accepts a configuration object with the following properties:

- `pattern`: A string representing a regular expression pattern

Example configurations:

```javascript
// Require a license header
"basad/basad": ["error", { pattern: "^//\\s*@license.*$" }]

// Require a copyright notice
"basad/basad": ["error", { pattern: "^//\\s*Copyright.*$" }]

// Require a file description
"basad/basad": ["error", { pattern: "^//\\s*@fileoverview.*$" }]

// Require a specific comment format
"basad/basad": ["error", { pattern: "^//\\s*BASAD:.*$" }]
```

## License

Unlicense
