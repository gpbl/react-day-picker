const pkg = require('react-day-picker/package.json');
const pkgPath = '../packages/react-day-picker';

module.exports = {
  title: 'React DayPicker',
  tagline: 'Date picker component for React',
  url: 'https://react-day-picker.js.org',
  baseUrl: '/',
  favicon: 'images/favicon.ico',
  organizationName: 'gpbl',
  projectName: 'react-day-picker',
  themeConfig: {
    navbar: {
      title: 'DayPicker',
      logo: {
        alt: 'DayPicker Logo',
        src: 'images/logo.png'
      },
      items: [
        {
          to: 'start',
          label: 'Documentation',
          activeBaseRegex: '(start|basics|guides)'
        },
        {
          to: 'api/interfaces/daypickerbase',
          label: 'Component Props'
        },
        {
          to: 'api',
          label: 'API Reference',
          activeBaseRegex: '!(api/interfaces/daypickerprops)'
        },
        { to: 'changelog', label: `v${pkg.version}`, position: 'right' },
        {
          href: 'https://github.com/gpbl/react-day-picker',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    gtag: {
      trackingID: 'UA-68185118-1'
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/duotoneDark')
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./config/sidebar.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          routeBasePath: '/'
        },
        // pages: false,
        theme: {
          customCss: require.resolve('./config/custom.css')
        }
      }
    ]
  ],
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        // Plugin settings
        sidebar: {
          sidebarFile: './config/typedoc-sidebar.js'
        },

        // Typedoc settings
        entryPoints: [`${pkgPath}/src/index.ts`],
        tsconfig: `${pkgPath}/tsconfig.json`,
        allReflectionsHaveOwnDocument: true,
        readme: 'none',
        disableSources: true,

        // Markdown plugin settings
        hideBreadcrumbs: true,
        hideInPageTOC: true,
        indexTitle: 'API Reference'
      }
    ]
  ]
};
