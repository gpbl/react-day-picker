import { DayPickerClassNames } from 'types';

export const defaultClassNames: DayPickerClassNames = {
  /** Root element */
  Root: 'rdp',
  Caption: 'rdp-caption',

  // Day Component
  Day: 'rdp-day',

  // Month Component
  Months: 'rdp-months',
  Month: 'rdp-month',
  Table: 'rdp-table',
  TBody: 'rdp-body',

  // Head Components
  Head: 'rdp-head',
  HeadRow: 'rdp-head-row',
  HeadCell: 'rdp-head-cell',

  // Navigation Component
  Nav: 'rdp-nav',
  NavPrevButton: 'rdp-nav-prev',
  NavNextButton: 'rdp-nav-next',

  // Week Component
  Row: 'rdp-row',
  RowHead: 'rdp-row-head',
  Cell: 'rdp-cell',

  // Modifiers
  DaySelected: 'rdp-day_selected',
  DayDisabled: 'rdp-day_disabled',
  DayInteractive: 'rdp-day_interactive',
  DayToday: 'rdp-day_today',
  DayAfterMonth: 'rdp-day_outside',
  DayBeforeMonth: 'rdp-day_outside'
};
