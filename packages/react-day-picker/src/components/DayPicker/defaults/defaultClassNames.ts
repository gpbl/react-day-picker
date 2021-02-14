import { DayPickerClassNames } from '../../../types';

/**
 * The name of the CSS classes for the [[UIElements]].
 *
 * Replace the default class names using the [[DayPickerComponent.classNames]]
 * prop – for example when using CSS modules.
 */
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
  NavButton: 'rdp-nav-button',
  NavButtonPrev: 'rdp-nav-button_prev',
  NavButtonNext: 'rdp-nav-button_next',

  NavIcon: 'rdp-nav-icon',

  // Week Component
  Row: 'rdp-row',
  RowHead: 'rdp-row-head',
  Cell: 'rdp-cell'
};
