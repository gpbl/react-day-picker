import { ClassNames, UIElement } from '../../../types';

/**
 * The name of the CSS classes for the [[UIElements]].
 */
export const defaultClassNames: Required<ClassNames> = {
  /** Root element */
  [UIElement.Root]: 'rdp',
  [UIElement.RootMultipleMonths]: 'rdp-multiple-months',
  [UIElement.Caption]: 'rdp-caption',
  [UIElement.CaptionFirst]: 'rdp-caption_first',
  [UIElement.CaptionLast]: 'rdp-caption_last',
  [UIElement.CaptionBetween]: 'rdp-caption_between',
  [UIElement.DropdownsContainer]: 'rdp-caption-dropdowns',

  [UIElement.Dropdown]: 'rdp-dropdown',
  [UIElement.DropdownLabel]: 'rdp-dropdown-label',
  [UIElement.DropdownMonth]: 'rdp-dropdown_month',
  [UIElement.DropdownYear]: 'rdp-dropdown_year',

  // Day Component
  [UIElement.Day]: 'rdp-day',

  // Month Component
  [UIElement.Months]: 'rdp-months',
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
  [UIElement.Cell]: 'rdp-cell'
};
