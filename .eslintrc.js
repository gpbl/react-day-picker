// @ts-check
/* eslint-env node */
/** @type {import('eslint').Linter.Config} */
module.exports = {
  ignorePatterns: ["node_modules/", "dist/", "coverage/"],
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
    {
      files: ["*.test.*"],
      plugins: ["jest", "testing-library"],
      extends: ["plugin:jest/recommended", "plugin:testing-library/react"],
      rules: {
        "testing-library/render-result-naming-convention": "off",
        "testing-library/no-render-in-setup": "off",
        "testing-library/no-node-access": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    "react/react-in-jsx-scope": "off",
  },
};
