/* eslint-env node */

const config = {
  title: 'react-day-picker',
  tagline: 'Flexible and Customizable Date Picker for React.',
  url: 'http://react-day-picker.js.org',
  baseUrl: '/',
  favicon: 'images/favicon.png',
  organizationName: 'gpbl',
  projectName: 'react-day-picker',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/gpbl/react-day-picker/edit/next/website/docs/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'react-day-picker',
      logo: { alt: 'react-day-picker Logo', src: 'images/logo.png' },
      links: [
        { to: 'docs/start', label: 'Documentation', position: 'left' },
        { to: 'docs/props', label: 'Props', position: 'left' },
        { to: 'docs/changelog', label: 'Changelog', position: 'left' },
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
    gtag: {
      trackingID: 'UA-68185118-1',
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
    // algolia: {
    //   apiKey: 'api-key',
    //   indexName: 'index-name',
    //   algoliaOptions: {},
    // },
  },
};

module.exports = config;
