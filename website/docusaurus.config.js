/* eslint-env node */

const config = {
  title: 'react-day-picker',
  tagline: 'Flexible and Customizable Date Picker for React.',
  url: 'http://react-day-picker.js.org',
  baseUrl: '/',
  favicon: 'images/favicon.png',
  organizationName: 'gpbl',
  projectName: 'react-day-picker',
  themeConfig: {
    previewScopes: { DayPicker: 'react-day-picker' },
    prismTheme: require('prism-react-renderer/themes/oceanicNext'),
    navbar: {
      title: 'react-day-picker',
      logo: { alt: 'react-day-picker Logo', src: 'images/logo.png' },
      links: [
        { to: 'docs/start', label: 'Documentation', position: 'left' },
        { to: 'docs/props', label: 'Props', position: 'left' },
        { to: 'changelog', label: 'Changelog', position: 'left' },
        {
          to: 'https://spectrum.chat/react-day-picker',
          label: 'Support',
          position: 'right',
        },
        {
          href: 'https://github.com/gpbl/react-day-picker',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Docs', to: 'docs/intro' },
            { label: 'API', to: 'docs/props' },
          ],
        },
      ],
      logo: { alt: '', src: '' },
      copyright: `Copyright © ${new Date().getFullYear()} gpbl & contributors. Built with Docusaurus.`,
    },
    algolia: {
      apiKey: 'api-key',
      indexName: 'index-name',
      algoliaOptions: {},
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: { sidebarPath: require.resolve('./sidebars.js') },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
};

module.exports = config;
