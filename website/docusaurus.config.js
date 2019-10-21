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
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: '<DayPicker/>',
      // logo: { alt: 'react-day-picker Logo', src: 'images/logo-name.svg' },
      links: [
        { to: 'docs/start', label: 'Documentation', position: 'left' },
        { to: 'docs/props', label: 'API Reference', position: 'left' },
        { to: 'docs/changelog', label: 'Changelog', position: 'left' },
        {
          to: 'support',
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
          title: 'Documentation',
          items: [
            {
              label: 'Welcome',
              to: 'docs/start',
            },
            {
              label: 'DayPicker Basics',
              to: 'docs/basics',
            },
            {
              label: 'DayPicker Props',
              to: 'docs/props',
            },
            {
              label: 'Older docs (v7)',
              to: 'v7',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Spectrum Chat',
              href: 'https://spectrum.chat/react-day-picker',
            },
            {
              label: 'GitHub Issues',
              to: 'http://github.com/gpbl/react-day-picker/issues',
            },
            {
              label: 'Stack Overflow',
              href:
                'https://stackoverflow.com/questions/tagged/react-day-picker',
            },
          ],
        },
      ],
      logo: { alt: '', src: '' },
      copyright: `Copyright © ${new Date().getFullYear()} gpbl & contributors. Built with Docusaurus.`,
    },
    // algolia: {
    //   apiKey: '3fc1a3f2ec2de5aa850d0f46bd780dc6',
    //   indexName: 'react-day-picker',
    //   algoliaOptions: {},
    // },
  },
};

module.exports = config;
