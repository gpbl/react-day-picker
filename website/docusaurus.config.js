const path = require("path");
const themeConfig = require("./config/themeConfig");
const classic = require("./config/presets/classic");

module.exports = {
  title: "react-day-picker",
  tagline: "The tagline of my site",
  url: "https://react-day-picker.js.org",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "gpbl",
  projectName: "react-day-picker",
  themeConfig,
  plugins: [path.resolve(__dirname, "./src/plugins/react-dev.js")],
  presets: [classic],
};
