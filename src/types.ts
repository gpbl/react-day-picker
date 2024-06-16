/* eslint-disable @typescript-eslint/ban-types */
import type {
  MouseEvent,
  FocusEvent,
  KeyboardEvent,
  TouchEvent,
  PointerEvent,
  CSSProperties,
  ReactNode
} from "react";

import type { Locale } from "date-fns";

import {
  UI,
  DayModifier,
  CalendarFlag,
  ChevronFlag,
  WeekNumberFlag,
  SelectionModifier
} from "./UI";
import { CalendarDay } from "./classes";
import * as components from "./components/custom-components";
import {
  formatCaption,
  formatDay,
  formatMonthCaption,
  formatMonthDropdown,
  formatWeekdayName,
  formatWeekNumber,
  formatYearCaption,
  formatYearDropdown
} from "./formatters";
import {
  labelDay,
  labelCaption,
  labelMonthDropdown,
  labelNext,
  labelPrevious,
  labelWeekday,
  labelWeekNumber,
  labelWeekNumberHeader,
  labelYearDropdown
} from "./labels";

export type SingleRequiredOnSelect = (
  selected: Selected<"single", true>,
  date: Date,
  modifiers: DayModifiers & SelectionModifier,
  e: MouseEvent | KeyboardEvent
) => void;

export type SingleOptionalOnSelect = (
  selected: Selected<"single", false>,
  date: Date,
  modifiers: DayModifiers & SelectionModifier,
  e: MouseEvent | KeyboardEvent
) => void;

export type MultiRequiredOnSelect = (
  selected: Selected<"multiple", true>,
  date: Date,
  modifiers: DayModifiers & SelectionModifier,
  e: MouseEvent | KeyboardEvent
) => void;

export type MultiOptionalOnSelect = (
  selected: Selected<"multiple", false>,
  date: Date,
  modifiers: DayModifiers & SelectionModifier,
  e: MouseEvent | KeyboardEvent
) => void;

export type RangeRequiredOnSelect = (
  selected: Selected<"range", true>,
  date: Date,
  modifiers: DayModifiers & SelectionModifier,
  e: MouseEvent | KeyboardEvent
) => void;

export type RangeOptionalOnSelect = (
  selected: Selected<"range", false>,
  date: Date,
  modifiers: DayModifiers & SelectionModifier,
  e: MouseEvent | KeyboardEvent
) => void;

export interface SingleRequiredProps {
  selected: Selected<"single", true>;
  defaultSelected?: Selected<"single", true>;
  onSelect?: SingleRequiredOnSelect;
  min?: number;
  max?: number;
}

export interface SingleOptionalProps {
  selected?: Selected<"single", false>;
  defaultSelected?: Selected<"single", false>;
  onSelect?: SingleOptionalOnSelect;
  min?: number;
  max?: number;
}

export interface MultiRequiredProps {
  selected: Selected<"multiple", true>;
  defaultSelected?: Selected<"multiple", true>;
  onSelect?: MultiRequiredOnSelect;
  min?: number;
  max?: number;
}

export interface MultiOptionalProps {
  selected?: Selected<"multiple", false>;
  defaultSelected?: Selected<"multiple", false>;
  onSelect?: MultiOptionalOnSelect;
  min?: number;
  max?: number;
}
export interface RangeRequiredProps {
  selected: Selected<"range", true>;
  defaultSelected?: Selected<"range", true>;
  onSelect?: RangeRequiredOnSelect;
  min?: number;
  max?: number;
}

export interface RangeOptionalProps {
  selected?: Selected<"range", false> | undefined;
  defaultSelected?: Selected<"range", false> | undefined;
  onSelect?: RangeOptionalOnSelect;
  min?: number;
  max?: number;
}

/**
 * Map the props for the selection modes.
 *
 * @template ModeType - The selection mode
 * @template IsRequired - Whether the selection is required
 */
export type ModeProps<ModeType extends Mode, isRequired extends boolean> = {
  single: isRequired extends true ? SingleRequiredProps : SingleOptionalProps;
  multiple: isRequired extends true ? MultiRequiredProps : MultiOptionalProps;
  range: isRequired extends true ? RangeRequiredProps : RangeOptionalProps;
}[ModeType];

/**
 * The props for the {@link DayPicker} component.
 *
 * @template ModeType - The selection mode
 * @template IsRequired - Whether the selection is required
 * @group Props
 */
export type DayPickerProps<
  ModeType extends Mode | undefined = undefined,
  IsRequired extends boolean = false
> = {
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
  style?: CSSProperties;
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
  footer?: ReactNode;
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
  onDayClick?: DayEventHandler<MouseEvent>;
  /** Event handler when a day is focused. */
  onDayFocus?: DayEventHandler<FocusEvent>;
  /** Event handler when a day is blurred. */
  onDayBlur?: DayEventHandler<FocusEvent>;
  /** Event handler when the mouse enters a day. */
  onDayMouseEnter?: DayEventHandler<MouseEvent>;
  /** Event handler when the mouse leaves a day. */
  onDayMouseLeave?: DayEventHandler<MouseEvent>;
  /** Event handler when a key is pressed on a day. */
  onDayKeyDown?: DayEventHandler<KeyboardEvent>;
  /** Event handler when a key is released on a day. */
  onDayKeyUp?: DayEventHandler<KeyboardEvent>;
  /** Event handler when a key is pressed and released on a day. */
  onDayKeyPress?: DayEventHandler<KeyboardEvent>;
  /** Event handler when a pointer enters a day. */
  onDayPointerEnter?: DayEventHandler<PointerEvent>;
  /** Event handler when a pointer leaves a day. */
  onDayPointerLeave?: DayEventHandler<PointerEvent>;
  /** Event handler when a touch is cancelled on a day. */
  onDayTouchCancel?: DayEventHandler<TouchEvent>;
  /** Event handler when a touch ends on a day. */
  onDayTouchEnd?: DayEventHandler<TouchEvent>;
  /** Event handler when a touch moves on a day. */
  onDayTouchMove?: DayEventHandler<TouchEvent>;
  /** Event handler when a touch starts on a day. */
  onDayTouchStart?: DayEventHandler<TouchEvent>;
  /** Event handler when the next month button is clicked. */
  onNextClick?: MonthChangeEventHandler;
  /** Event handler when the previous month button is clicked. */
  onPrevClick?: MonthChangeEventHandler;
  /**
   * Event handler when a week number is clicked. Requires {@link showWeekNumber}
   * to be set.
   */
  onWeekNumberClick?: WeekNumberMouseEventHandler;

  /**
   * Toggle the selection mode.
   *
   * @see https://react-day-picker.js.org/next/using-daypicker/selection-modes
   */
  mode?: ModeType;

  /** When a selection mode is set, makes the selection required. */
  required?: IsRequired;
} & (ModeType extends Mode ? ModeProps<ModeType, IsRequired> : {});

/**
 * Selection modes supported by DayPicker.
 *
 * - `single`: use DayPicker to select single days.
 * - `multiple`: allow selecting multiple days.
 * - `range`: use DayPicker to select a range of days
 *
 * @see https://react-day-picker.js.org/next/using-daypicker/selection-modes
 */
export type Mode = "single" | "multiple" | "range";

/** The selected value when in selection mode. */
export type Selected<
  ModeType extends Mode,
  IsRequired extends boolean = false
> = IsRequired extends true
  ? {
      single: Date;
      multiple: Date[];
      range: DateRange;
    }[ModeType]
  :
      | {
          single: Date;
          multiple: Date[];
          range: DateRange;
        }[ModeType]
      | undefined;

/**
 * The components that can be changed using the `components` prop.
 *
 * @see https://github.com/gpbl/react-day-picker/blob/main/src/components/custom-components.ts
 */
export type CustomComponents = {
  [key in keyof typeof components]?: (typeof components)[key];
};

/** Represent a map of formatters used to render localized content. */
export type Formatters = {
  /** Format the caption of a month grid. */
  formatCaption: typeof formatCaption;
  /** @deprecated Use {@link Formatters.formatCaption} instead. */
  formatMonthCaption: typeof formatMonthCaption;
  /** Format the label in the month dropdown. */
  formatMonthDropdown: typeof formatMonthDropdown;
  /** @deprecated Use {@link Formatters.formatYearDropdown} instead. */
  formatYearCaption: typeof formatYearCaption;
  /** Format the label in the year dropdown. */
  formatYearDropdown: typeof formatYearDropdown;
  /** Format the day in the day cell. */
  formatDay: typeof formatDay;
  /** Format the week number. */
  formatWeekNumber: typeof formatWeekNumber;
  /** Format the week day name in the header */
  formatWeekdayName: typeof formatWeekdayName;
};

/** Map of functions to translate ARIA labels for the relative elements. */
export type Labels = {
  /** Return the label for the month dropdown. */
  labelCaption: typeof labelCaption;
  /** Return the label for the month dropdown. */
  labelMonthDropdown: typeof labelMonthDropdown;
  /** Return the label for the year dropdown. */
  labelYearDropdown: typeof labelYearDropdown;
  /** Return the label for the next month button. */
  labelNext: typeof labelNext;
  /** Return the label for the previous month button. */
  labelPrevious: typeof labelPrevious;
  /** Return the label for the day cell. */
  labelDay: typeof labelDay;
  /** Return the label for the weekday. */
  labelWeekday: typeof labelWeekday;
  /** Return the label for the week number. */
  labelWeekNumber: typeof labelWeekNumber;
  /**
   * Return the label for the column of the week number.
   *
   * @since 9.0.0
   */
  labelWeekNumberHeader: typeof labelWeekNumberHeader;
};

/**
 * A value or a function that matches a specific day.
 *
 * Matchers can be of different types:
 *
 * ```tsx
 * // will always match the day
 * const booleanMatcher: Matcher = true;
 *
 * // will match the today's date
 * const dateMatcher: Matcher = new Date();
 *
 * // will match the days in the array
 * const arrayMatcher: Matcher = [
 *   new Date(2019, 1, 2),
 *   new Date(2019, 1, 4)
 * ];
 *
 * // will match days after the 2nd of February 2019
 * const afterMatcher: DateAfter = { after: new Date(2019, 1, 2) };
 * // will match days before the 2nd of February 2019 }
 * const beforeMatcher: DateBefore = { before: new Date(2019, 1, 2) };
 *
 * // will match Sundays
 * const dayOfWeekMatcher: DayOfWeek = {
 *   dayOfWeek: 0
 * };
 *
 * // will match the included days, except the two dates
 * const intervalMatcher: DateInterval = {
 *   after: new Date(2019, 1, 2),
 *   before: new Date(2019, 1, 5)
 * };
 *
 * // will match the included days, including the two dates
 * const rangeMatcher: DateRange = {
 *   from: new Date(2019, 1, 2),
 *   to: new Date(2019, 1, 5)
 * };
 *
 * // will match when the function return true
 * const functionMatcher: Matcher = (day: Date) => {
 *   return day.getMonth() === 2; // match when month is March
 * };
 * ```
 */
export type Matcher =
  | boolean
  | ((date: Date) => boolean)
  | Date
  | Date[]
  | DateRange
  | DateBefore
  | DateAfter
  | DateInterval
  | DayOfWeek;

/**
 * A matcher to match a day falling after the specified date, with the date not
 * included.
 */
export type DateAfter = { after: Date };

/**
 * A matcher to match a day falling before the specified date, with the date not
 * included.
 */
export type DateBefore = { before: Date };

/**
 * A matcher to match a day falling before and/or after two dates, where the
 * dates are not included.
 */
export type DateInterval = { before: Date; after: Date };

/**
 * A matcher to match a range of dates. The range can be open. Differently from
 * {@link DateInterval}, the dates here are included.
 */
export type DateRange = { from: Date | undefined; to?: Date | undefined };

/**
 * A matcher to match a date being one of the specified days of the week (`0-6`,
 * where `0` is Sunday).
 */
export type DayOfWeek = { dayOfWeek: number[] };

/** A record with `data-*` attributes passed to `<DayPicker />`. */
export type DataAttributes = Record<`data-${string}`, unknown>;

/**
 * The event handler triggered when interacting with a day.
 *
 * @template T - The event type that triggered the day event.
 */
export type DayEventHandler<T> = (
  /** The date that has triggered the event. */
  date: Date,
  /** The modifiers belonging to the date. */
  modifiers: DayModifiers,
  /** The DOM event that triggered this event. */
  e: T
) => void;

/** The event handler when a month is changed in the calendar. */
export type MonthChangeEventHandler = (month: Date) => void;

/** The event handler when the week number is clicked. */
export type WeekNumberMouseEventHandler = (
  /** The week number that has been clicked. */
  weekNumber: number,
  /** The dates in the clicked week. */
  dates: Date[],
  /** The mouse event that triggered this event. */
  e: MouseEvent
) => void;

/** Maps {@link UI} elements to their CSS properties. */
export type Styles = {
  [uiElement in UI]: CSSProperties | undefined;
};

/**
 * Maps {@link UI}, {@link DayModifier}, {@link CalendarFlag}, {@link ChevronFlag},
 * and {@link WeekNumberFlag} elements to their class names.
 */
export type ClassNames = {
  [key in
    | UI
    | SelectionModifier
    | DayModifier
    | CalendarFlag
    | ChevronFlag
    | WeekNumberFlag]: string;
};

/** The modifiers that are internally used by DayPicker. */
export type InternalModifier = keyof typeof DayModifier;

/** The modifiers that are matching the day in the calendar. */
export type DayModifiers = Record<string, boolean> &
  Record<InternalModifier, boolean>;

/** The style to apply to each day element matching a modifier. */
export type ModifiersStyles = Record<string, CSSProperties> &
  Partial<Record<InternalModifier, CSSProperties>>;

/** The classnames to assign to each day element matching a modifier. */
export type ModifiersClassNames = Record<string, string> &
  Partial<Record<InternalModifier, string>>;

/**
 * The props that have been deprecated since version 9.0.0.
 *
 * @since 9.0.0
 * @see https://react-day-picker.js.org/next/upgrading
 */
export type V9DeprecatedProps =
  /** Use `hidden` prop instead. */
  | "fromDate"
  /** Use `hidden` prop instead. */
  | "toDate"
  /** Use `startMonth` instead. */
  | "fromMonth"
  /** Use `endMonth` instead. */
  | "toMonth"
  /** Use `startMonth` instead. */
  | "fromYear"
  /** Use `endMonth` instead. */
  | "toYear";

export type MoveFocusDir = "after" | "before";

export type MoveFocusBy =
  | "day"
  | "week"
  | "startOfWeek"
  | "endOfWeek"
  | "month"
  | "year";
