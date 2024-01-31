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
 * @extends PropsBase
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
 * The base props for the {@link DayPicker} component.
 *
 * For changing the navigation, the styling and the behavior of the calendar.
 *
 * @category Props
 */
export interface PropsBase {
  /**
   * The CSS class to add to the container element.
   *
   * @category Styling
   */
  className?: string;
  /**
   * Change the class names used by DayPicker.
   *
   * Use this prop when you need to change the default class names — for example
   * when using CSS modules.
   *
   * @category Styling
   */
  classNames?: Partial<ClassNames>;
  /**
   * Change the class name for the day matching the `modifiers`.
   *
   * @category Modifiers
   */
  modifiersClassNames?: ModifiersClassNames;

  /**
   * Style to apply to the container element.
   *
   * @category Styling
   */
  style?: React.CSSProperties;
  /**
   * Change the inline styles of the HTML elements.
   *
   * @category Styling
   */
  styles?: Partial<Styles>;
  /**
   * Change the inline style for the day matching the `modifiers`.
   *
   * @category Modifiers
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
   * @category Navigation
   * @defaultValue The current month
   */
  defaultMonth?: Date;
  /**
   * The month displayed in the calendar.
   *
   * As opposed to `PropsBase.defaultMonth}, use this prop with
   * `PropsBase.onMonthChange} to change the month programmatically.
   *
   * @category Navigation
   */
  month?: Date;

  /**
   * The number of displayed months.
   *
   * @category Navigation
   * @defaultValue 1
   */
  numberOfMonths?: number;
  /**
   * The earliest day to start the month navigation.
   *
   * @category Navigation
   */
  fromDate?: Date;
  /**
   * The latest day to end the month navigation.
   *
   * @category Navigation
   */
  toDate?: Date;
  /**
   * The earliest month to start the month navigation.
   *
   * @category Navigation
   */
  fromMonth?: Date;
  /**
   * The latest month to end the month navigation.
   *
   * @category Navigation
   */
  toMonth?: Date;
  /**
   * The earliest year to start the month navigation.
   *
   * @category Navigation
   */
  fromYear?: number;
  /**
   * The latest year to end the month navigation.
   *
   * @category Navigation
   */
  toYear?: number;
  /**
   * Paginate the month navigation displaying the `numberOfMonths` at time.
   *
   * @category Navigation
   */
  pagedNavigation?: boolean;
  /**
   * Render the months in reversed order (when {@link numberOfMonths} is set) to
   * display the most recent month first.
   *
   * @category Navigation
   */
  reverseMonths?: boolean;
  /**
   * Hide the navigation buttons. This prop won't disable the navigation: to
   * disable the navigation, use {@link disableNavigation}.
   *
   * @category Navigation
   */
  hideNavigation?: boolean;
  /**
   * Disable the navigation between months. This prop won't hide the navigation:
   * to hide the navigation, use {@link hideNavigation}.
   *
   * @category Navigation
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
   * @category Navigation
   */
  dropdownNavigation?: boolean | 'month' | 'year';

  /**
   * Display always 6 weeks per each month, regardless the month’s number of
   * weeks. Weeks will be filled with the days from the next month.
   *
   * @category Calendar Options
   */
  fixedWeeks?: boolean;
  /**
   * Hide the row displaying the weekday row header.
   *
   * @category Calendar Options
   */
  hideWeekdayRow?: boolean;
  /**
   * Show the outside days (days falling in the next or the previous month).
   *
   * @category Calendar Options
   */
  showOutsideDays?: boolean;
  /**
   * Show the week numbers column. Weeks are numbered according to the local
   * week index.
   *
   * - To use ISO week numbering, use the `ISOWeek` prop.
   * - To change how the week numbers are displayed, use the `Formatters` prop.
   *
   * @category Calendar Options
   */
  showWeekNumber?: boolean;

  /**
   * Use ISO week dates instead of the locale setting. Setting this prop will
   * ignore `weekStartsOn` and `firstWeekContainsDate`.
   *
   * @category Date
   * @defaultValue falses
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
   * @category Calendar Options
   */
  footer?: React.ReactNode;

  /**
   * When a selection mode is set, DayPicker will focus the first selected day
   * (if set) or the today's date (if not disabled).
   *
   * Use this prop when you need to focus DayPicker after a user actions, for
   * improved accessibility.
   *
   * @category Calendar Options
   */
  autoFocus?: boolean;
  /**
   * Apply the `disabled` modifier to the matching days.
   *
   * @category Selection
   */
  disabled?: Matcher | Matcher[] | undefined;
  /**
   * Apply the `hidden` modifier to the matching days. Will hide them from the
   * calendar.
   *
   * @category Selection
   */
  hidden?: Matcher | Matcher[] | undefined;

  /**
   * The today’s date. Default is the current date. This date will get the
   * `today` modifier to style the day.
   *
   * @category Dates
   */
  today?: Date;

  /**
   * Add modifiers to the matching days.
   *
   * @category Modifiers
   */
  modifiers?: Record<string, Matcher | Matcher[] | undefined> | undefined;

  /**
   * Labels creators to override the defaults. Use this prop to customize the
   * aria-label attributes in DayPicker.
   *
   * @category Internationalization
   */
  labels?: Partial<Labels>;

  /**
   * Formatters used to format dates to strings. Use this prop to override the
   * default functions.
   *
   * @category Internationalization
   */
  formatters?: Partial<Formatters>;

  /**
   * The text direction of the calendar. Use `ltr` for left-to-right (default)
   * or `rtl` for right-to-left.
   *
   * @category Internationalization
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
   * @category Internationalization
   */
  lang?: HTMLDivElement['lang'];

  /**
   * The date-fns locale object used to localize dates.
   *
   * @category Internationalization
   * @defaultValue en-US
   * @see https://date-fns.org/docs/Locale
   */
  locale?: Locale | undefined;
  /**
   * The index of the first day of the week (0 - Sunday). Overrides the locale's
   * one.
   *
   * @category Dates
   */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  /**
   * The day of January, which is always in the first week of the year.
   *
   * @category Dates
   * @see https://date-fns.org/docs/getWeek
   * @see https://en.wikipedia.org/wiki/Week#Numbering
   */
  firstWeekContainsDate?: 1 | 4;
  /**
   * Enable `DD` and `DDDD` for week year tokens when formatting or parsing
   * dates.
   *
   * @category Dates
   * @see https://date-fns.org/docs/Unicode-Tokens
   */
  useAdditionalWeekYearTokens?: boolean | undefined;
  /**
   * Enable `YY` and `YYYY` for day of year tokens when formatting or parsing
   * dates.
   *
   * @category Dates
   * @see https://date-fns.org/docs/Unicode-Tokens
   */
  useAdditionalDayOfYearTokens?: boolean | undefined;

  /* EVENT HANDLERS */
  /**
   * Event fired when the user navigates between months.
   *
   * @category Navigation
   */
  onMonthChange?: MonthChangeEventHandler;

  /**
   * Event handler when a day is clicked.
   *
   * @category Event Handlers
   */
  onDayClick?: DayMouseEventHandler;

  /**
   * Event handler when a day is focused.
   *
   * @category Event Handlers
   */
  onDayFocus?: DayFocusEventHandler;

  /**
   * Event handler when a day is blurred.
   *
   * @category Event Handlers
   */
  onDayBlur?: DayFocusEventHandler;

  /**
   * Event handler when the mouse enters a day.
   *
   * @category Event Handlers
   */
  onDayMouseEnter?: DayMouseEventHandler;

  /**
   * Event handler when the mouse leaves a day.
   *
   * @category Event Handlers
   */
  onDayMouseLeave?: DayMouseEventHandler;

  /**
   * Event handler when a key is pressed on a day.
   *
   * @category Event Handlers
   */
  onDayKeyDown?: DayKeyboardEventHandler;

  /**
   * Event handler when a key is released on a day.
   *
   * @category Event Handlers
   */
  onDayKeyUp?: DayKeyboardEventHandler;

  /**
   * Event handler when a key is pressed and released on a day.
   *
   * @category Event Handlers
   */
  onDayKeyPress?: DayKeyboardEventHandler;

  /**
   * Event handler when a pointer enters a day.
   *
   * @category Event Handlers
   */
  onDayPointerEnter?: DayPointerEventHandler;

  /**
   * Event handler when a pointer leaves a day.
   *
   * @category Event Handlers
   */
  onDayPointerLeave?: DayPointerEventHandler;

  /**
   * Event handler when a touch is cancelled on a day.
   *
   * @category Event Handlers
   */
  onDayTouchCancel?: DayTouchEventHandler;

  /**
   * Event handler when a touch ends on a day.
   *
   * @category Event Handlers
   */
  onDayTouchEnd?: DayTouchEventHandler;

  /**
   * Event handler when a touch moves on a day.
   *
   * @category Event Handlers
   */
  onDayTouchMove?: DayTouchEventHandler;

  /**
   * Event handler when a touch starts on a day.
   *
   * @category Event Handlers
   */
  onDayTouchStart?: DayTouchEventHandler;

  /**
   * Event handler when the next month button is clicked.
   *
   * @category Navigation
   */
  onNextClick?: MonthChangeEventHandler;

  /**
   * Event handler when the previous month button is clicked.
   *
   * @category Navigation
   */
  onPrevClick?: MonthChangeEventHandler;

  /**
   * Event handler when a week number is clicked. Requires {@link showWeekNumber}
   * to be set.
   *
   * @category Calendar Options
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
   * @category Navigation
   * @defaultValue buttons
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
 * - `custom`: customize selections via `onDayClick`
 *
 * @category Selection
 * @see https://react-day-picker.dev/docs/selection-modes
 */
export type Mode = 'none' | 'single' | 'multi' | 'range';

/**
 * Set the layout of the caption.
 *
 * @deprecated Replaced by {@link PropsBase.dropdownNavigation} and
 *   {@link PropsBase.hideNavigation}.
 * @category Navigation
 */
export type CaptionLayout = 'dropdown' | 'buttons' | 'dropdown-buttons';

/**
 * The selected value when in selection mode.
 *
 * @category Selection
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
 * @category Selection
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
 * @category Selection
 */
export interface PropsNone {
  selected?: undefined;
  onSelect?: never;
}

/**
 * The props for the single selection mode.
 *
 * @category Props
 * @category Selection
 */
export interface PropsSingle {
  /** Makes the selection required */
  required?: boolean;
}

/**
 * The props for the multi selection mode.
 *
 * @category Props
 * @category Selection
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
 * @category Selection
 */
export interface PropsRange {
  required?: boolean;
  min?: number;
  max?: number;
}
