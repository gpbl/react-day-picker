import { CSSProperties } from 'react';

export enum DayPickerElements {
  /** Represents the root element. */
  root = 'rdp',
  contrast_no_preference = 'contrast_no_preference',
  button_icon = 'button_icon',
  button_next = 'button_next',
  button_previous = 'button_previous',
  caption_between = 'caption_between',
  caption_dropdowns = 'caption_dropdowns',
  caption_end = 'caption_end',
  caption_label = 'caption_label',
  caption_start = 'caption_start',
  caption = 'caption',
  cell = 'cell',
  color_auto = 'color_auto',
  color_dark = 'color_dark',
  color_light = 'color_light',
  contrast_less = 'contrast_less',
  contrast_more = 'contrast_more',
  day_disabled = 'day_disabled',
  day_hidden = 'day_hidden',
  day_outside = 'day_outside',
  day_range_end = 'day_range_end',
  day_range_middle = 'day_range_middle',
  day_range_start = 'day_range_start',
  day_selected = 'day_selected',
  day_excluded = 'day_excluded',
  day_focusable = 'day_focusable',
  day_today = 'day_today',
  day = 'day',
  dropdown_icon = 'dropdown_icon',
  /** Modifiers added to the {@link Dropdown} root when displaying the months. */
  dropdown_month = 'dropdown_month',
  /** Modifiers added to the {@link Dropdown} root when displaying the years. */
  dropdown_year = 'dropdown_year',
  /** */
  dropdown = 'dropdown',
  /** The root element of the {@link DropdownNav} component. */
  dropdown_nav = 'dropdown_nav',
  /** The root element of the {@link Dropdown} component. */
  dropdown_root = 'dropdown_root',
  /** The root element of the {@link Footer} component. */
  footer = 'footer',
  head_cell = 'head_cell',
  head_row = 'head_row',
  head = 'head',
  month_caption = 'month_caption',
  month_grid_wrapper = 'month_grid_wrapper',
  month_grid = 'month_grid',
  month_rowgroup = 'month_rowgroup',
  months_dropdown = 'months_dropdown',
  months_wrapper = 'months_wrapper',
  multiple_months = 'multiple_months',
  nav = 'nav',
  row = 'row',
  select = 'select',
  week_row = 'week_row',
  weekday_columnheader = 'weekday_columnheader',
  weekdays_row = 'weekdays_row',
  weeknumber_rowheader = 'weeknumber_rowheader',
  with_weeknumber = 'with_weeknumber'
}

export type Styles = {
  [Element in DayPickerElements]: CSSProperties | undefined;
};
export type ClassNames = {
  [Element in DayPickerElements]: string;
};
