import type { KeyboardEvent, MouseEvent } from 'react';

import type { Locale } from 'date-fns/types';

import * as components from '../components';
import type {
  DayFocusEventHandler,
  DayKeyboardEventHandler,
  DayMouseEventHandler,
  DayPointerEventHandler,
  DayTouchEventHandler,
  MonthChangeEventHandler,
  WeekNumberClickEventHandler
} from './events';
import type { Formatters } from './formatters';
import type { Labels } from './labels';
import type { DateRange, Matcher } from './matchers';
import type {
  Modifiers,
  ModifiersClassNames,
  ModifiersStyles
} from './modifiers';
import type { ClassNames, Styles } from './ui';

/**
 * The shared props when {@link DayPicker} is in selection mode.
 *
 * @category Props
 */
export interface PropsSelection<T extends Mode> {
  mode?: T | undefined;
  selected?: Selected<T> | undefined;
  /** The initially selected value when not controlled. */
  defaultSelected?: Selected<T> | undefined;
  /** The callback called when the user selects a day. */
  onSelect?: SelectHandler<T> | undefined;
}

/**
 * The base props for the {@link DayPicker} component for changing the
 * navigation, the styling and the behavior of the calendar.
 *
 * @category Props
 */
export interface PropsBase {
  /**
   * The CSS class to add to the container element.
   *
   * @topic styling
   */
  className?: string;
  /**
   * Change the class names used by DayPicker.
   *
   * Use this prop when you need to change the default class names — for example
   * when using CSS modules.
   *
   * @topic styling
   */
  classNames?: Partial<ClassNames>;
  /**
   * Change the class name for the day matching the `modifiers`.
   *
   * @topic modifiers
   */
  modifiersClassNames?: ModifiersClassNames;

  /**
   * Style to apply to the container element.
   *
   * @topic styling
   */
  style?: React.CSSProperties;
  /**
   * Change the inline styles of the HTML elements.
   *
   * @topic styling
   */
  styles?: Partial<Styles>;
  /**
   * Change the inline style for the day matching the `modifiers`.
   *
   * @topic modifiers
   */
  modifiersStyles?: ModifiersStyles;

  /**
   * A unique id to replace the random generated ids – used by DayPicker for
   * accessibility.
   *
   * @topic attributes
   */
  id?: string;

  /**
   * The initial month to show in the calendar. Use this prop to let DayPicker
   * control the current month. If you need to set the month programmatically,
   * use `month` and `onMonthChange`.
   *
   * @defaultValue The current month
   * @topic navigation
   */
  defaultMonth?: Date;
  /**
   * The month displayed in the calendar.
   *
   * As opposed to `PropsBase.defaultMonth}, use this prop with
   * `PropsBase.onMonthChange} to change the month programmatically.
   *
   * @topic navigation
   */
  month?: Date;

  /**
   * The number of displayed months.
   *
   * @defaultValue 1
   * @topic navigation
   */
  numberOfMonths?: number;
  /**
   * The earliest day to start the month navigation.
   *
   * @topic navigation
   */
  fromDate?: Date;
  /**
   * The latest day to end the month navigation.
   *
   * @topic navigation
   */
  toDate?: Date;
  /**
   * The earliest month to start the month navigation.
   *
   * @topic navigation
   */
  fromMonth?: Date;
  /**
   * The latest month to end the month navigation.
   *
   * @topic navigation
   */
  toMonth?: Date;
  /**
   * The earliest year to start the month navigation.
   *
   * @topic navigation
   */
  fromYear?: number;
  /**
   * The latest year to end the month navigation.
   *
   * @topic navigation
   */
  toYear?: number;
  /**
   * Paginate the month navigation displaying the `numberOfMonths` at time.
   *
   * @topic navigation
   */
  pagedNavigation?: boolean;
  /**
   * Render the months in reversed order (when {@link numberOfMonths} is set) to
   * display the most recent month first.
   *
   * @topic navigation
   */
  reverseMonths?: boolean;
  /**
   * Hide the navigation buttons. This prop won't disable the navigation: to
   * disable the navigation, use {@link disableNavigation}.
   *
   * @topic navigation
   */
  hideNavigation?: boolean;
  /**
   * Disable the navigation between months. This prop won't hide the navigation:
   * to hide the navigation, use {@link hideNavigation}.
   *
   * @topic navigation
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
   *
   * @topic navigation
   */
  dropdownNavigation?: boolean | 'month' | 'year';

  /**
   * Display always 6 weeks per each month, regardless the month’s number of
   * weeks. Weeks will be filled with the days from the next month.
   *
   * @topic options
   */
  fixedWeeks?: boolean;
  /**
   * Hide the row displaying the weekday row header.
   *
   * @topic options
   */
  hideWeekdayRow?: boolean;
  /**
   * Show the outside days (days falling in the next or the previous month).
   *
   * @topic options
   */
  showOutsideDays?: boolean;
  /**
   * Show the week numbers column. Weeks are numbered according to the local
   * week index.
   *
   * - To use ISO week numbering, use the `ISOWeek` prop.
   * - To change how the week numbers are displayed, use the `Formatters` prop.
   *
   * @topic options
   */
  showWeekNumber?: boolean;

  /**
   * Use ISO week dates instead of the locale setting. Setting this prop will
   * ignore `weekStartsOn` and `firstWeekContainsDate`.
   *
   * @defaultValue false
   * @topic date
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   */
  ISOWeek?: boolean;

  /**
   * Change the components used for rendering the calendar elements.
   *
   * @topic custom-components
   */
  components?: CustomComponents;

  /**
   * Content to add to the table footer element.
   *
   * @topic options
   */
  footer?: React.ReactNode;

  /**
   * When a selection mode is set, DayPicker will focus the first selected day
   * (if set) or the today's date (if not disabled).
   *
   * Use this prop when you need to focus DayPicker after a user actions, for
   * improved accessibility.
   *
   * @topic options
   */
  autoFocus?: boolean;
  /**
   * Apply the `disabled` modifier to the matching days.
   *
   * @topic selection
   */
  disabled?: Matcher | Matcher[] | undefined;
  /**
   * Apply the `hidden` modifier to the matching days. Will hide them from the
   * calendar.
   *
   * @topic selection
   */
  hidden?: Matcher | Matcher[] | undefined;

  /**
   * The today’s date. Default is the current date. This date will get the
   * `today` modifier to style the day.
   *
   * @topic date
   */
  today?: Date;

  /**
   * Add modifiers to the matching days.
   *
   * @topic modifiers
   */
  modifiers?: Record<string, Matcher | Matcher[] | undefined> | undefined;

  /**
   * Labels creators to override the defaults. Use this prop to customize the
   * aria-label attributes in DayPicker.
   *
   * @topic internationalization
   */
  labels?: Partial<Labels>;

  /**
   * Formatters used to format dates to strings. Use this prop to override the
   * default functions.
   *
   * @topic internationalization
   */
  formatters?: Partial<Formatters>;

  /**
   * The text direction of the calendar. Use `ltr` for left-to-right (default)
   * or `rtl` for right-to-left.
   *
   * @topic internationalization
   */
  dir?: HTMLDivElement['dir'];

  /**
   * A cryptographic nonce ("number used once") which can be used by Content
   * Security Policy for the inline `style` attributes.
   *
   * @topic attributes
   */
  nonce?: HTMLDivElement['nonce'];

  /**
   * Add a `title` attribute to the container element.
   *
   * @topic attributes
   */
  title?: HTMLDivElement['title'];

  /**
   * Add the language tag to the container element.
   *
   * @topic internationalization
   */
  lang?: HTMLDivElement['lang'];

  /**
   * The date-fns locale object used to localize dates.
   *
   * @defaultValue en-US
   * @topic internationalization
   * @see https://date-fns.org/docs/Locale
   */
  locale?: Locale | undefined;
  /**
   * The index of the first day of the week (0 - Sunday). Overrides the locale's
   * one.
   *
   * @topic date
   */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  /**
   * The day of January, which is always in the first week of the year.
   *
   * @topic date
   * @see https://date-fns.org/docs/getWeek
   * @see https://en.wikipedia.org/wiki/Week#Numbering
   */
  firstWeekContainsDate?: 1 | 4;
  /**
   * Enable `DD` and `DDDD` for week year tokens when formatting or parsing
   * dates.
   *
   * @topic date
   * @see https://date-fns.org/docs/Unicode-Tokens
   */
  useAdditionalWeekYearTokens?: boolean | undefined;
  /**
   * Enable `YY` and `YYYY` for day of year tokens when formatting or parsing
   * dates.
   *
   * @topic date
   * @see https://date-fns.org/docs/Unicode-Tokens
   */
  useAdditionalDayOfYearTokens?: boolean | undefined;

  /* EVENT HANDLERS */
  /**
   * Event fired when the user navigates between months.
   *
   * @topic navigation
   */
  onMonthChange?: MonthChangeEventHandler;

  /**
   * Event handler when a day is clicked.
   *
   * @topic events
   */
  onDayClick?: DayMouseEventHandler;

  /**
   * Event handler when a day is focused.
   *
   * @topic events
   */
  onDayFocus?: DayFocusEventHandler;

  /**
   * Event handler when a day is blurred.
   *
   * @topic events
   */
  onDayBlur?: DayFocusEventHandler;

  /**
   * Event handler when the mouse enters a day.
   *
   * @topic events
   */
  onDayMouseEnter?: DayMouseEventHandler;

  /**
   * Event handler when the mouse leaves a day.
   *
   * @topic events
   */
  onDayMouseLeave?: DayMouseEventHandler;

  /**
   * Event handler when a key is pressed on a day.
   *
   * @topic events
   */
  onDayKeyDown?: DayKeyboardEventHandler;

  /**
   * Event handler when a key is released on a day.
   *
   * @topic events
   */
  onDayKeyUp?: DayKeyboardEventHandler;

  /**
   * Event handler when a key is pressed and released on a day.
   *
   * @topic events
   */
  onDayKeyPress?: DayKeyboardEventHandler;

  /**
   * Event handler when a pointer enters a day.
   *
   * @topic events
   */
  onDayPointerEnter?: DayPointerEventHandler;

  /**
   * Event handler when a pointer leaves a day.
   *
   * @topic events
   */
  onDayPointerLeave?: DayPointerEventHandler;

  /**
   * Event handler when a touch is cancelled on a day.
   *
   * @topic events
   */
  onDayTouchCancel?: DayTouchEventHandler;

  /**
   * Event handler when a touch ends on a day.
   *
   * @topic events
   */
  onDayTouchEnd?: DayTouchEventHandler;

  /**
   * Event handler when a touch moves on a day.
   *
   * @topic events
   */
  onDayTouchMove?: DayTouchEventHandler;

  /**
   * Event handler when a touch starts on a day.
   *
   * @topic events
   */
  onDayTouchStart?: DayTouchEventHandler;

  /**
   * Event handler when the next month button is clicked.
   *
   * @topic navigation
   */
  onNextClick?: MonthChangeEventHandler;

  /**
   * Event handler when the previous month button is clicked.
   *
   * @topic navigation
   */
  onPrevClick?: MonthChangeEventHandler;

  /**
   * Event handler when a week number is clicked. Requires {@link showWeekNumber}
   * to be set.
   *
   * @topic options
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
   * @topic navigation
   */
  captionLayout?: CaptionLayout;
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
 * Available modes:
 *
 * - `none`: no selection is allowed.
 * - `single`: only one day can be selected.
 * - `multi`: multiple days can be selected.
 * - `range`: a range of days can be selected.
 *
 * @topic selection
 * @see https://react-day-picker.dev/docs/selection-modes
 */
export type Mode = 'none' | 'single' | 'multi' | 'range';

/** The name of the contrast preferences. */
export type ContrastPreference = 'no_preference' | 'less' | 'more';

/**
 * Set the layout of the caption.
 *
 * @deprecated Replaced by {@link PropsBase.dropdownNavigation} and
 *   {@link PropsBase.hideNavigation}.
 * @topic navigation
 */
export type CaptionLayout = 'dropdown' | 'buttons' | 'dropdown-buttons';

/**
 * The selected value when in selection mode.
 *
 * @topic selection
 */
export type Selected<T extends Mode> = T extends 'single'
  ? Date
  : T extends 'multi'
    ? Date[]
    : T extends 'range'
      ? DateRange
      : undefined;

/**
 * The callback called when the user select a days from the calendar.
 *
 * @topic selection
 */
export type SelectHandler<T extends Mode> = (
  /** The new selected value. */
  selected: Selected<T>,
  /** The date that triggered the selection. */
  date: Date,
  /** The modifiers for the day that triggered the selection. */
  modifiers: Modifiers,
  /** The event that made the selection. */
  e: MouseEvent | KeyboardEvent
) => void;

/**
 * The props for the no selection mode.
 *
 * @category Props
 * @topic selection
 */
export interface PropsNone {
  selected?: undefined;
  onSelect?: undefined;
}

/**
 * The props for the single selection mode.
 *
 * @category Props
 * @topic selection
 */
export interface PropsSingle {
  /** Makes the selection required */
  required?: boolean;
}

/**
 * The props for the multi selection mode.
 *
 * @category Props
 * @topic selection
 */
export interface PropsMulti {
  required?: boolean;
  min?: number;
  max?: number;
}

/**
 * The props for the range selection mode.
 *
 * @category Props
 * @topic selection
 */
export interface PropsRange {
  required?: boolean;
  min?: number;
  max?: number;
}
