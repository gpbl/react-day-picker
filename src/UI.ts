import type { ClassNames, CustomComponents, Styles } from "./types/index.js";

/**
 * Enum representing the UI elements composing DayPicker. These elements are
 * mapped to {@link CustomComponents}, {@link ClassNames}, and {@link Styles}.
 *
 * Some elements are extended by flags and modifiers.
 */
export enum UI {
  /** The root component displaying the months and the navigation bar. */
  Root = "root",
  /** The Chevron SVG element used by navigation buttons and dropdowns. */
  Chevron = "chevron",
  /**
   * The grid cell with the day's date. Extended by {@link DayFlag} and
   * {@link SelectionState}.
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
  /**
   * The next month button in the navigation. *
   *
   * @since 9.1.0
   */
  NextMonthButton = "button_next",
  /**
   * The previous month button in the navigation.
   *
   * @since 9.1.0
   */
  PreviousMonthButton = "button_previous",
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
  YearsDropdown = "years_dropdown",
}

/** Enum representing flags for the {@link UI | UI.Day} element. */
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
  today = "today",
}

/**
 * Enum representing selection states that can be applied to the {@link UI | UI.Day}
 * element in selection mode.
 */
export enum SelectionState {
  /** The day is at the end of a selected range. */
  range_end = "range_end",
  /** The day is at the middle of a selected range. */
  range_middle = "range_middle",
  /** The day is at the start of a selected range. */
  range_start = "range_start",
  /** The day is selected. */
  selected = "selected",
}

/**
 * Enum representing different animation states for transitioning between
 * months.
 */
export enum Animation {
  /** The entering weeks when they appear before the exiting month. */
  weeks_before_enter = "weeks_before_enter",
  /** The exiting weeks when they disappear before the entering month. */
  weeks_before_exit = "weeks_before_exit",
  /** The entering weeks when they appear after the exiting month. */
  weeks_after_enter = "weeks_after_enter",
  /** The exiting weeks when they disappear after the entering month. */
  weeks_after_exit = "weeks_after_exit",
  /** The entering caption when it appears after the exiting month. */
  caption_after_enter = "caption_after_enter",
  /** The exiting caption when it disappears after the entering month. */
  caption_after_exit = "caption_after_exit",
  /** The entering caption when it appears before the exiting month. */
  caption_before_enter = "caption_before_enter",
  /** The exiting caption when it disappears before the entering month. */
  caption_before_exit = "caption_before_exit",
}
