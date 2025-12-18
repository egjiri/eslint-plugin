import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import pkg from './package.json' with { type: 'json' };

/** @type {{ stylistic: typeof stylistic, import: typeof importPlugin }} */
const plugins = { stylistic, import: importPlugin };

/** @type {import('eslint').Linter.RulesRecord} */
const rules = {
  // Built-in ESLint Rules (No Stylistic Equivalents)
  'curly': ['error', 'all'], // Require braces for all control statements (Ex. if, else, for, while)

  // Import Plugin Rules
  'import/no-duplicates': ['error'], // Merge imports from the same module
  'import/order': ['error', { // Enforce consistent import ordering
    // order options: https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/order.md#options
    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
    pathGroupsExcludedImportTypes: [],
    'newlines-between': 'never',
    alphabetize: { order: 'asc', caseInsensitive: true },
    named: true,
    warnOnUnassignedImports: true,
    sortTypesGroup: true,
  }],

  // Stylistic Plugin Rules
  'stylistic/array-bracket-spacing': ['error', 'never'], // No spaces inside array brackets
  'stylistic/arrow-parens': ['error', 'as-needed'], // Parentheses around arrow function parameters only when needed
  'stylistic/brace-style': ['error', '1tbs'], // Prevent one liner brace style for if, else, etc.
  'stylistic/comma-dangle': ['error', 'always-multiline'], // Trailing commas on multiline
  'stylistic/comma-spacing': ['error', { before: false, after: true }], // Space after commas, not before
  'stylistic/indent': ['error', 2, { SwitchCase: 1 }], // 2 space indentation with switch case indent
  'stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }], // No space before colon, space after
  'stylistic/keyword-spacing': ['error'], // Consistent spacing around keywords
  'stylistic/member-delimiter-style': ['error'], // TypeScript interface/type member delimiters
  'stylistic/no-multi-spaces': ['error'], // No multiple consecutive spaces
  'stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }], // Max one empty line
  'stylistic/object-curly-spacing': ['error', 'always', { objectsInObjects: false, arraysInObjects: true }], // Spaces inside object braces
  'stylistic/quote-props': ['error', 'as-needed'], // Quote object properties only when needed
  'stylistic/quotes': ['error', 'single', { avoidEscape: true }], // Single quotes, allow double to avoid escapes
  'stylistic/semi-spacing': ['error', { before: false, after: true }], // Space after semicolons, not before
  'stylistic/semi': ['error'], // Require semicolons
  'stylistic/space-in-parens': ['error', 'never'], // No spaces inside parentheses
  'stylistic/space-infix-ops': ['error', { int32Hint: true }], // Spaces around operators
};

export default {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },
  plugins,
  rules,
  configs: {
    recommended: [
      js.configs.recommended,
      { plugins, rules },
    ],
  },
};
