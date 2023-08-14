import type { Locale } from 'date-fns';

import { CaptionLayout, CaptionProps } from 'components/Caption';
import { CaptionLabelProps } from 'components/CaptionLabel';
import { DayProps } from 'components/Day';
import { DayContentProps } from 'components/DayContent';
import { DropdownProps } from 'components/Dropdown';
import { FooterProps } from 'components/Footer';
import { RowProps } from 'components/Row';
import { WeekNumberProps } from 'components/WeekNumber';

import {
  DayClickEventHandler,
  DayFocusEventHandler,
  DayKeyboardEventHandler,
  DayMouseEventHandler,
  DayPointerEventHandler,
  DayTouchEventHandler,
  MonthChangeEventHandler,
  WeekNumberClickEventHandler
} from './EventHandlers';
import { Formatters } from './Formatters';
import { Labels } from './Labels';
import { Matcher } from './Matchers';
import {
  DayModifiers,
  ModifiersClassNames,
  ModifiersStyles
} from './Modifiers';
import { ClassNames, StyledComponent, Styles } from './Styles';

/**
 * Selection modes supported by DayPicker.
 *
 * - `single`: use DayPicker to select single days.
 * - `multiple`: allow selecting multiple days.
 * - `range`: use DayPicker to select a range of days
 * - `default`: disable the built-in selection behavior. Customize what is
 *   selected by using {@link DayPickerBase.onDayClick}.
 */
export type DaySelectionMode = 'single' | 'multiple' | 'range' | 'default';

/**
 * The base props for the {@link DayPicker} component and the {@link DayPickerContext}.
 */
export interface DayPickerBase {
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
  classNames?: ClassNames;
  /**
   * Change the class name for the day matching the {@link modifiers}.
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
   * Change the inline style for the day matching the {@link modifiers}.
   */
  modifiersStyles?: ModifiersStyles;

  /**
   * A unique id to replace the random generated id – used by DayPicker for
   * accessibility.
   */
  id?: string;

  /**
   * The initial month to show in the calendar. Use this prop to let DayPicker
   * control the current month. If you need to set the month programmatically,
   * use {@link month]] and [[onMonthChange}.
   *
   * @defaultValue The current month
   */
  defaultMonth?: Date;
  /**
   * The month displayed in the calendar.
   *
   * As opposed to {@link DayPickerBase.defaultMonth}, use this prop with
   * {@link DayPickerBase.onMonthChange} to change the month programmatically.
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
   * Paginate the month navigation displaying the {@link numberOfMonths} at
   * time.
   *
   * @defaultValue false
   */
  pagedNavigation?: boolean;
  /**
   * Render the months in reversed order (when {@link numberOfMonths} is greater
   * than `1`) to display the most recent month first.
   *
   * @defaultValue false
   */
  reverseMonths?: boolean;

  /**
   * Change the layout of the caption:
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
   * To use this prop, {@link showOutsideDays} must be set.
   *
   * @defaultValue false
   */
  fixedWeeks?: boolean;
  /**
   * Hide the month’s head displaying the weekday names.
   *
   * @defaultValue false
   */
  hideHead?: boolean;
  /**
   * Show the outside days.  An outside day is a day falling in the next or the
   * previous month.
   *
   * @defaultValue false
   */
  showOutsideDays?: boolean;
  /**
   * Show the week numbers column. Weeks are numbered according to the local
   * week index.
   *
   * - to use ISO week numbering, use the {@link ISOWeek} prop.
   * - to change how the week numbers are displayed, use the {@link Formatters} prop.
   *
   * @see  {@link ISOWeek}, {@link weekStartsOn} and {@link firstWeekContainsDate}.
   *
   * @defaultValue false
   */
  showWeekNumber?: boolean;
  /**
   * The index of the first day of the week (0 - Sunday). Overrides the locale's one.
   *
   * See also {@link ISOWeek}.
   */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * The day of January, which is always in the first week of the year. See also
   * https://date-fns.org/docs/getWeek and
   * https://en.wikipedia.org/wiki/Week#Numbering
   *
   * See also {@link ISOWeek}.
   */
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /**
   * Use ISO week dates instead of the locale setting. See also
   * https://en.wikipedia.org/wiki/ISO_week_date.
   *
   * Setting this prop will ignore {@link weekStartsOn} and {@link firstWeekContainsDate}.
   */
  ISOWeek?: boolean;

  /**
   * Map of components used to create the layout. Look at the [components
   * source](https://github.com/gpbl/react-day-picker/tree/main/src/components)
   * to understand how internal components are built and provide your custom components.
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
   * Apply the `selected` modifier to the matching days.
   */
  selected?: Matcher | Matcher[] | undefined;

  /**
   * The today’s date. Default is the current date. This Date will get the
   * `today` modifier to style the day.
   */
  today?: Date;
  /**
   * Add modifiers to the matching days.
   */
  modifiers?: DayModifiers;

  /**
   * The date-fns locale object used to localize dates.
   *
   * @defaultValue en-US
   */
  locale?: Locale;

  /**
   * Labels creators to override the defaults. Use this prop to customize the
   * ARIA labels attributes.
   */
  labels?: Partial<Labels>;

  /**
   * The text direction of the calendar. Use `ltr` for left-to-right (default)
   * or `rtl` for right-to-left.
   */
  dir?: string;

  /**
   * A map of formatters. Use the formatters to override the default formatting
   * functions.
   */
  formatters?: Partial<Formatters>;

  onDayClick?: DayClickEventHandler;
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

/**
 * Map of the components that can be changed using the `components` prop.
 *
 * Look at the [components
 * source](https://github.com/gpbl/react-day-picker/tree/main/src/components)
 * to understand how internal components are built.
 */
export interface CustomComponents {
  /** The component for the caption element. */
  Caption?: (props: CaptionProps) => JSX.Element | null;
  /** The component for the caption element. */
  CaptionLabel?: (props: CaptionLabelProps) => JSX.Element | null;
  /**
   * The component for the day element.
   *
   * Each `Day` in DayPicker should render one of the following, according to
   * the return value of {@link useDayRender}.
   *
   * - an empty `React.Fragment`, to render if `isHidden` is true
   * - a `button` element, when the day is interactive, e.g. is selectable
   * - a `div` or a `span` element, when the day is not interactive
   *
   */
  Day?: (props: DayProps) => JSX.Element | null;
  /** The component for the content of the day element. */
  DayContent?: (props: DayContentProps) => JSX.Element | null;
  /** The component for the drop-down elements. */
  Dropdown?: (props: DropdownProps) => JSX.Element | null;
  /** The component for the table footer. */
  Footer?: (props: FooterProps) => JSX.Element | null;
  /** The component for the table’s head. */
  Head?: () => JSX.Element | null;
  /** The component for the table’s head row. */
  HeadRow?: () => JSX.Element | null;
  /** The component for the small icon in the drop-downs. */
  IconDropdown?: (props: StyledComponent) => JSX.Element | null;
  /** The arrow right icon (used for the Navigation buttons). */
  IconRight?: (props: StyledComponent) => JSX.Element | null;
  /** The arrow left icon (used for the Navigation buttons). */
  IconLeft?: (props: StyledComponent) => JSX.Element | null;
  /** The component for the table rows. */
  Row?: (props: RowProps) => JSX.Element | null;
  /** The component for the week number in the table rows. */
  WeekNumber?: (props: WeekNumberProps) => JSX.Element | null;
}
