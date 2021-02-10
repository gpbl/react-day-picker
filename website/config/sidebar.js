const sidebar = [
  'intro',
  'start',
  {
    'DayPicker Basics': [
      'tutorials/customization',
      'tutorials/selecting-days',
      'tutorials/modifiers'
    ]
  },
  {
    Guides: [
      'guides/styling',
      'guides/changing-months',
      'guides/formatters',
      'guides/localization',
      'guides/input',
      'guides/custom-components',
      'guides/upgrading'
    ]
  },
  { 'API Reference': require('./typedoc-sidebar.js') },
  'changelog',
  'contributing',
  'license'
];

module.exports = { sidebar };
