import { DayPickerClassNames } from '../types';

/**
 * List the default CSS class names. Class names can be overridden using the
 * [[classNames]] prop.
 */
export const defaultClassNames: DayPickerClassNames = {
  /** Root element */
  root: 'rdp',
  caption: 'rdp-caption',

  // Day Component
  day: 'rdp-day',
  dayWrapper: 'rdp-day_wrapper',

  // Month Component
  month: 'rdp-month',
  monthTable: 'rdp-month_table',
  monthTbody: 'rdp-month_tbody',
  months: 'rdp-months',

  // Head Components
  head: 'rdp-head',
  headRow: 'rdp-head_row',
  headWeekNumber: 'rdp-head_weeknumber',
  headWeekName: 'rdp-head_weekname',

  // Navigation Component
  nav: 'rdp-nav',
  navPrev: 'rdp-nav_prev',
  navNext: 'rdp-nav_next',

  // Week Component
  week: 'rdp-week',
  weekDay: 'rdp-week_day',
  weekWeeknumber: 'rdp-week_weeknumber',

  // WeekNumber component
  weekNumber: 'rdp-weeknumber',

  // Modifiers
  selected: 'rdp-day_selected',
  disabled: 'rdp-day_disabled',
  today: 'rdp-day_today',
  aftermonth: 'rdp-day_outside',
  beforemonth: 'rdp-day_outside'
};
