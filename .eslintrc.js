module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021, // Updated to the latest ECMAScript version
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    // Removed unnecessary options
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:prettier/recommended'],
      // extends: ['plugin:@typescript-eslint/recommended'],
    },
  ],
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended',
    // "plugin:@typescript-eslint/recommended",
    'prettier', // Prettier is now included in react-app, no need to include it separately
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/camelcase': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        arrowParens: 'always',
        requirePragma: false,
        insertPragma: false,
        proseWrap: 'never',
      },
    ],
  },
  plugins: ['jsx-a11y', 'react-hooks'],
  // plugins: ["jsx-a11y", "@typescript-eslint", "react-hooks"],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
