const typedocConfig = require('./docusaurus.typedoc');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React DayPicker',
  tagline: 'Customizable date picker component for React',
  url: 'https://react-day-picker.js.org',
  baseUrl: '/',
  favicon: 'images/favicon.png',
  organizationName: 'gpbl',
  projectName: 'react-day-picker',
  clientModules: [require.resolve('react-day-picker/style.css')],
  themeConfig: {
    image: 'images/favicon.png',
    navbar: require('./docusaurus.navbar.js'),
    editUrl: 'https://github.com/gpbl/react-day-picker/edit/master/website/',
    gtag: { trackingID: 'UA-68185118-1' },
    prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./docusaurus.sidebars.js'),
          routeBasePath: '/'
        },
        theme: { customCss: require.resolve('./src/custom.css') }
      }
    ]
  ],
  plugins: [['docusaurus-plugin-typedoc', typedocConfig]]
};

module.exports = config;
