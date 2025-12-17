![ESlint Plugin](hero.jpg)

Personal ESLint configuration with code style rules and best practices.

## Installation

Add to your project's `package.json`:

```json
{
  "devDependencies": {
    "@egjiri/eslint-plugin": "link:../eslint-plugin",
    "eslint": "^9.0.0"
  }
}
```

Then run `pnpm install`.

> **Note:** Adjust the path `../eslint-plugin` to match the relative path from your project to this plugin directory.

## Dependencies

**Required (peer dependency):**
- `eslint ^9.0.0` - Must be installed in your project

The plugin bundles these dependencies internally:
- `@eslint/js` - ESLint's recommended rules
- `@stylistic/eslint-plugin` - Code formatting rules

You don't need to install these separately.

## Usage

### Basic Usage

```javascript
import egjiri from '@egjiri/eslint-plugin';

export default egjiri.configs.recommended;
```

This includes:
- `@eslint/js` recommended rules
- `@stylistic/eslint-plugin` formatting rules (see below)

### Advanced Configuration

```javascript
import egjiri from '@egjiri/eslint-plugin';
import globals from 'globals';

export default [
  ...egjiri.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      ...egjiri.plugins,
      // Add your own plugins here
    },
    rules: {
      // Override or add rules
      'stylistic/indent': ['error', 4], // Use 4 spaces instead of 2
      'stylistic/quotes': ['error', 'double'], // Use double quotes
    },
  },
];
```

## Rules Included

This plugin's `recommended` config includes:

### From @eslint/js
All rules from `@eslint/js` recommended config

### Additional Built-in ESLint Rules
- `curly`: Require braces for all control statements

### @stylistic Rules
- `stylistic/array-bracket-spacing`: No spaces inside array brackets
- `stylistic/arrow-parens`: Parentheses around arrow function parameters only when needed
- `stylistic/brace-style`: One true brace style (1tbs)
- `stylistic/comma-dangle`: Trailing commas on multiline
- `stylistic/comma-spacing`: Space after commas, not before
- `stylistic/indent`: 2-space indentation with switch case indent
- `stylistic/key-spacing`: Space after colon
- `stylistic/keyword-spacing`: Consistent spacing around keywords
- `stylistic/member-delimiter-style`: TypeScript interface/type member delimiters
- `stylistic/no-multi-spaces`: No multiple consecutive spaces
- `stylistic/no-multiple-empty-lines`: Max one empty line
- `stylistic/object-curly-spacing`: Spaces inside object braces (with exceptions)
- `stylistic/quote-props`: Quote object properties only when needed
- `stylistic/quotes`: Single quotes, allow double to avoid escapes
- `stylistic/semi-spacing`: Space after semicolons, not before
- `stylistic/semi`: Require semicolons
- `stylistic/space-in-parens`: No spaces inside parentheses
- `stylistic/space-infix-ops`: Spaces around operators
