/** @type {import("lighthouse").Config} */
const config = {
  extends: "lighthouse:default",
  settings: {
    onlyCategories: ["performance", "accessibility", "best-practices"]
  }
};

export default config;
