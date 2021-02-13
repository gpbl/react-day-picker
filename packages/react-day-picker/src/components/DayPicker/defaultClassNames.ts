import { DayPickerClassNames } from 'types';

const classNames: DayPickerClassNames = {
  /** Root element */
  root: 'rdp',
  caption: 'rdp-caption',

  // Day Component
  day: 'rdp-day',
  dayWrapper: 'rdp-day_wrapper',

  // Month Component
  month: 'rdp-month',
  monthTable: 'rdp-table',
  monthTbody: 'rdp-body',
  months: 'rdp-months',

  // Head Components
  head: 'rdp-head',
  headRow: 'rdp-head-row',
  headCell: 'rdp-head-cell',

  // Navigation Component
  nav: 'rdp-nav',
  navPrev: 'rdp-nav_prev',
  navNext: 'rdp-nav_next',

  // Week Component
  week: 'rdp-row',
  weekDay: 'rdp-cell',
  weekWeeknumber: 'rdp-row_head',

  // WeekNumber component
  weekNumber: 'rdp-rownumber',

  // Modifiers
  selected: 'rdp-day_selected',
  disabled: 'rdp-day_disabled',
  today: 'rdp-day_today',
  aftermonth: 'rdp-day_outside',
  beforemonth: 'rdp-day_outside'
};

export default classNames;
