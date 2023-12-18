import { type ClassNames, UI } from '../../types/ui';

// TODO: reduce amount of code or keep verbose?
/**
 * The name of the default CSS classes.
 */
export const defaultClassNames: Required<ClassNames> = {
  [UI.Root]: 'rdp',
  [UI.MultipleMonths]: 'multiple_months',
  [UI.WithWeekNumber]: 'with_weeknumber',
  [UI.HideWeekdays]: 'hide_weekdays',

  [UI.MonthCaption]: 'month_caption',

  [UI.CaptionStart]: 'caption_start',
  [UI.CaptionEnd]: 'caption_end',
  [UI.CaptionBetween]: 'caption_between',
  [UI.CaptionLabel]: 'caption_label',

  [UI.CaptionDropdowns]: 'caption_dropdowns',

  [UI.Dropdown]: 'dropdown',
  [UI.DropdownMonth]: 'dropdown_month',
  [UI.DropdownYear]: 'dropdown_year',
  [UI.DropdownIcon]: 'dropdown_icon',

  [UI.MonthsWrapper]: 'months_wrapper',
  [UI.MonthGridWrapper]: 'month_grid_wrapper',
  [UI.MonthGrid]: 'month_grid',
  [UI.MonthRowGroup]: 'month_rowgroup',

  [UI.WeekDaysRow]: 'weekdays_row',
  [UI.WeekDayColumnHeader]: 'weekday_columnheader',

  [UI.WeekRow]: 'week_row',

  [UI.WeekNumberRowHeader]: 'weeknumber_rowheader',

  [UI.Nav]: 'nav',
  [UI.ButtonPrevious]: 'button_previous',
  [UI.ButtonNext]: 'button_next',

  [UI.ButtonIcon]: 'button_icon',

  [UI.Day]: 'day',
  [UI.DayToday]: 'day_today',
  [UI.DayOutside]: 'day_outside',
  [UI.DaySelected]: 'day_selected',
  [UI.DayDisabled]: 'day_disabled',
  [UI.DayHidden]: 'day_hidden',
  [UI.DayRangeStart]: 'day_range_start',
  [UI.DayRangeEnd]: 'day_range_end',
  [UI.DayRangeMiddle]: 'day_range_middle',

  [UI.Caption]: 'caption',
  [UI.Head]: 'head',
  [UI.HeadRow]: 'head_row',
  [UI.Row]: 'row',
  [UI.HeadCell]: 'head_cell',
  [UI.Cell]: 'cell',
  [UI.Footer]: 'footer',
  [UI.ContrastMore]: 'contrast_more',
  [UI.ContrastLess]: 'contrast_less',
  [UI.ColorDark]: 'dark',
  [UI.ColorLight]: 'light',
  [UI.ColorAuto]: '',
  [UI.DropdownNav]: 'dropdown_nav',
  [UI.MonthsDropdown]: 'months_dropdown',
  [UI.ContrastNoPreference]: '',
  [UI.Select]: 'select',
  [UI.DropdownRoot]: 'dropdown_root',
  [UI.DayExcluded]: 'day_excluded',
  [UI.DayFocusable]: ''
};
