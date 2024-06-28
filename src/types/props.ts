import React from "react";

import type { Locale } from "../lib/dateLib.js";

import type {
  ClassNames,
  ModifiersClassNames,
  Styles,
  ModifiersStyles,
  CustomComponents,
  Matcher,
  Labels,
  Formatters,
  MonthChangeEventHandler,
  DayEventHandler,
  WeekNumberMouseEventHandler,
  Modifiers,
  DateRange,
  Mode,
  DateLib
} from "./shared.js";

/**
 * The props for the `<DayPicker />` component.
 *
 * @group DayPicker
 */
export type DayPickerProps = PropsBase &
  (
    | PropsSingle
    | PropsSingleRequired
    | PropsMulti
    | PropsMultiRequired
    | PropsRange
    | PropsRangeRequired
    | { mode?: undefined }
  );

/**
 * Props used for customization of the calendar, localization, and event
 * handling.
 *
 * @group Props
 */
export interface PropsBase {
  /**
   * The selection mode. Use this prop to enable the selection of multiple days
   * or a range of days.
   *
   * - `single`: a single day
   * - `multiple`: multiple days
   * - `range`: a range of days
   */
  mode?: Mode | undefined;

  /** Class name to add to the root element */
  className?: string;
  /**
   * Change the class names used by DayPicker.
   *
   * Use this prop when you need to change the default class names — for example
   * when importing the style via CSS modules or when using a CSS framework.
   */
  classNames?: Partial<ClassNames>;
  /** Change the class name for the day matching the `modifiers`. */
  modifiersClassNames?: ModifiersClassNames;
  /** Style to apply to the root element. */
  style?: React.CSSProperties;
  /** Change the inline styles of the HTML elements. */
  styles?: Partial<Styles>;
  /** Change the class name for the day matching the {@link modifiers}. */
  modifiersStyles?: ModifiersStyles;
  /** A unique id to replace the React generated id. Used for ARIA labels. */
  id?: string;
  /**
   * The initial month to show in the calendar.
   *
   * Use this prop to let DayPicker control the current month. If you need to
   * set the month programmatically, use {@link month} and {@link onMonthChange}.
   *
   * @defaultValue The current month
   */
  defaultMonth?: Date;
  /**
   * The month displayed in the calendar.
   *
   * As opposed to `defaultMonth`, use this prop with `onMonthChange` to change
   * the month programmatically.
   */
  month?: Date;
  /**
   * The number of displayed months.
   *
   * @defaultValue 1
   */
  numberOfMonths?: number;
  /**
   * The earliest month to start the month navigation.
   *
   * @since 9.0.0
   */
  startMonth?: Date | undefined;
  /**
   * @private
   * @deprecated This prop has been removed. Use `hidden={{ before: date }}`
   *   instead.
   */
  fromDate?: Date | undefined;
  /**
   * @private
   * @deprecated This prop has been renamed to `startMonth`.
   */
  fromMonth?: Date | undefined;
  /**
   * @private
   * @deprecated Use `startMonth` instead. E.g. `startMonth={new Date(year,
   *   0)}`.
   */
  fromYear?: number | undefined;

  /**
   * The latest month to end the month navigation.
   *
   * @since 9.0.0
   */
  endMonth?: Date;
  /**
   * @private
   * @deprecated This prop has been removed. Use `hidden={{ after: date }}`
   *   instead.
   */
  toDate?: Date;
  /**
   * @private
   * @deprecated This prop has been renamed to `endMonth`.
   */
  toMonth?: Date;
  /**
   * @private
   * @deprecated Use `endMonth` instead. E.g. `endMonth={new Date(year, 0)}`.
   */
  toYear?: number;

  /** Paginate the month navigation displaying the `numberOfMonths` at time. */
  pagedNavigation?: boolean;
  /**
   * Render the months in reversed order (when {@link numberOfMonths} is set) to
   * display the most recent month first.
   */
  reverseMonths?: boolean;
  /**
   * Hide the navigation buttons. This prop won't disable the navigation: to
   * disable the navigation, use {@link disableNavigation}.
   *
   * @since 9.0.0
   */
  hideNavigation?: boolean;
  /**
   * Disable the navigation between months. This prop won't hide the navigation:
   * to hide the navigation, use {@link hideNavigation}.
   */
  disableNavigation?: boolean;
  /**
   * Show dropdowns to navigate between months or years.
   *
   * - `true`: display the dropdowns for both month and year
   * - `label`: display the month and the year as a label. Change the label with
   *   the `formatCaption` formatter.
   * - `month`: display only the dropdown for the months
   * - `year`: display only the dropdown for the years
   *
   * **Note:** showing the dropdown will set the start/end months
   * {@link fromYear} to the 100 years ago, and {@link toYear} to the current
   * year.
   */
  captionLayout?: "label" | "dropdown" | "dropdown-months" | "dropdown-years";
  /**
   * Display always 6 weeks per each month, regardless the month’s number of
   * weeks. Weeks will be filled with the days from the next month.
   */
  fixedWeeks?: boolean;
  /**
   * Hide the row displaying the weekday row header.
   *
   * @since 9.0.0
   */
  hideWeekdayRow?: boolean;
  /** Show the outside days (days falling in the next or the previous month). */
  showOutsideDays?: boolean;
  /**
   * Show the week numbers column. Weeks are numbered according to the local
   * week index.
   *
   * - To use ISO week numbering, use the `ISOWeek` prop.
   * - To change how the week numbers are displayed, use the `formatters` prop.
   */
  showWeekNumber?: boolean;
  /**
   * Use ISO week dates instead of the locale setting. Setting this prop will
   * ignore `weekStartsOn` and `firstWeekContainsDate`.
   *
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   */
  ISOWeek?: boolean;
  /** Change the components used for rendering the calendar elements. */
  components?: CustomComponents;
  /** Content to add to the grid as footer element. */
  footer?: React.ReactNode;
  /**
   * When a selection mode is set, DayPicker will focus the first selected day
   * (if set) or the today's date (if not disabled).
   *
   * Use this prop when you need to focus DayPicker after a user actions, for
   * improved accessibility.
   */
  autoFocus?: boolean;
  /** Apply the `disabled` modifier to the matching days. */
  disabled?: Matcher | Matcher[] | undefined;
  /**
   * Apply the `hidden` modifier to the matching days. Will hide them from the
   * calendar.
   */
  hidden?: Matcher | Matcher[] | undefined;
  /**
   * The today’s date. Default is the current date. This date will get the
   * `today` modifier to style the day.
   */
  today?: Date;
  /** Add modifiers to the matching days. */
  modifiers?: Record<string, Matcher | Matcher[] | undefined> | undefined;
  /**
   * Labels creators to override the defaults. Use this prop to customize the
   * aria-label attributes in DayPicker.
   */
  labels?: Partial<Labels>;
  /**
   * Formatters used to format dates to strings. Use this prop to override the
   * default functions.
   */
  formatters?: Partial<Formatters>;
  /**
   * The text direction of the calendar. Use `ltr` for left-to-right (default)
   * or `rtl` for right-to-left.
   */
  dir?: HTMLDivElement["dir"];
  /**
   * A cryptographic nonce ("number used once") which can be used by Content
   * Security Policy for the inline `style` attributes.
   */
  nonce?: HTMLDivElement["nonce"];
  /** Add a `title` attribute to the container element. */
  title?: HTMLDivElement["title"];
  /** Add the language tag to the container element. */
  lang?: HTMLDivElement["lang"];
  /**
   * The date-fns locale object used to localize dates.
   *
   * @defaultValue en-US
   * @see https://date-fns.org/docs/Locale
   */
  locale?: Locale | undefined;
  /**
   * The index of the first day of the week (0 - Sunday). Overrides the locale's
   * one.
   */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  /**
   * The day of January, which is always in the first week of the year.
   *
   * @see https://date-fns.org/docs/getWeek
   * @see https://en.wikipedia.org/wiki/Week#Numbering
   */
  firstWeekContainsDate?: 1 | 4;
  /**
   * Enable `DD` and `DDDD` for week year tokens when formatting or parsing
   * dates.
   *
   * @see https://date-fns.org/docs/Unicode-Tokens
   */
  useAdditionalWeekYearTokens?: boolean | undefined;
  /**
   * Enable `YY` and `YYYY` for day of year tokens when formatting or parsing
   * dates.
   *
   * @see https://date-fns.org/docs/Unicode-Tokens
   */
  useAdditionalDayOfYearTokens?: boolean | undefined;

  /* EVENT HANDLERS */
  /** Event fired when the user navigates between months. */
  onMonthChange?: MonthChangeEventHandler;
  /** Event handler when a day is clicked. */
  onDayClick?: DayEventHandler<React.MouseEvent>;
  /** Event handler when a day is focused. */
  onDayFocus?: DayEventHandler<React.FocusEvent>;
  /** Event handler when a day is blurred. */
  onDayBlur?: DayEventHandler<React.FocusEvent>;
  /** Event handler when the mouse enters a day. */
  onDayMouseEnter?: DayEventHandler<React.MouseEvent>;
  /** Event handler when the mouse leaves a day. */
  onDayMouseLeave?: DayEventHandler<React.MouseEvent>;
  /** Event handler when a key is pressed on a day. */
  onDayKeyDown?: DayEventHandler<React.KeyboardEvent>;
  /** Event handler when a key is released on a day. */
  onDayKeyUp?: DayEventHandler<React.KeyboardEvent>;
  /** Event handler when a key is pressed and released on a day. */
  onDayKeyPress?: DayEventHandler<React.KeyboardEvent>;
  /** Event handler when a pointer enters a day. */
  onDayPointerEnter?: DayEventHandler<React.PointerEvent>;
  /** Event handler when a pointer leaves a day. */
  onDayPointerLeave?: DayEventHandler<React.PointerEvent>;
  /** Event handler when a touch is cancelled on a day. */
  onDayTouchCancel?: DayEventHandler<React.TouchEvent>;
  /** Event handler when a touch ends on a day. */
  onDayTouchEnd?: DayEventHandler<React.TouchEvent>;
  /** Event handler when a touch moves on a day. */
  onDayTouchMove?: DayEventHandler<React.TouchEvent>;
  /** Event handler when a touch starts on a day. */
  onDayTouchStart?: DayEventHandler<React.TouchEvent>;
  /** Event handler when the next month button is clicked. */
  onNextClick?: MonthChangeEventHandler;
  /** Event handler when the previous month button is clicked. */
  onPrevClick?: MonthChangeEventHandler;
  /** Event handler when a week number is clicked */
  onWeekNumberClick?: WeekNumberMouseEventHandler;

  /**
   * Replace the default date library with a custom one.
   *
   * @private
   * @since 9.0.0
   * @experimental
   */
  dateLib?: Partial<DateLib> | undefined;
}
/**
 * The props when the single selection is required.
 *
 * @group Props
 */
export interface PropsSingleRequired {
  mode: "single";
  required: true;
  selected: Date;
  onSelect?: (
    selected: Date,
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => void | undefined;
}
/**
 * The props when the single selection is optional.
 *
 * @group Props
 */
export interface PropsSingle {
  mode: "single";
  required?: false | undefined;
  selected?: Date | undefined;
  onSelect?: (
    selected: Date | undefined,
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => void;
}
/**
 * The props when the multiple selection is required.
 *
 * @group Props
 */
export interface PropsMultiRequired {
  mode: "multiple";
  required: true;
  selected: Date[];
  onSelect?: (
    selected: Date[],
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => void;
  min?: number;
  max?: number;
}
/**
 * The props when the multiple selection is optional.
 *
 * @group Props
 */
export interface PropsMulti {
  mode: "multiple";
  required?: false | undefined;
  selected?: Date[] | undefined;
  onSelect?: (
    selected: Date[] | undefined,
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => void;
  min?: number;
  max?: number;
}
/**
 * The props when the range selection is required.
 *
 * @group Props
 */
export interface PropsRangeRequired {
  mode: "range";
  required: true;
  selected: DateRange;
  onSelect?: (
    selected: DateRange,
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => void;
  min?: number;
  max?: number;
}
/**
 * The props when the range selection is optional.
 *
 * @group Props
 */
export interface PropsRange {
  mode: "range";
  required?: false | undefined;
  selected?: DateRange | undefined;
  onSelect?: (
    selected: DateRange | undefined,
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => void | undefined;
  min?: number;
  max?: number;
}
