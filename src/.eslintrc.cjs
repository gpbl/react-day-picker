/* eslint-env node */
// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: ["require-extensions"],
  extends: ["../.eslintrc.cjs", "plugin:require-extensions/recommended"],
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
        "testing-library/no-render-in-lifecycle": "off",
        "require-extensions/require-index": "off",
        "require-extensions/require-extensions": "off"
      }
    }
  ]
};

module.exports = config;
