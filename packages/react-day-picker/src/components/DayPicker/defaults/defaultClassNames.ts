import { ClassNames, UIElement } from '../../../types';

/**
 * The name of the default CSS classes for the [[UIElements]].
 */
export const defaultClassNames: Required<ClassNames> = {
  /** Root element */
  [UIElement.Root]: 'rdp',
  [UIElement.RootMultipleMonths]: 'rdp-multiple-months',

  [UIElement.Months]: 'rdp-months',
  [UIElement.CaptionFirst]: 'rdp-month_first',
  [UIElement.CaptionLast]: 'rdp-month_last',
  [UIElement.CaptionBetween]: 'rdp-month_between',

  [UIElement.Caption]: 'rdp-caption',
  [UIElement.CaptionLabel]: 'rdp-caption-label',
  [UIElement.CaptionDropdowns]: 'rdp-caption-dropdowns',

  [UIElement.Dropdown]: 'rdp-dropdown',
  [UIElement.DropdownMonth]: 'rdp-dropdown_month',
  [UIElement.DropdownYear]: 'rdp-dropdown_year',

  // Day Component
  [UIElement.Day]: 'rdp-day',

  // Month Component
  [UIElement.Month]: 'rdp-month',
  [UIElement.Table]: 'rdp-table',
  [UIElement.TBody]: 'rdp-body',

  // Head Components
  [UIElement.Head]: 'rdp-head',
  [UIElement.HeadRow]: 'rdp-head-row',
  [UIElement.HeadCell]: 'rdp-head-cell',

  // Navigation Component
  [UIElement.Nav]: 'rdp-nav',
  [UIElement.NavButton]: 'rdp-nav-button',
  [UIElement.NavButtonPrev]: 'rdp-nav-button_prev',
  [UIElement.NavButtonNext]: 'rdp-nav-button_next',

  [UIElement.NavIcon]: 'rdp-nav-icon',
  [UIElement.DropdownIcon]: 'rdp-dropdown-icon',

  // Week Component
  [UIElement.Row]: 'rdp-row',
  [UIElement.RowHead]: 'rdp-row-head',
  [UIElement.WeekNumber]: 'rdp-weeknumber',
  [UIElement.Cell]: 'rdp-cell'
};
