const sidebar = [
  'intro',
  'start',
  {
    'DayPicker Basics': [
      'basics/customization',
      'basics/changing-months',
      'basics/selecting-days',
      'basics/modifiers',
      'basics/styling'
    ]
  },
  {
    Guides: [
      'guides/formatters',
      'guides/localization',
      'guides/input',
      'guides/custom-components'
    ]
  },
  { 'API Reference': require('./typedoc-sidebar.js') },
  'changelog',
  'contributing',
  'license'
];

module.exports = { sidebar };
