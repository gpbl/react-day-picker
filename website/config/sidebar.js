module.exports = [
  'start',
  'examples',
  {
    type: 'category',
    label: 'Use of modifiers',
    items: ['modifiers', 'modifiers-matching-days']
  },
  {
    type: 'category',
    label: 'Guides',
    items: [
      'styling',
      'months',
      'formatting',
      'localization',
      'input',
      'custom-components',
      'upgrading'
    ]
  },
  {
    type: 'category',
    label: 'Reference',
    items: [
      'api/daypicker',
      {
        type: 'category',
        label: 'Components',
        items: [
          'api/day',
          'api/monthcaption',
          'api/navigation',
          'api/weeknumber'
        ]
      },
      'api/enumerations',
      'api/interface',
      'api/type',
      'reference/changelog',
      'reference/hooks'
    ]
  }
];
