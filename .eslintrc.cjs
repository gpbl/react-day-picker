/* eslint-env node */
// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["**/*.css.d.ts", "dist", "build"],
  plugins: ["react", "@typescript-eslint", "jest"],
  extends: [
    "plugin:jest/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  settings: {
    react: {
      version: "detect" // React version. "detect" automatically picks the version you have installed.
    }
  },
  rules: {
    "react/jsx-uses-react": "off",
    "react/prop-types": "off",
    "prettier/prettier": "warn",
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "warn"
  },
  overrides: [
    {
      files: ["**/?(*.)+(spec|test).[jt]s?(x)"],
      env: {
        jest: true
      },
      extends: ["plugin:jest/recommended", "plugin:testing-library/react"],
      rules: {
        "testing-library/no-render-in-setup": "off",
        "testing-library/no-node-access": "off",
        "testing-library/render-result-naming-convention": "off",
        "testing-library/no-render-in-lifecycle": "off"
      }
    }
  ]
};

module.exports = config;
