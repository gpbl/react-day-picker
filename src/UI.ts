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

/** CSS classes used for animating months and captions. */
export enum Animation {
  /** Applied to the entering month when it is after the exiting month. */
  weeks_next_enter = "weeks_next_enter",
  /** Applied to the entering month when it is before the exiting month. */
  weeks_prev_enter = "weeks_prev_enter",
  /** Applied to the exiting month when it is after the entering month. */
  weeks_next_exit = "weeks_next_exit",
  /** Applied to the exiting month when it is before the entering month. */
  weeks_prev_exit = "weeks_prev_exit",
  /** Applied to the entering month caption when it is after the exiting month. */
  caption_next_enter = "caption_next_enter",
  /** Applied to the entering month caption when it is before the exiting month. */
  caption_prev_enter = "caption_prev_enter",
  /** Applied to the exiting month caption when it is after the entering month. */
  caption_next_exit = "caption_next_exit",
  /** Applied to the exiting month caption when it is before the entering month. */
  caption_prev_exit = "caption_prev_exit"
}

/**
 * Deprecated UI elements and flags.
 *
 * These elements were used in previous version of DayPicker and are kept here
 * to help the transition to the new {@link UI | UI elements}.
 *
 * ```diff
 *   <DayPicker classNames={{
 * -  cell: "my-cell",
 * +  day: "my-cell",
 * -  day: "my-day",
 * +  day_button: "my-day",
 * -  day_disabled: "my-day_disabled",
 * +  disabled: "my-day_disabled",
 *    // etc.
 *   }}/>
 * ```
 *
 * @deprecated
 * @since 9.0.1
 * @see https://daypicker.dev/upgrading
 * @see https://daypicker.dev/docs/styling
 */
export type DeprecatedUI<T extends CSSProperties | string> = {
  /**
   * This element was applied to the style of any button in DayPicker and it is
   * replaced by {@link UI.PreviousMonthButton} and {@link UI.NextMonthButton}.
   *
   * @deprecated
   */
  button: T;
  /**
   * This element was resetting the style of any button in DayPicker and it is
   * replaced by {@link UI.PreviousMonthButton} and {@link UI.NextMonthButton}.
   *
   * @deprecated
   */
  button_reset: T;
  /**
   * This element has been renamed to {@link UI.MonthCaption}.
   *
   * @deprecated
   */
  caption: T;
  /**
   * This element has been removed. Captions are styled via
   * {@link UI.MonthCaption}.
   *
   * @deprecated
   */
  caption_between: T;
  /**
   * This element has been renamed to {@link UI.Dropdowns}.
   *
   * @deprecated
   */
  caption_dropdowns: T;
  /**
   * This element has been removed. Captions are styled via
   * {@link UI.MonthCaption}.
   *
   * @deprecated
   */
  caption_end: T;
  /**
   * This element has been removed.
   *
   * @deprecated
   */
  caption_start: T;
  /**
   * This element has been renamed to {@link UI.Day}.
   *
   * @deprecated
   */
  cell: T;
  /**
   * This element has been renamed to {@link DayFlag.disabled}.
   *
   * @deprecated
   */
  day_disabled: T;
  /**
   * This element has been renamed to {@link DayFlag.hidden}.
   *
   * @deprecated
   */
  day_hidden: T;
  /**
   * This element has been renamed to {@link DayFlag.outside}.
   *
   * @deprecated
   */
  day_outside: T;
  /**
   * This element has been renamed to {@link SelectionState.range_end}.
   *
   * @deprecated
   */
  day_range_end: T;
  /**
   * This element has been renamed to {@link SelectionState.range_middle}.
   *
   * @deprecated
   */
  day_range_middle: T;
  /**
   * This element has been renamed to {@link SelectionState.range_start}.
   *
   * @deprecated
   */
  day_range_start: T;
  /**
   * This element has been renamed to {@link SelectionState.selected}.
   *
   * @deprecated
   */
  day_selected: T;
  /**
   * This element has been renamed to {@link DayFlag.today}.
   *
   * @deprecated
   */
  day_today: T;
  /**
   * This element has been removed. The dropdown icon is now {@link UI.Chevron}
   * inside a {@link UI.CaptionLabel}.
   *
   * @deprecated
   */
  dropdown_icon: T;
  /**
   * This element has been renamed to {@link UI.MonthsDropdown}.
   *
   * @deprecated
   */
  dropdown_month: T;
  /**
   * This element has been renamed to {@link UI.YearsDropdown}.
   *
   * @deprecated
   */
  dropdown_year: T;
  /**
   * This element has been removed.
   *
   * @deprecated
   */
  head: T;
  /**
   * This element has been renamed to {@link UI.Weekday}.
   *
   * @deprecated
   */
  head_cell: T;
  /**
   * This element has been renamed to {@link UI.Weekdays}.
   *
   * @deprecated
   */
  head_row: T;
  /**
   * This flag has been removed. Use `data-multiple-months` in your CSS
   * selectors.
   *
   * @deprecated
   */
  multiple_months: T;
  /**
   * This element has been removed. To style the navigation buttons, use
   * {@link UI.PreviousMonthButton} and {@link UI.NextMonthButton}.
   *
   * @deprecated
   */
  nav_button: T;
  /**
   * This element has been renamed to {@link UI.NextMonthButton}.
   *
   * @deprecated
   */
  nav_button_next: T;
  /**
   * This element has been renamed to {@link UI.PreviousMonthButton}.
   *
   * @deprecated
   */
  nav_button_previous: T;
  /**
   * This element has been removed. The dropdown icon is now {@link UI.Chevron}
   * inside a {@link UI.NextMonthButton} or a {@link UI.PreviousMonthButton}.
   *
   * @deprecated
   */
  nav_icon: T;
  /**
   * This element has been renamed to {@link UI.Week}.
   *
   * @deprecated
   */
  row: T;
  /**
   * This element has been renamed to {@link UI.MonthGrid}.
   *
   * @deprecated
   */
  table: T;
  /**
   * This element has been renamed to {@link UI.Weeks}.
   *
   * @deprecated
   */
  tbody: T;
  /**
   * This element has been removed. The {@link UI.Footer} is now a single element
   * below the months.
   *
   * @deprecated
   */
  tfoot: T;
  /**
   * This flag has been removed. There are no "visually hidden" elements in
   * DayPicker 9.
   *
   * @deprecated
   */
  vhidden: T;
  /**
   * This element has been renamed. Use {@link UI.WeekNumber} instead.
   *
   * @deprecated
   */
  weeknumber: T;
  /**
   * This flag has been removed. Use `data-week-numbers` in your CSS.
   *
   * @deprecated
   */
  with_weeknumber: T;
};
