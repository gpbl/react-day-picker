// @ts-check */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const typedocConfig = require('./docusaurus.typedoc');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/preset-classic').Options} */
const presetClassicConfig = {
  docs: {
    sidebarPath: require.resolve('./docusaurus.sidebars.js'),
    routeBasePath: '/',
    breadcrumbs: false,
    lastVersion: 'current',
    versions: {
      current: {
        label: 'v8.0.0-rc.0',
        path: '/'
      }
    }
  },
  gtag: { trackingID: 'UA-68185118-1' },
  theme: { customCss: require.resolve('./src/custom.css') }
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React DayPicker',
  tagline: 'Customizable date picker component for React',
  url: 'https://react-day-picker.js.org',
  baseUrl: '/',
  favicon: 'images/favicon.png',
  organizationName: 'gpbl',
  projectName: 'react-day-picker',
  clientModules: [
    require.resolve('react-day-picker/dist/style.css'),
    require.resolve('@codesandbox/sandpack-react/dist/index.css')
  ],
  themeConfig: {
    announcementBar: {
      id: '1',
      content:
        '👋📆 This documentation is for <b>DayPicker v8</b>. For the previous version, see <a href="https://react-day-picker-v7.netlify.app">react-day-picker-v7.netlify.app</a>.',
      // backgroundColor: '#fafbfc',
      // textColor: '#091E42',
      isCloseable: true
    },
    hideableSidebar: false,
    image: 'images/favicon.png',
    navbar: require('./docusaurus.navbar.js'),
    editUrl: 'https://github.com/gpbl/react-day-picker/edit/master/website/',
    prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme }
  },
  presets: [['@docusaurus/preset-classic', presetClassicConfig]],
  plugins: [['docusaurus-plugin-typedoc', typedocConfig]]
};

module.exports = config;
