import type { KeyboardEvent, MouseEvent } from "react";

import type { Locale } from "date-fns/types";

import * as components from "../components/custom-components";

import type {
  DayFocusEventHandler,
  DayKeyboardEventHandler,
  DayMouseEventHandler,
  DayPointerEventHandler,
  DayTouchEventHandler,
  MonthChangeEventHandler,
  WeekNumberClickEventHandler,
} from "./events";
import type { Formatters } from "./formatters";
import type { Labels } from "./labels";
import type { DateRange, Matcher } from "./matchers";
import type {
  Modifiers,
  ModifiersClassNames,
  ModifiersStyles,
} from "./modifiers";
import type { ClassNames, Styles } from "./ui";

/**
 * The base props for the {@link DayPicker} component.
 *
 * These props are used to change the navigation, the styling and the behavior
 * of the calendar.
 */
export interface PropsBase {
  /** The CSS class to add to the container element. */
  className?: string;
  /**
   * Change the class names used by DayPicker.
   *
   * Use this prop when you need to change the default class names — for example
   * when using CSS modules.
   */
  classNames?: Partial<ClassNames>;
  /** Change the class name for the day matching the `modifiers`. */
  modifiersClassNames?: ModifiersClassNames;

  /** Style to apply to the container element. */
  style?: React.CSSProperties;
  /** Change the inline styles of the HTML elements. */
  styles?: Partial<Styles>;
  /** Change the inline style for the day matching the `modifiers`. */
  modifiersStyles?: ModifiersStyles;

  /**
   * A unique id to replace the random generated ids – used by DayPicker for
   * accessibility.
   */
  id?: string;

  /**
   * The initial month to show in the calendar. Use this prop to let DayPicker
   * control the current month. If you need to set the month programmatically,
   * use `month` and `onMonthChange`.
   *
   * @defaultValue The current month
   */
  defaultMonth?: Date;
  /**
   * The month displayed in the calendar.
   *
   * As opposed to `PropsBase.defaultMonth}, use this prop with
   * `PropsBase.onMonthChange} to change the month programmatically.
   */
  month?: Date;

  /**
   * The number of displayed months.
   *
   * @defaultValue 1
   */
  numberOfMonths?: number;
  /** The earliest day to start the month navigation. */
  fromDate?: Date;
  /** The latest day to end the month navigation. */
  toDate?: Date;
  /** The earliest month to start the month navigation. */
  fromMonth?: Date;
  /** The latest month to end the month navigation. */
  toMonth?: Date;
  /** The earliest year to start the month navigation. */
  fromYear?: number;
  /** The latest year to end the month navigation. */
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
   * - `true`: display the dropdowns for both month and year.
   * - `month`: display the dropdown for the month.
   * - `year`: display the dropdown for the year.
   * - `false`: hide the dropdowns.
   *
   * **Note:** showing the dropdown will default {@link fromYear} to the 100
   * years ago, and {@link toYear} to the current year.
   */
  dropdownNavigation?: boolean | "month" | "year";

  /**
   * Display always 6 weeks per each month, regardless the month’s number of
   * weeks. Weeks will be filled with the days from the next month.
   */
  fixedWeeks?: boolean;
  /** Hide the row displaying the weekday row header. */
  hideWeekdayRow?: boolean;
  /** Show the outside days (days falling in the next or the previous month). */
  showOutsideDays?: boolean;
  /**
   * Show the week numbers column. Weeks are numbered according to the local
   * week index.
   *
   * - To use ISO week numbering, use the `ISOWeek` prop.
   * - To change how the week numbers are displayed, use the `Formatters` prop.
   */
  showWeekNumber?: boolean;

  /**
   * Use ISO week dates instead of the locale setting. Setting this prop will
   * ignore `weekStartsOn` and `firstWeekContainsDate`.
   *
   * @defaultValue falses
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   */
  ISOWeek?: boolean;

  /** Change the components used for rendering the calendar elements. */
  components?: CustomComponents;

  /** Content to add to the table footer element. */
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
  onDayClick?: DayMouseEventHandler;

  /** Event handler when a day is focused. */
  onDayFocus?: DayFocusEventHandler;

  /** Event handler when a day is blurred. */
  onDayBlur?: DayFocusEventHandler;

  /** Event handler when the mouse enters a day. */
  onDayMouseEnter?: DayMouseEventHandler;

  /** Event handler when the mouse leaves a day. */
  onDayMouseLeave?: DayMouseEventHandler;

  /** Event handler when a key is pressed on a day. */
  onDayKeyDown?: DayKeyboardEventHandler;

  /** Event handler when a key is released on a day. */
  onDayKeyUp?: DayKeyboardEventHandler;

  /** Event handler when a key is pressed and released on a day. */
  onDayKeyPress?: DayKeyboardEventHandler;

  /** Event handler when a pointer enters a day. */
  onDayPointerEnter?: DayPointerEventHandler;

  /** Event handler when a pointer leaves a day. */
  onDayPointerLeave?: DayPointerEventHandler;

  /** Event handler when a touch is cancelled on a day. */
  onDayTouchCancel?: DayTouchEventHandler;

  /** Event handler when a touch ends on a day. */
  onDayTouchEnd?: DayTouchEventHandler;

  /** Event handler when a touch moves on a day. */
  onDayTouchMove?: DayTouchEventHandler;

  /** Event handler when a touch starts on a day. */
  onDayTouchStart?: DayTouchEventHandler;

  /** Event handler when the next month button is clicked. */
  onNextClick?: MonthChangeEventHandler;

  /** Event handler when the previous month button is clicked. */
  onPrevClick?: MonthChangeEventHandler;

  /**
   * Event handler when a week number is clicked. Requires {@link showWeekNumber}
   * to be set.
   */
  onWeekNumberClick?: WeekNumberClickEventHandler;

  /* DEPRECATED PROPS */

  /**
   * Change the layout of the caption.
   *
   * - `buttons`: display prev/right buttons
   * - `dropdown`: display dropdowns to change the month and the year
   *
   * **Note:** the `dropdown` layout is available only when `fromDate`,
   * `fromMonth` or`fromYear` and `toDate`, `toMonth` or `toYear` are set.
   *
   * @deprecated To show the dropdowns, use {@link dropdownNavigation}. To hide
   *   the navigation buttons, set {@link hideNavigation}.
   * @defaultValue buttons
   */
  captionLayout?: CaptionLayout;
}

/** The props for the single selection mode. */
export interface PropsSingle {
  /** Makes the selection required. */
  required?: boolean;
  /** The selected Date. */
  selected?: Selected<"single"> | undefined;
  /** The initially selected value when not controlled. */
  defaultSelected?: Selected<"single"> | undefined;
  /** The callback called when the user selects a day. */
  onSelect?: SelectHandler<"single"> | undefined;
}

/** The props for the multi selection mode. */
export interface PropsMulti {
  /** The selected dates. */
  selected?: Selected<"multi"> | undefined;
  /** The initially selected values when not controlled. */
  defaultSelected?: Selected<"multi"> | undefined;
  /** The callback called when the user selects a day. */
  onSelect?: SelectHandler<"multi"> | undefined;
  /** Makes the selection required. */
  required?: boolean;
  /** The minimum number of days that can be selected. */
  min?: number;
  /** The maximum number of days that can be selected. */
  max?: number;
}

/** The props for the range selection mode. */
export interface PropsRange {
  /** The selected range. */
  selected?: Selected<"range"> | undefined;
  /** The initially selected range when not controlled. */
  defaultSelected?: Selected<"range"> | undefined;
  /** The callback called when the user selects a day. */
  onSelect?: SelectHandler<"range"> | undefined;
  /** Makes the selection required. */
  required?: boolean;
  /** The minimum number of days that can be selected. */
  min?: number;
  /** The maximum number of days that can be selected. */
  max?: number;
}

/**
 * The components that can be changed using the {@link PropsBase.components}
 * components prop.
 */
export type CustomComponents = {
  [key in keyof typeof components]?: (typeof components)[key];
};

/**
 * The available selection modes.
 *
 * - `none` (default): no selection is allowed.
 * - `single`: only one day can be selected.
 * - `multi`: multiple days can be selected.
 * - `range`: a range of days can be selected.
 */
export type Mode = "none" | "single" | "multi" | "range";

/**
 * Set the layout of the caption.
 *
 * @deprecated Replaced by {@link PropsBase.dropdownNavigation} and
 *   {@link PropsBase.hideNavigation}.
 */
export type CaptionLayout = "dropdown" | "buttons" | "dropdown-buttons";

/** The selected value when in selection mode. */
export type Selected<T extends Mode> = T extends "single"
  ? Date
  : T extends "multi"
    ? Date[]
    : T extends "range"
      ? DateRange
      : undefined;

/** The callback called when the user select a days from the calendar. */
export type SelectHandler<T extends Mode> = (
  /** The new selected value. */
  selected: Selected<T>,
  /** The date that triggered the selection. */
  date: Date,
  /** The modifiers for the day that triggered the selection. */
  modifiers: Modifiers,
  /** The event that made the selection. */
  e: MouseEvent | KeyboardEvent,
) => void;
