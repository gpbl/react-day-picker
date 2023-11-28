import { DayPickerElements, type ClassNames } from '../../types/styles';

/**
 * The name of the default CSS classes.
 */
export const defaultClassNames: Required<ClassNames> = {
  [DayPickerElements.root]: 'rdp',
  [DayPickerElements.multiple_months]: 'multiple_months',
  [DayPickerElements.with_weeknumber]: 'with_weeknumber',

  [DayPickerElements.month_caption]: 'month_caption',

  [DayPickerElements.caption_start]: 'caption_start',
  [DayPickerElements.caption_end]: 'caption_end',
  [DayPickerElements.caption_between]: 'caption_between',
  [DayPickerElements.caption_label]: 'caption_label',

  [DayPickerElements.caption_dropdowns]: 'caption_dropdowns',

  [DayPickerElements.dropdown]: 'dropdown',
  [DayPickerElements.dropdown_month]: 'dropdown_month',
  [DayPickerElements.dropdown_year]: 'dropdown_year',
  [DayPickerElements.dropdown_icon]: 'dropdown_icon',

  [DayPickerElements.months_wrapper]: 'months_wrapper',
  [DayPickerElements.month_grid_wrapper]: 'month_grid_wrapper',
  [DayPickerElements.month_grid]: 'month_grid',
  [DayPickerElements.month_rowgroup]: 'month_rowgroup',

  [DayPickerElements.weekdays_row]: 'weekdays_row',
  [DayPickerElements.weekday_columnheader]: 'weekday_columnheader',

  [DayPickerElements.week_row]: 'week_row',

  [DayPickerElements.weeknumber_rowheader]: 'weeknumber_rowheader',

  [DayPickerElements.nav]: 'nav',
  [DayPickerElements.button_previous]: 'button_previous',
  [DayPickerElements.button_next]: 'button_next',

  [DayPickerElements.button_icon]: 'button_icon',

  [DayPickerElements.day]: 'day',
  [DayPickerElements.day_today]: 'day_today',
  [DayPickerElements.day_outside]: 'day_outside',
  [DayPickerElements.day_selected]: 'day_selected',
  [DayPickerElements.day_disabled]: 'day_disabled',
  [DayPickerElements.day_hidden]: 'day_hidden',
  [DayPickerElements.day_range_start]: 'day_range_start',
  [DayPickerElements.day_range_end]: 'day_range_end',
  [DayPickerElements.day_range_middle]: 'day_range_middle',

  [DayPickerElements.caption]: 'caption',
  [DayPickerElements.head]: 'head',
  [DayPickerElements.head_row]: 'head_row',
  [DayPickerElements.row]: 'row',
  [DayPickerElements.head_cell]: 'head_cell',
  [DayPickerElements.cell]: 'cell',
  [DayPickerElements.footer]: 'footer',
  [DayPickerElements.contrast_more]: 'contrast_more',
  [DayPickerElements.contrast_less]: 'contrast_less',
  [DayPickerElements.color_dark]: 'dark',
  [DayPickerElements.color_light]: 'light',
  [DayPickerElements.color_auto]: '',
  [DayPickerElements.dropdown_nav]: 'dropdown_nav',
  [DayPickerElements.months_dropdown]: 'months_dropdown',
  [DayPickerElements.contrast_no_preference]: '',
  [DayPickerElements.select]: 'select',
  [DayPickerElements.dropdown_root]: 'dropdown_root'
};
