import { CSSProperties } from "react";

import type { CustomComponents, ClassNames, Styles } from "./types/index.js";

/**
 * The UI elements composing DayPicker. These elements are mapped to
 * {@link CustomComponents}, the {@link ClassNames} and the {@link Styles} used by
 * DayPicker.
 *
 * Some of these elements are extended by flags and modifiers.
 */
export enum UI {
  /** The previous button in the navigation. */
  ButtonPrevious = "button_previous",
  /** The next button the navigation. */
  ButtonNext = "button_next",
  /** The root component displaying the months and the navigation bar. */
  Root = "root",
  /** The Chevron SVG element used by navigation buttons and dropdowns. */
  Chevron = "chevron",
  /**
   * The grid cell with the day's date. Extended by {@link DayFlag} and
   * {@link SelectionFlag}.
   */
  Day = "day",
  /** The button containing the formatted day's date, inside the grid cell. */
  DayButton = "day_button",
  /** The caption label of the month (when not showing the dropdown navigation). */
  CaptionLabel = "caption_label",
  /** The container of the dropdown navigation (when enabled). */
  Dropdowns = "dropdowns",
  /** The dropdown element to select for years and months. */
  Dropdown = "dropdown",
  /** The container element of the dropdown. */
  DropdownRoot = "dropdown_root",
  /** The root element of the footer. */
  Footer = "footer",
  /** The month grid. */
  MonthGrid = "month_grid",
  /** Contains the dropdown navigation or the caption label. */
  MonthCaption = "month_caption",
  /** The dropdown with the months. */
  MonthsDropdown = "months_dropdown",
  /** Wrapper of the month grid. */
  Month = "month",
  /** The container of the displayed months. */
  Months = "months",
  /** The navigation bar with the previous and next buttons. */
  Nav = "nav",
  /** The row containing the week. */
  Week = "week",
  /** The group of row weeks in a month (`tbody`). */
  Weeks = "weeks",
  /** The column header with the weekday. */
  Weekday = "weekday",
  /** The row grouping the weekdays in the column headers. */
  Weekdays = "weekdays",
  /** The cell containing the week number. */
  WeekNumber = "week_number",
  /** The cell header of the week numbers column. */
  WeekNumberHeader = "week_number_header",
  /** The dropdown with the years. */
  YearsDropdown = "years_dropdown"
}

/** The flags for the {@link UI.Day}. */
export enum DayFlag {
  /** The day is disabled. */
  disabled = "disabled",
  /** The day is hidden. */
  hidden = "hidden",
  /** The day is outside the current month. */
  outside = "outside",
  /** The day is focused. */
  focused = "focused",
  /** The day is today. */
  today = "today"
}

/**
 * The state that can be applied to the {@link UI.Day} element when in selection
 * mode.
 */
export enum SelectionState {
  /** The day is at the end of a selected range. */
  range_end = "range_end",
  /** The day is at the middle of a selected range. */
  range_middle = "range_middle",
  /** The day is at the start of a selected range. */
  range_start = "range_start",
  /** The day is selected. */
  selected = "selected"
}

/**
 * Deprecated UI elements and flags.
 *
 * @deprecated See the new UI elements in {@link UI}.
 */
export type DeprecatedUI<T extends CSSProperties | string> = {
  /** @deprecated Use `button_previous` and `button_next`. */
  button: T;
  /** @deprecated This element has been removed. */
  button_reset: T;
  /** @deprecated This element has been renamed. Use `month_caption` instead. */
  caption: T;
  /** @deprecated This element has been removed. */
  caption_between: T;
  /** @deprecated This element has been removed. */
  caption_dropdowns: T;
  /** @deprecated This element has been removed. */
  caption_end: T;
  /** @deprecated This element has been removed. */
  caption_start: T;
  /** @deprecated Use `day` instead. */
  cell: T;
  /** @deprecated Use `disabled` instead. */
  day_disabled: T;
  /** @deprecated Use `hidden` instead. */
  day_hidden: T;
  /** @deprecated Use `outside` instead. */
  day_outside: T;
  /** @deprecated Use `range_end` instead. */
  day_range_end: T;
  /** @deprecated Use `range_middle` instead. */
  day_range_middle: T;
  /** @deprecated Use `range_start` instead. */
  day_range_start: T;
  /** @deprecated Use `selected` instead. */
  day_selected: T;
  /** @deprecated Use `today` instead. */
  day_today: T;
  /** @deprecated This element has been removed. */
  dropdown_icon: T;
  /** @deprecated Use `months_dropdown` instead. */
  dropdown_month: T;
  /** @deprecated Use `years_dropdown` instead. */
  dropdown_year: T;
  /** @deprecated This element has been removed. */
  head: T;
  /** @deprecated Use `weekday` instead. */
  head_cell: T;
  /** @deprecated Use `weekdays` instead. */
  head_row: T;
  /**
   * @deprecated This flag has been removed. Use `data-multiple-months` in your
   *   CSS selectors.
   */
  multiple_months: T;
  /**
   * @deprecated This element has been removed. Use `button_previous` and
   *   `button_next`.
   */
  nav_button: T;
  /** @deprecated This element has been renamed. Use `button_next` and */
  nav_button_next: T;
  /** @deprecated This element has been renamed. Use `button_previous` and */
  nav_button_previous: T;
  /** @deprecated This element has been removed. Use `chevron` instead. */
  nav_icon: T;
  /** @deprecated This element has been renamed. Use `week` instead. */
  row: T;
  /** @deprecated This element has been renamed. Use `month_grid` instead. */
  table: T;
  /** @deprecated This element has been renamed. Use `weeks` instead. */
  tbody: T;
  /** @deprecated This element has been removed. Use `footer` instead. */
  tfoot: T;
  /** @deprecated This flag has been removed. */
  vhidden: T;
  /**
   * @deprecated This element has been renamed. Use {@link UI.WeekNumber}
   *   instead.
   */
  weeknumber: T;
  /**
   * @deprecated This flag has been removed. Use `data-week-numbers` in your
   *   CSS.
   */
  with_weeknumber: T;
};
