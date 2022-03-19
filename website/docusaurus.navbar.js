const pkg = require('react-day-picker/package.json');

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
/** @type {import('@docusaurus/preset-classic').ThemeConfig["navbar"]} */
const navbar = {
  title: 'React DayPicker',
  logo: {
    alt: 'DayPicker Logo',
    src: 'images/logo.png'
  },
  hideOnScroll: true,
  items: [
    {
      to: 'start',
      label: 'Documentation'
    },
    {
      to: 'reference',
      label: 'API Reference'
    },
    {
      to: 'development',
      label: 'Development'
    },
    { to: 'changelog', label: `v${pkg.version}`, position: 'right' },
    {
      href: 'https://github.com/gpbl/react-day-picker',
      position: 'right',
      className: 'header-github-link',
      'aria-label': 'GitHub repository'
    }
  ]
};

module.exports = navbar;
