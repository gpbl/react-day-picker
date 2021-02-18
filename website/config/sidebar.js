const sidebar = [
  'intro',
  'start',
  {
    'DayPicker Basics': [
      'basics/navigating-months',
      'basics/customization',
      'basics/selecting-days',
      'basics/changing-months',
      'basics/modifiers',
      'basics/styling'
    ]
  },
  {
    Guides: [
      // 'guides/custom-components',
      'guides/formatters',
      'guides/localization',
      'guides/input'
    ]
  },
  { 'API Reference': require('./typedoc-sidebar.js') },
  'changelog',
  'contributing',
  'license'
];

module.exports = { sidebar };
