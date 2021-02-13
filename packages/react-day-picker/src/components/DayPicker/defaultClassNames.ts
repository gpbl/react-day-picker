import { DayPickerClassNames } from 'types';

const classNames: DayPickerClassNames = {
  /** Root element */
  root: 'rdp',
  caption: 'rdp-caption',

  // Day Component
  day: 'rdp-day',

  // Month Component
  months: 'rdp-months',
  month: 'rdp-month',
  table: 'rdp-table',
  tbody: 'rdp-body',

  // Head Components
  head: 'rdp-head',
  headRow: 'rdp-head-row',
  headCell: 'rdp-head-cell',

  // Navigation Component
  nav: 'rdp-nav',
  navPrevButton: 'rdp-nav-prev',
  navNextButton: 'rdp-nav-next',

  // Week Component
  row: 'rdp-row',
  rowHead: 'rdp-row-head',
  cell: 'rdp-cell',

  // Modifiers
  selected: 'rdp-day_selected',
  disabled: 'rdp-day_disabled',
  today: 'rdp-day_today',
  aftermonth: 'rdp-day_outside',
  beforemonth: 'rdp-day_outside'
};

export default classNames;
