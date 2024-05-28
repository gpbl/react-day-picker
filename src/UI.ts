/**
 * The UI elements composing DayPicker.
 *
 * These elements are mapped to the components directory.
 */
export enum UI {
  /** The previous button in the navigation. */
  ButtonPrevious = "button_previous",
  /** The next button the navigation */
  ButtonNext = "button_next",
  /** The calendar element, the root of the component. */
  Calendar = "calendar",
  /** The gridcell with the day's date. */
  Day = "day",
  /** The label of a caption. */
  CaptionLabel = "caption_label",
  /** The Chevron SVG element used by navigation buttons and dropdowns. */
  Chevron = "chevron",
  /** The container of the dropdown navigation.. */
  DropdownNav = "dropdown_nav",
  /** The dropdown used for years and months. */
  Dropdown = "dropdown",
  /** The root element of the {@link Dropdown} component. */
  DropdownRoot = "dropdown_root",
  /** The root element of the {@link Footer} component. */
  Footer = "footer",
  /** The caption of a month. */
  MonthCaption = "month_caption",
  /** The dropdown of months. */
  MonthsDropdown = "months_dropdown",
  /** Wrapper of the month grid. */
  MonthWrapper = "month_wrapper",
  /** The month grid. */
  Month = "month",
  /** The group of weeks in a month. */
  Weeks = "weeks",
  /** Container containing the months. */
  Months = "months",
  /** The navigation element. */
  Nav = "nav",
  /** The row in a week. */
  Week = "week",
  /** The column's header with the weekday. */
  Weekday = "weekday",
  /** The row grouping the weekdays. */
  Weekdays = "weekdays",
  /** The row header in a week number. */
  WeekNumber = "week_number",
  /** The dropdown of years. */
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
  hasWeekNumbers = "week_numbers",
  /** Assigned when the weekdays are hidden. */
  noWeekdays = "no_weekdays",
  /** Assigned when the calendar has multiple months. */
  hasMultipleMonths = "multiple_months"
}
