import { CSSProperties } from 'react';

export enum DayPickerElements {
  /** Represents the root element. */
  root = 'rdp',
  /** Represents the root element */
  contrast_no_preference = 'contrast_no_preference',
  /** Represents the root element */
  button_icon = 'button_icon',
  /** Represents the root element */
  button_next = 'button_next',
  /** Represents the root element */
  button_previous = 'button_previous',
  /** Represents the root element */
  caption_between = 'caption_between',
  /** Represents the root element */
  caption_dropdowns = 'caption_dropdowns',
  /** Represents the root element */
  caption_end = 'caption_end',
  /** Represents the root element */
  caption_label = 'caption_label',
  /** Represents the root element */
  caption_start = 'caption_start',
  /** Represents the root element */
  caption = 'caption',
  /** Represents the root element */
  cell = 'cell',
  /** Represents the root element */
  color_auto = 'color_auto',
  /** Represents the root element */
  color_dark = 'color_dark',
  /** Represents the root element */
  color_light = 'color_light',
  /** Represents the root element */
  contrast_less = 'contrast_less',
  /** Represents the root element */
  contrast_more = 'contrast_more',
  /** Represents the root element */
  day_disabled = 'day_disabled',
  /** Represents the root element */
  day_hidden = 'day_hidden',
  /** Represents the root element */
  day_outside = 'day_outside',
  /** Represents the root element */
  day_range_end = 'day_range_end',
  /** Represents the root element */
  day_range_middle = 'day_range_middle',
  /** Represents the root element */
  day_range_start = 'day_range_start',
  /** Represents the root element */
  day_selected = 'day_selected',
  /** Represents the root element */
  day_today = 'day_today',
  /** Represents the root element */
  day = 'day',
  /** Represents the root element */
  dropdown_icon = 'dropdown_icon',
  /** @deprecated Use {@link DayPickerElements.months_dropdown} */
  dropdown_month = 'dropdown_month',
  /** @deprecated Use {@link DayPickerElements.years_dropdown} */
  dropdown_year = 'dropdown_year',
  dropdown = 'dropdown',
  dropdown_nav = 'dropdown_nav',
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
  with_weeknumber = 'with_weeknumber',
  years_dropdown = 'years_dropdown'
}

export type Styles = {
  [Element in DayPickerElements]: CSSProperties | undefined;
};
export type ClassNames = {
  [Element in DayPickerElements]: string;
};
