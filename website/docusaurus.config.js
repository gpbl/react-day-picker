// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('react-day-picker/package.json');

const typedocConfig = require('./docusaurus.typedoc');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');
const sourceMapPlugin = require('./plugins/source-map');

/** @type {import('@docusaurus/preset-classic').Options} */
const presetClassicConfig = {
  docs: {
    sidebarPath: require.resolve('./docusaurus.sidebars.js'),
    routeBasePath: '/',
    breadcrumbs: false,
    lastVersion: 'current',
    editUrl: 'https://github.com/gpbl/react-day-picker/edit/r/website/',
    versions: {
      current: {
        path: '/',
        label: `v${pkg.version}`
      }
    }
  },
  gtag: { trackingID: 'UA-68185118-1' },
  theme: { customCss: require.resolve('./src/custom.css') }
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React DayPicker',
  tagline: 'Date Picker Component for React',
  url: 'https://react-day-picker.js.org',
  baseUrl: '/',
  favicon: 'images/favicon.png',
  organizationName: 'gpbl',
  projectName: 'react-day-picker',
  trailingSlash: false,
  clientModules: [require.resolve('react-day-picker/dist/style.css')],
  themeConfig: {
    metadata: [
      { name: 'twitter:site', content: '@gpblv' },
      { name: 'twitter:title', content: 'React DayPicker' },
      {
        name: 'twitter:description',
        content:
          'DayPicker is a date picker component for React, written in TypeScript.'
      },
      {
        name: 'og:description',
        content:
          'DayPicker is a date picker component for React, written in TypeScript.'
      },
      {
        name: 'description',
        content:
          'DayPicker is a date picker component for React, written in TypeScript.'
      },
      {
        name: 'keywords',
        content:
          'date picker, react component, calendar component, react datepicker, daypicker, react day picker, date-fns date picker, typescript date picker'
      }
    ],
    docs: {
      sidebar: {
        hideable: false
      }
    },
    image: 'images/og-image.png',
    navbar: require('./docusaurus.navbar.js'),
    prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
    algolia: {
      appId: 'N44150BS2A',
      apiKey: '42c559dd71da40a168be6f6d81d2bbbc',
      indexName: 'react-day-picker-js',
      contextualSearch: true,
      searchPagePath: 'search'
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true
    }
  },
  presets: [['@docusaurus/preset-classic', presetClassicConfig]],
  plugins: [sourceMapPlugin, ['docusaurus-plugin-typedoc', typedocConfig]]
};

module.exports = config;
