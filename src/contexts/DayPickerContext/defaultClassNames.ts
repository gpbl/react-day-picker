import { UIElement, type ClassNames } from '../../types/ui';

// TODO: reduce amount of code or keep verbose?
/**
 * The name of the default CSS classes.
 */
export const defaultClassNames: Required<ClassNames> = {
  [UIElement.Root]: 'rdp',
  [UIElement.MultipleMonths]: 'multiple_months',
  [UIElement.WithWeekNumber]: 'with_weeknumber',

  [UIElement.MonthCaption]: 'month_caption',

  [UIElement.CaptionStart]: 'caption_start',
  [UIElement.CaptionEnd]: 'caption_end',
  [UIElement.CaptionBetween]: 'caption_between',
  [UIElement.CaptionLabel]: 'caption_label',

  [UIElement.CaptionDropdowns]: 'caption_dropdowns',

  [UIElement.Dropdown]: 'dropdown',
  [UIElement.DropdownMonth]: 'dropdown_month',
  [UIElement.DropdownYear]: 'dropdown_year',
  [UIElement.DropdownIcon]: 'dropdown_icon',

  [UIElement.MonthsWrapper]: 'months_wrapper',
  [UIElement.MonthGridWrapper]: 'month_grid_wrapper',
  [UIElement.MonthGrid]: 'month_grid',
  [UIElement.MonthRowGroup]: 'month_rowgroup',

  [UIElement.WeekDaysRow]: 'weekdays_row',
  [UIElement.WeekDayColumnHeader]: 'weekday_columnheader',

  [UIElement.WeekRow]: 'week_row',

  [UIElement.WeekNumberRowHeader]: 'weeknumber_rowheader',

  [UIElement.Nav]: 'nav',
  [UIElement.ButtonPrevious]: 'button_previous',
  [UIElement.ButtonNext]: 'button_next',

  [UIElement.ButtonIcon]: 'button_icon',

  [UIElement.Day]: 'day',
  [UIElement.DayToday]: 'day_today',
  [UIElement.DayOutside]: 'day_outside',
  [UIElement.DaySelected]: 'day_selected',
  [UIElement.DayDisabled]: 'day_disabled',
  [UIElement.DayHidden]: 'day_hidden',
  [UIElement.DayRangeStart]: 'day_range_start',
  [UIElement.DayRangeEnd]: 'day_range_end',
  [UIElement.DayRangeMiddle]: 'day_range_middle',

  [UIElement.Caption]: 'caption',
  [UIElement.Head]: 'head',
  [UIElement.HeadRow]: 'head_row',
  [UIElement.Row]: 'row',
  [UIElement.HeadCell]: 'head_cell',
  [UIElement.Cell]: 'cell',
  [UIElement.Footer]: 'footer',
  [UIElement.ContrastMore]: 'contrast_more',
  [UIElement.ContrastLess]: 'contrast_less',
  [UIElement.ColorDark]: 'dark',
  [UIElement.ColorLight]: 'light',
  [UIElement.ColorAuto]: '',
  [UIElement.DropdownNav]: 'dropdown_nav',
  [UIElement.MonthsDropdown]: 'months_dropdown',
  [UIElement.ContrastNoPreference]: '',
  [UIElement.Select]: 'select',
  [UIElement.DropdownRoot]: 'dropdown_root',
  [UIElement.DayExcluded]: 'day_excluded',
  [UIElement.DayFocusable]: ''
};
