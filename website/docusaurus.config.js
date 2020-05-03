const path = require("path");
const themeConfig = require("./config/themeConfig");
const classic = require("./config/presets/classic");

module.exports = {
  title: "React DayPicker",
  tagline: "Date picker component for React",
  url: "https://react-day-picker.js.org",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "gpbl",
  projectName: "react-day-picker",
  themeConfig,
  presets: [classic],
};
