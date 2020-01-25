module.exports = [
  "@docusaurus/preset-classic",
  {
    docs: {
      sidebarPath: require.resolve("../../sidebars.js"),
      editUrl: "https://github.com/gpbl/react-day-picker/edit/master/website/",
      showLastUpdateAuthor: false,
      showLastUpdateTime: true
    },
    theme: {
      customCss: require.resolve("../../src/css/custom.css")
    }
  }
];
