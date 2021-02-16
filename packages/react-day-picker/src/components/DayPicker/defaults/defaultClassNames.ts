import { ClassNames } from '../../../types';

/**
 * The name of the CSS classes for the [[UIElements]].
 */
export const defaultClassNames: Required<ClassNames> = {
  /** Root element */
  Root: 'rdp',
  Caption: 'rdp-caption',
  CaptionDropdowns: 'rdp-caption-dropdowns',

  Dropdown: 'rdp-dropdown',
  DropdownLabel: 'rdp-dropdown-label',
  DropdownMonth: 'rdp-dropdown_month',
  DropdownYear: 'rdp-dropdown_year',

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
  IconDropdown: 'rdp-dropdown-icon',

  // Week Component
  Row: 'rdp-row',
  RowHead: 'rdp-row-head',
  Cell: 'rdp-cell'
};
