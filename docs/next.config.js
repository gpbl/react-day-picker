/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra();
