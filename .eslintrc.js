/* eslint-env node */
/** @type {import('eslint').Linter.Config */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['**/*.test.ts'],
      env: {
        jest: true
      },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended']
    }
  ]
};

module.exports = config;
