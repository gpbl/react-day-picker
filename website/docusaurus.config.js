/* eslint-env node */

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const path = require('path');

const config = {
  title: 'react-day-picker',
  tagline: 'Flexible and customizable date picker.',
  url: 'https://react-day-picker.js.org',
  baseUrl: '/',
  favicon: 'images/favicon.png',
  organizationName: 'gpbl', // Usually your GitHub org/user name.
  projectName: 'react-day-picker', // Usually your repo name.
  plugins: [],
  themes: [path.resolve(__dirname, './src/theme-preview-codeblock')],
  themeConfig: {
    previewScopes: { DayPicker: 'react-day-picker' },
    prismTheme: require('prism-react-renderer/themes/oceanicNext'),
    navbar: {
      title: 'react-day-picker',
      logo: {
        alt: 'react-day-picker Logo',
        src: 'images/logo.png',
      },
      links: [
        { to: 'docs/start', label: 'Docs', position: 'left' },
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
            {
              label: 'Docs',
              to: 'docs/intro',
            },
            {
              label: 'API',
              to: 'docs/props',
            },
          ],
        },
      ],
      logo: {
        alt: '',
        src: '',
      },
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = config;
