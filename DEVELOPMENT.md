# ESLint Plugin Basad - Development Notes

## Project Structure

```
eslint-plugin-basad/
├── index.js                    # Main plugin file
├── rules/
│   └── basad.js               # The basad rule implementation
├── tests/
│   └── basad.test.js          # Tests for the basad rule
├── eslint.config.example.js   # Example configuration
├── package.json
├── README.md
└── LICENSE
```

## How the Plugin Works

### Plugin Architecture

The plugin follows ESLint's standard plugin structure:

1. **Main Plugin File (`index.js`)**: Exports the plugin object with metadata and rules
2. **Rules Directory (`rules/`)**: Contains individual rule implementations
3. **Tests Directory (`tests/`)**: Contains tests using ESLint's RuleTester

### The Basad Rule

The `basad` rule checks that:

1. The file starts with a comment on line 1
2. The comment matches a specified regex pattern

#### Rule Implementation Details

- **Type**: `problem` - This is a code correctness issue
- **Schema**: Accepts an options object with a `pattern` property
- **Messages**:
  - `missingComment`: No comment found on the first line
  - `invalidPattern`: Comment doesn't match the required pattern

#### Default Pattern

The default pattern is: `^//\\s*TODO:.*$`
This matches single-line comments starting with "TODO:"

## Testing

Run the tests with:

```bash
npm test
```

The tests use ESLint's RuleTester utility to verify both valid and invalid cases.

## Installation for Development

```bash
npm install
```

## Using the Plugin Locally

To test the plugin in another project without publishing:

1. In this plugin directory:

   ```bash
   npm link
   ```

2. In your target project:

   ```bash
   npm link eslint-plugin-basad
   ```

3. Configure ESLint in your target project to use the plugin

## Publishing

Before publishing to npm:

1. Update the version in `package.json`
2. Run tests: `npm test`
3. Publish: `npm publish`

## Customization

### Changing the Default Pattern

Edit `rules/basad.js` and change the default pattern:

```javascript
const patternString = options.pattern || "YOUR_PATTERN_HERE";
```

### Common Pattern Examples

- License headers: `^//\\s*@license.*$`
- Copyright: `^//\\s*Copyright.*$`
- File descriptions: `^//\\s*@fileoverview.*$`
- Custom prefix: `^//\\s*BASAD:.*$`

### Supporting Both Line and Block Comments

The rule already supports both:

- Single-line comments: `// comment`
- Block comments: `/* comment */`

Make sure your regex pattern accounts for the comment style you want to enforce.
