import type { CustomComponents, ClassNames, Styles } from "./types";

/**
 * The UI elements composing DayPicker. These elements are mapped to
 * {@link CustomComponents}, the {@link ClassNames} and the {@link Styles} used by
 * DayPicker.
 */
export enum UI {
  /** The previous button in the navigation. */
  ButtonPrevious = "button_previous",
  /** The next button the navigation */
  ButtonNext = "button_next",
  /**
   * The calendar element: the root component displaying the months and the
   * navigation bar. Extended by {@link CalendarFlag}.
   */
  Calendar = "calendar",
  /** The Chevron SVG element used by navigation buttons and dropdowns. */
  Chevron = "chevron",
  /** The gridcell with the day's date. Extended by {@link DayModifier}. */
  Day = "day",
  /** The caption label of the month (when not showing the dropdown navigation). */
  CaptionLabel = "caption_label",
  /** The container of the dropdown navigation (when enabled). */
  DropdownNav = "dropdown_nav",
  /** The dropdown element to select for years and months. */
  Dropdown = "dropdown",
  /** The container element of the dropdown. */
  DropdownRoot = "dropdown_root",
  /** The root element of the footer. */
  Footer = "footer",
  /** The month grid. */
  Month = "month",
  /** Contains the dropdown navigation or the caption label. */
  MonthCaption = "month_caption",
  /** The dropdown with the months. */
  MonthsDropdown = "months_dropdown",
  /** Wrapper of the {@link} grid. */
  MonthWrapper = "month_wrapper",
  /** The container of the displayed months. */
  Months = "months",
  /** The navigation bar with the previous and next buttons */
  Nav = "nav",
  /** The row containing the week. */
  Week = "week",
  /** The group of row weeks in a month. */
  Weeks = "weeks",
  /** The column header with the weekday. */
  Weekday = "weekday",
  /** The row grouping the weekdays in the column headers. */
  Weekdays = "weekdays",
  /** The row header containing the week number. */
  WeekNumber = "week_number",
  /** The dropdown with the years. */
  YearsDropdown = "years_dropdown"
}

/** The modifiers for the {@link UI.Day}. */
export enum DayModifier {
  /** The day is disabled */
  disabled = "disabled",
  /** The day is hidden */
  hidden = "hidden",
  /** The day is outside the current month */
  outside = "outside",
  /** The day is at the end of a selected range. */
  range_end = "range_end",
  /** The day is at the middle of a selected range. */
  range_middle = "range_middle",
  /** The day is at the start of a selected range. */
  range_start = "range_start",
  /** The day is selected. */
  selected = "selected",
  /** The day is focusable. */
  focusable = "focusable",
  /** The day is focused. */
  focused = "focused",
  /** The day is today. */
  today = "today"
}

/** Flags that can be applied to the {@link UI.Calendar} element. */
export enum CalendarFlag {
  /** Assigned when the week numbers are show. */
  hasWeekNumbers = "has_week_numbers",
  /** Assigned when the weekdays are hidden. */
  noWeekdays = "no_weekdays",
  /** Assigned when the calendar has multiple months. */
  hasMultipleMonths = "has_multiple_months"
}

/** Flags that can be applied to the {@link UI.Chevron} element. */
export enum ChevronFlag {
  /** Assigned when the week numbers are show. */
  disabled = "chevron_disabled"
}
