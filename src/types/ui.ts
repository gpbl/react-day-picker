import { CSSProperties } from 'react';

/** @category Styling */
export enum UI {
  /** Represents the root element. */
  Root = 'rdp',
  ContrastNoPreference = 'contrast_no_preference',
  ButtonIcon = 'button_icon',
  ButtonNext = 'button_next',
  ButtonPrevious = 'button_previous',
  CaptionBetween = 'caption_between',
  CaptionDropdowns = 'caption_dropdowns',
  CaptionEnd = 'caption_end',
  CaptionLabel = 'caption_label',
  CaptionStart = 'caption_start',
  Caption = 'caption',
  Cell = 'cell',
  DayDisabled = 'day_disabled',
  DayHidden = 'day_hidden',
  DayOutside = 'day_outside',
  DayRangeEnd = 'day_range_end',
  DayRangeMiddle = 'day_range_middle',
  DayRangeStart = 'day_range_start',
  DaySelected = 'day_selected',
  DayExcluded = 'day_excluded',
  DayFocusable = 'day_focusable',
  DayFocused = 'day_focused',
  DayToday = 'day_today',
  Day = 'day',
  DropdownIcon = 'dropdown_icon',
  /** Modifiers added to the {@link Dropdown} root when displaying the months. */
  DropdownMonth = 'dropdown_month',
  /** Modifiers added to the {@link Dropdown} root when displaying the years. */
  DropdownYear = 'dropdown_year',
  Dropdown = 'dropdown',
  /** The root element of the {@link DropdownNav} component. */
  DropdownNav = 'dropdown_nav',
  /** The root element of the {@link Dropdown} component. */
  DropdownRoot = 'dropdown_root',
  /** The root element of the {@link Footer} component. */
  Footer = 'footer',
  HeadCell = 'head_cell',
  HeadRow = 'head_row',
  Head = 'head',
  MonthCaption = 'month_caption',
  MonthGridWrapper = 'month_grid_wrapper',
  MonthGrid = 'month_grid',
  MonthRowGroup = 'month_rowgroup',
  MonthsDropdown = 'months_dropdown',
  MonthsWrapper = 'months_wrapper',
  MultipleMonths = 'multiple_months',
  Nav = 'nav',
  Row = 'row',
  Select = 'select',
  WeekRow = 'week_row',
  WeekDayColumnHeader = 'weekday_columnheader',
  WeekDaysRow = 'weekdays_row',
  WeekNumberRowHeader = 'weeknumber_rowheader',
  WithWeekNumber = 'with_weeknumber',
  /** TTODO */
  HideWeekdays = 'hide_weekdays'
}

export type Styles = {
  [uiElement in UI]: CSSProperties | undefined;
};
export type ClassNames = {
  [uiElement in UI]: string;
};
