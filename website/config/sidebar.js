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
      'guides/formatters',
      'guides/localization',
      'guides/changing-months',
      'guides/input',
      'guides/custom-components',
      'guides/upgrading'
    ]
  },
  { 'API Reference': require('./typedoc-sidebar.js') },
  'changelog'
];

module.exports = { sidebar };
