/* eslint-env node */
/** @type {import('eslint').Linter.Config */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'plugin:jest/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  },
  rules: {
    'import/no-unresolved': 'off',
    'prettier/prettier': 'warn',
    'no-console': 'warn'
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      env: {
        jest: true
      },
      extends: ['plugin:jest/recommended', 'plugin:testing-library/react'],
      rules: {
        'testing-library/no-render-in-setup': 'off',
        'testing-library/no-node-access': 'off'
      }
    }
  ]
};

module.exports = config;
