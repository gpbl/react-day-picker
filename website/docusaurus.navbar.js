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
      to: 'api',
      label: 'API Reference'
    },
    { to: 'changelog', label: `v${pkg.version}`, position: 'right' },
    {
      href: 'https://github.com/gpbl/react-day-picker',
      label: 'GitHub',
      position: 'right'
    }
  ]
};
module.exports = navbar;
