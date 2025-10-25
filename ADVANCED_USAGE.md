# Advanced Usage Examples

## Different Pattern Configurations

### 1. License Header Pattern

```javascript
// eslint.config.js
export default [
  {
    files: ["**/*.js", "**/*.ts"],
    plugins: { basad },
    rules: {
      "basad/basad": [
        "error",
        {
          pattern: "^//\\s*@license\\s+(MIT|Apache-2\\.0|GPL-3\\.0).*$",
        },
      ],
    },
  },
];
```

Valid file:

```javascript
// @license MIT
const code = "here";
```

### 2. Copyright Notice Pattern

```javascript
rules: {
  "basad/basad": ["error", {
    pattern: "^//\\s*Copyright\\s+\\(c\\)\\s+\\d{4}.*$"
  }]
}
```

Valid file:

```javascript
// Copyright (c) 2025 My Company
const code = "here";
```

### 3. File Description Pattern

```javascript
rules: {
  "basad/basad": ["error", {
    pattern: "^//\\s*@fileoverview\\s+.{10,}$"
  }]
}
```

Valid file:

```javascript
// @fileoverview This module handles user authentication
const code = "here";
```

### 4. Custom Prefix Pattern (BASAD)

```javascript
rules: {
  "basad/basad": ["error", {
    pattern: "^//\\s*BASAD:\\s*.+$"
  }]
}
```

Valid file:

```javascript
// BASAD: This code follows the rules
const code = "here";
```

### 5. JSDoc-style Pattern

```javascript
rules: {
  "basad/basad": ["error", {
    pattern: "^/\\*\\*\\s*$"
  }]
}
```

Valid file:

```javascript
/**
 * Module description
 */
const code = "here";
```

## Using with TypeScript

The rule works automatically with TypeScript files (.ts, .tsx) when you include them in the files pattern:

```javascript
export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { basad },
    rules: {
      "basad/basad": "error",
    },
  },
];
```

## Different Rules for Different File Types

```javascript
export default [
  {
    // Stricter pattern for source files
    files: ["src/**/*.{js,ts}"],
    plugins: { basad },
    rules: {
      "basad/basad": [
        "error",
        {
          pattern: "^//\\s*@fileoverview\\s+.+$",
        },
      ],
    },
  },
  {
    // Different pattern for test files
    files: ["tests/**/*.{js,ts}"],
    plugins: { basad },
    rules: {
      "basad/basad": [
        "error",
        {
          pattern: "^//\\s*@test\\s+.+$",
        },
      ],
    },
  },
];
```

## Ignoring Certain Files

```javascript
export default [
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    ignores: ["node_modules/**", "dist/**", "build/**"],
    plugins: { basad },
    rules: {
      "basad/basad": "error",
    },
  },
];
```

## Using as a Warning Instead of Error

```javascript
rules: {
  "basad/basad": ["warn", {
    pattern: "^//\\s*TODO:.*$"
  }]
}
```

## Combining with Other Rules

```javascript
export default [
  {
    files: ["**/*.js"],
    plugins: { basad },
    rules: {
      "basad/basad": [
        "error",
        {
          pattern: "^//\\s*@license.*$",
        },
      ],
      // Other ESLint rules
      "no-console": "warn",
      semi: ["error", "always"],
    },
  },
];
```
