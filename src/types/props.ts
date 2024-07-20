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
    | { mode?: undefined; required?: undefined }
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
   *
   * @see https://daypicker.dev/next/docs/selection-modes
   */
  mode?: Mode | undefined;

  /** Class name to add to the root element */
  className?: string;
  /**
   * Change the class names used by DayPicker.
   *
   * Use this prop when you need to change the default class names — for example
   * when importing the style via CSS modules or when using a CSS framework.
   *
   * @see https://daypicker.dev/next/docs/styling
   */
  classNames?: Partial<ClassNames>;
  /**
   * Change the class name for the day matching the `modifiers`.
   *
   * @see https://daypicker.dev/next/guides/custom-modifiers
   */
  modifiersClassNames?: ModifiersClassNames;
  /** Style to apply to the root element. */
  style?: React.CSSProperties;
  /**
   * Change the inline styles of the HTML elements.
   *
   * @see https://daypicker.dev/next/docs/styling
   */
  styles?: Partial<Styles>;
  /**
   * Change the class name for the day matching the {@link modifiers}.
   *
   * @see https://daypicker.dev/next/guides/custom-modifiers
   */
  modifiersStyles?: ModifiersStyles;
  /** A unique id to add to the root element. */
  id?: string;
  /**
   * The initial month to show in the calendar.
   *
   * Use this prop to let DayPicker control the current month. If you need to
   * set the month programmatically, use {@link month} and {@link onMonthChange}.
   *
   * @defaultValue The current month
   * @see https://daypicker.dev/next/docs/navigation
   */
  defaultMonth?: Date;
  /**
   * The month displayed in the calendar.
   *
   * As opposed to `defaultMonth`, use this prop with `onMonthChange` to change
   * the month programmatically.
   *
   * @see https://daypicker.dev/next/docs/navigation
   */
  month?: Date;
  /**
   * The number of displayed months.
   *
   * @defaultValue 1
   * @see https://daypicker.dev/next/docs/customization#multiplemonths
   */
  numberOfMonths?: number;
  /**
   * The earliest month to start the month navigation.
   *
   * @since 9.0.0
   * @see https://daypicker.dev/next/docs/navigation#start-and-end-dates
   */
  startMonth?: Date | undefined;
  /**
   * @private
   * @deprecated This prop has been removed. Use `hidden={{ before: date }}`
   *   instead.
   * @see https://daypicker.dev/next/docs/navigation#start-and-end-dates
   */
  fromDate?: Date | undefined;
  /**
   * @private
   * @deprecated This prop has been renamed to `startMonth`.
   * @see https://daypicker.dev/next/docs/navigation#start-and-end-dates
   */
  fromMonth?: Date | undefined;
  /**
   * @private
   * @deprecated Use `startMonth` instead. E.g. `startMonth={new Date(year,
   *   0)}`.
   * @see https://daypicker.dev/next/docs/navigation#start-and-end-dates
   */
  fromYear?: number | undefined;

  /**
   * The latest month to end the month navigation.
   *
   * @since 9.0.0
   * @see https://daypicker.dev/next/docs/navigation#start-and-end-dates
   */
  endMonth?: Date;
  /**
   * @private
   * @deprecated This prop has been removed. Use `hidden={{ after: date }}`
   *   instead.
   * @see https://daypicker.dev/next/docs/navigation#start-and-end-dates
   */
  toDate?: Date;
  /**
   * @private
   * @deprecated This prop has been renamed to `endMonth`.
   * @see https://daypicker.dev/next/docs/navigation#start-and-end-dates
   */
  toMonth?: Date;
  /**
   * @private
   * @deprecated Use `endMonth` instead. E.g. `endMonth={new Date(year, 0)}`.
   * @see https://daypicker.dev/next/docs/navigation#start-and-end-dates
   */
  toYear?: number;

  /**
   * Paginate the month navigation displaying the `numberOfMonths` at time.
   *
   * @see https://daypicker.dev/next/docs/customization#multiplemonths
   */
  pagedNavigation?: boolean;
  /**
   * Render the months in reversed order (when {@link numberOfMonths} is set) to
   * display the most recent month first.
   *
   * @see https://daypicker.dev/next/docs/customization#multiplemonths
   */
  reverseMonths?: boolean;
  /**
   * Hide the navigation buttons. This prop won't disable the navigation: to
   * disable the navigation, use {@link disableNavigation}.
   *
   * @since 9.0.0
   * @see https://daypicker.dev/next/docs/navigation#hidenavigation
   */
  hideNavigation?: boolean;
  /**
   * Disable the navigation between months. This prop won't hide the navigation:
   * to hide the navigation, use {@link hideNavigation}.
   *
   * @see https://daypicker.dev/next/docs/navigation#disablenavigation
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
   *
   * @see https://daypicker.dev/next/docs/customization#caption-layouts
   */
  captionLayout?: "label" | "dropdown" | "dropdown-months" | "dropdown-years";
  /**
   * Display always 6 weeks per each month, regardless the month’s number of
   * weeks. Weeks will be filled with the days from the next month.
   *
   * @see https://daypicker.dev/next/docs/customization#fixed-weeks
   */
  fixedWeeks?: boolean;
  /**
   * Hide the row displaying the weekday row header.
   *
   * @since 9.0.0
   */
  hideWeekdays?: boolean;
  /**
   * Show the outside days (days falling in the next or the previous month).
   *
   * @see https://daypicker.dev/next/docs/customization#outside-days
   */
  showOutsideDays?: boolean;
  /**
   * Show the week numbers column. Weeks are numbered according to the local
   * week index.
   *
   * - To use ISO week numbering, use the `ISOWeek` prop.
   * - To change how the week numbers are displayed, use the `formatters` prop.
   *
   * @see https://daypicker.dev/next/docs/customization#showweeknumber
   */
  showWeekNumber?: boolean;
  /**
   * Use ISO week dates instead of the locale setting. Setting this prop will
   * ignore `weekStartsOn` and `firstWeekContainsDate`.
   *
   * Use the
   * [react-day-picker/utc](https://daypicker.dev/next/docs/localization#utc-dates)
   * to set the calendar to UTC.
   *
   * @see https://daypicker.dev/next/docs/localization#iso-week-dates
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   */
  ISOWeek?: boolean;
  /**
   * Change the components used for rendering the calendar elements.
   *
   * @see https://daypicker.dev/next/guides/custom-components
   */
  components?: Partial<CustomComponents>;
  /**
   * Add a footer to the calendar, acting as live region.
   *
   * Use this prop to communicate the calendar's status to screen readers.
   * Prefer strings over complex UI elements.
   *
   * @see https://daypicker.dev/next/docs/accessibility#footer
   */
  footer?: React.ReactNode | string;
  /**
   * When a selection mode is set, DayPicker will focus the first selected day
   * (if set) or the today's date (if not disabled).
   *
   * Use this prop when you need to focus DayPicker after a user actions, for
   * improved accessibility.
   *
   * @see https://daypicker.dev/next/docs/accessibility#autofocus
   */
  autoFocus?: boolean;
  /**
   * Apply the `disabled` modifier to the matching days.
   *
   * @see https://daypicker.dev/next/docs/selection-modes#disabling-dates
   */
  disabled?: Matcher | Matcher[] | undefined;
  /**
   * Apply the `hidden` modifier to the matching days. Will hide them from the
   * calendar.
   *
   * @see https://daypicker.dev/next/guides/custom-modifiers#hidden-modifier
   */
  hidden?: Matcher | Matcher[] | undefined;
  /**
   * The today’s date. Default is the current date. This date will get the
   * `today` modifier to style the day.
   *
   * @see https://daypicker.dev/next/guides/custom-modifiers#today-modifier
   */
  today?: Date;
  /**
   * Add modifiers to the matching days.
   *
   * @see https://daypicker.dev/next/guides/custom-modifiers
   */
  modifiers?: Record<string, Matcher | Matcher[] | undefined> | undefined;
  /**
   * Labels creators to override the defaults. Use this prop to customize the
   * aria-label attributes in DayPicker.
   *
   * @see https://daypicker.dev/next/docs/translation#aria-labels
   */
  labels?: Partial<Labels>;
  /**
   * Formatters used to format dates to strings. Use this prop to override the
   * default functions.
   *
   * @see https://daypicker.dev/next/docs/translation#custom-formatters
   */
  formatters?: Partial<Formatters>;
  /**
   * The text direction of the calendar. Use `ltr` for left-to-right (default)
   * or `rtl` for right-to-left.
   *
   * @see https://daypicker.dev/next/docs/translation#rtl-text-direction
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
   * @see https://daypicker.dev/next/docs/localization
   */
  locale?: Locale | undefined;
  /**
   * The index of the first day of the week (0 - Sunday). Overrides the locale's
   * one.
   *
   * @see https://daypicker.dev/next/docs/localization#first-date-of-the-week
   */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  /**
   * The day of January, which is always in the first week of the year.
   *
   * @see https://daypicker.dev/next/docs/localization#first-week-contains-date
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

  /**
   * Event fired when the user navigates between months.
   *
   * @see https://daypicker.dev/next/docs/navigation#onmonthchange
   */
  onMonthChange?: MonthChangeEventHandler;

  /**
   * Event handler when the next month button is clicked.
   *
   * @see https://daypicker.dev/next/docs/navigation
   */
  onNextClick?: MonthChangeEventHandler;
  /**
   * Event handler when the previous month button is clicked.
   *
   * @see https://daypicker.dev/next/docs/navigation
   */
  onPrevClick?: MonthChangeEventHandler;
  /**
   * Event handler when a week number is clicked
   *
   * @private
   * @deprecated Use a custom `WeekNumber` component instead.
   * @see http://daypicker.dev/next/docs/customization#showweeknumber
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onWeekNumberClick?: any;

  /** Event handler when a day is clicked. */
  onDayClick?: DayEventHandler<React.MouseEvent>;
  /** Event handler when a day is focused. */
  onDayFocus?: DayEventHandler<React.FocusEvent>;
  /** Event handler when a day is blurred. */
  onDayBlur?: DayEventHandler<React.FocusEvent>;
  /** Event handler when a key is pressed on a day. */
  onDayKeyDown?: DayEventHandler<React.KeyboardEvent>;

  /**
   * Replace the default date library with a custom one.
   *
   * @private
   * @since 9.0.0
   * @experimental
   */
  dateLib?: Partial<DateLib> | undefined;

  /**
   * @private
   * @deprecated Use a custom `DayButton` component instead.
   */
  onDayKeyUp?: DayEventHandler<React.KeyboardEvent>;
  /**
   * @private
   * @deprecated Use a custom `DayButton` component instead.
   */
  onDayKeyPress?: DayEventHandler<React.KeyboardEvent>;
  /**
   * @private
   * @deprecated Use a custom `DayButton` component instead.
   */
  onDayPointerEnter?: DayEventHandler<React.PointerEvent>;
  /**
   * @private
   * @deprecated Use a custom `DayButton` component instead.
   */
  onDayPointerLeave?: DayEventHandler<React.PointerEvent>;
  /**
   * @private
   * @deprecated Use a custom `DayButton` component instead.
   */
  onDayTouchCancel?: DayEventHandler<React.TouchEvent>;
  /**
   * @private
   * @deprecated Use a custom `DayButton` component instead.
   */
  onDayTouchEnd?: DayEventHandler<React.TouchEvent>;
  /**
   * @private
   * @deprecated Use a custom `DayButton` component instead.
   */
  onDayTouchMove?: DayEventHandler<React.TouchEvent>;
  /**
   * @private
   * @deprecated Use a custom `DayButton` component instead.
   */
  onDayTouchStart?: DayEventHandler<React.TouchEvent>;
}
/**
 * The props when the single selection is required.
 *
 * @group Props
 * @see https://daypicker.dev/next/docs/selection-modes#single-mode
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
 * @see https://daypicker.dev/next/docs/selection-modes#single-mode
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
 * @see https://daypicker.dev/next/docs/selection-modes#multiple-mode
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
 * @see https://daypicker.dev/next/docs/selection-modes#multiple-mode
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
 * @see https://daypicker.dev/next/docs/selection-modes#range-mode
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
 * @see https://daypicker.dev/next/docs/selection-modes#range-mode
 */
export interface PropsRange {
  mode: "range";
  required?: false | undefined;
  selected?: DateRange | undefined;
  disabled?: Matcher | Matcher[] | undefined;
  onSelect?: (
    selected: DateRange | undefined,
    triggerDate: Date,
    modifiers: Modifiers,
    e: React.MouseEvent | React.KeyboardEvent
  ) => void | undefined;
  min?: number;
  max?: number;
}
