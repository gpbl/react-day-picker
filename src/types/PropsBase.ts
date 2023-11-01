import * as components from '../components';
import { CaptionLayout } from '../components/Nav';

import {
  DayFocusEventHandler,
  DayKeyboardEventHandler,
  DayMouseEventHandler,
  DayPointerEventHandler,
  DayTouchEventHandler,
  MonthChangeEventHandler,
  WeekNumberClickEventHandler
} from './events';

import { Formatters } from './formatters';
import { Labels } from './labels';
import { Matcher } from './matchers';
import { ModifiersClassNames, ModifiersStyles } from './modifiers';
import { ClassNames, Styles } from './styles';

export interface PropsBase {
  /**
   * The CSS class to add to the container element. To change the name of the
   * class instead, use `classNames.root`.
   */
  className?: string;
  /**
   * Change the class names of the HTML elements.
   *
   * Use this prop when you need to change the default class names — for example
   * when using CSS modules.
   */
  classNames?: Partial<ClassNames>;
  /**
   * Change the class name for the day matching the `modifiers`.
   */
  modifiersClassNames?: ModifiersClassNames;

  /**
   * Style to apply to the container element.
   */
  style?: React.CSSProperties;
  /**
   * Change the inline styles of the HTML elements.
   */
  styles?: Styles;
  /**
   * Change the inline style for the day matching the `modifiers`.
   */
  modifiersStyles?: ModifiersStyles;

  colorScheme?: ColorScheme;
  contrast?: ContrastPreference;

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
   * Event fired when the user navigates between months.
   */
  onMonthChange?: MonthChangeEventHandler;
  /**
   * The number of displayed months.
   *
   * @defaultValue 1
   */
  numberOfMonths?: number;
  /**
   * The earliest day to start the month navigation.
   */
  fromDate?: Date;
  /**
   * The latest day to end the month navigation.
   */
  toDate?: Date;
  /**
   * The earliest month to start the month navigation.
   */
  fromMonth?: Date;
  /**
   * The latest month to end the month navigation.
   */
  toMonth?: Date;
  /**
   * The earliest year to start the month navigation.
   */
  fromYear?: number;
  /**
   * The latest year to end the month navigation.
   */
  toYear?: number;
  /**
   * Disable the navigation between months.
   *
   * @defaultValue false
   */
  disableNavigation?: boolean;
  /**
   * Paginate the month navigation displaying the `numberOfMonths} at
   * time.
   *
   * @defaultValue false
   */
  pagedNavigation?: boolean;
  /**
   * Render the months in reversed order (when `numberOfMonths} is greater
   * than `1`) to display the most recent month first.
   *
   * @defaultValue false
   */
  reverseMonths?: boolean;

  /**
   * Change the layout of the caption.
   *
   * - `buttons`: display prev/right buttons
   * - `dropdown`: display drop-downs to change the month and the year
   *
   * **Note:** the `dropdown` layout is available only when `fromDate`,
   * `fromMonth` or`fromYear` and `toDate`, `toMonth` or `toYear` are set.
   *
   * @defaultValue buttons
   */
  captionLayout?: CaptionLayout;
  /**
   * Display six weeks per months, regardless the month’s number of weeks.
   *
   * @defaultValue false
   */
  fixedWeeks?: boolean;
  /**
   * Hide the row displaying the weekday row header.
   *
   * @defaultValue false
   */
  hideWeekdayRow?: boolean;
  /**
   * Show the outside days (days falling in the next or the previous month).
   *
   * @defaultValue false
   */
  showOutsideDays?: boolean;
  /**
   * Show the week numbers column. Weeks are numbered according to the local
   * week index.
   *
   * - to use ISO week numbering, use the `ISOWeek` prop.
   * - to change how the week numbers are displayed, use the `Formatters` prop.
   *
   * @defaultValue false
   */
  showWeekNumber?: boolean;

  /**
   * Use ISO week dates instead of the locale setting. Setting this prop will
   * ignore `weekStartsOn` and `firstWeekContainsDate`.
   *
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   */
  ISOWeek?: boolean;

  /**
   * Change the components used for rendering the calendar elements.
   */
  components?: CustomComponents;

  /**
   * Content to add to the table footer element.
   */
  footer?: React.ReactNode;

  /**
   * When a selection mode is set, DayPicker will focus the first selected day
   * (if set) or the today's date (if not disabled).
   *
   * Use this prop when you need to focus DayPicker after a user actions, for
   * improved accessibility.
   */
  initialFocus?: boolean;

  /**
   * Apply the `disabled` modifier to the matching days.
   */
  disabled?: Matcher | Matcher[] | undefined;
  /**
   * Apply the `hidden` modifier to the matching days. Will hide them from the
   * calendar.
   */
  hidden?: Matcher | Matcher[] | undefined;

  /**
   * The today’s date. Default is the current date. This Date will get the
   * `today` modifier to style the day.
   */
  today?: Date;

  /**
   * Add modifiers to the matching days.
   */
  modifiers?: Record<string, Matcher | Matcher[] | undefined> | undefined;

  /**
   * Labels creators to override the defaults. Use this prop to customize the
   * ARIA labels attributes.
   */
  labels?: Partial<Labels>;

  /**
   * A map of formatters. Use the formatters to override the default formatting
   * functions.
   */
  formatters?: Partial<Formatters>;

  /**
   * The text direction of the calendar. Use `ltr` for left-to-right (default)
   * or `rtl` for right-to-left.
   */
  dir?: HTMLDivElement['dir'];

  /**
   * A cryptographic nonce ("number used once") which can be used by Content
   * Security Policy for the inline `style` attributes.
   **/
  nonce?: HTMLDivElement['nonce'];

  /**
   * Add a `title` attribute to the container element.
   **/
  title?: HTMLDivElement['title'];

  /**
   * Add the language tag to the container element.
   **/
  lang?: HTMLDivElement['lang'];

  /**
   * The date-fns locale object used to localize dates.
   *
   * @defaultValue en-US
   * @see https://date-fns.org/docs/Locale
   */
  locale?: Locale | undefined;
  /**
   * The index of the first day of the week (0 - Sunday). Overrides the locale's one.
   */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  /**
   * The day of January, which is always in the first week of the year.
   *
   * @see `ISOWeek`
   * @see https://date-fns.org/docs/getWeek
   * @see https://en.wikipedia.org/wiki/Week#Numbering
   */
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined;
  /**
   * Enable `DD` and `DDDD` for week year tokens when formatting or parsing dates.
   *
   * @see https://date-fns.org/docs/Unicode-Tokens
   */
  useAdditionalWeekYearTokens?: boolean | undefined;
  /**
   * Enable `YY` and `YYYY` for day of year tokens when formatting or parsing dates.
   *
   * @see https://date-fns.org/docs/Unicode-Tokens
   */
  useAdditionalDayOfYearTokens?: boolean | undefined;

  onDayClick?: DayMouseEventHandler;
  onDayFocus?: DayFocusEventHandler;
  onDayBlur?: DayFocusEventHandler;
  onDayMouseEnter?: DayMouseEventHandler;
  onDayMouseLeave?: DayMouseEventHandler;
  onDayKeyDown?: DayKeyboardEventHandler;
  onDayKeyUp?: DayKeyboardEventHandler;
  onDayKeyPress?: DayKeyboardEventHandler;
  onDayPointerEnter?: DayPointerEventHandler;
  onDayPointerLeave?: DayPointerEventHandler;
  onDayTouchCancel?: DayTouchEventHandler;
  onDayTouchEnd?: DayTouchEventHandler;
  onDayTouchMove?: DayTouchEventHandler;
  onDayTouchStart?: DayTouchEventHandler;
  onNextClick?: MonthChangeEventHandler;
  onPrevClick?: MonthChangeEventHandler;
  onWeekNumberClick?: WeekNumberClickEventHandler;
}

/** The components that can be changed using the `components` prop. */
export type CustomComponents = {
  [key in keyof typeof components]?: (typeof components)[key];
};

/** The name of the color schemes. */
export type ColorScheme = 'auto' | 'dark' | 'light';

export type Mode = 'range' | 'single' | 'multi';

/** The name of the contrast preferences. */
export type ContrastPreference = 'no-preference' | 'less' | 'more';
