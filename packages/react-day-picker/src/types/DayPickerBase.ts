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
  className?: string | undefined;
  /**
   * Change the class names of the HTML elements.
   *
   * Use this prop when you need to change the default class names — for example
   * when using CSS modules.
   */
  classNames?: ClassNames | undefined;
  /**
   * Change the class name for the day matching the {@link modifiers}.
   */
  modifiersClassNames?: ModifiersClassNames | undefined;

  /**
   * Style to apply to the container element.
   */
  style?: React.CSSProperties | undefined;
  /**
   * Change the inline styles of the HTML elements.
   */
  styles?: Styles | undefined;
  /**
   * Change the inline style for the day matching the {@link modifiers}.
   */
  modifiersStyles?: ModifiersStyles | undefined;

  /**
   * A unique id to replace the random generated id – used by DayPicker for
   * accessibility.
   */
  id?: string | undefined;

  /**
   * The initial month to show in the calendar. Use this prop to let DayPicker
   * control the current month. If you need to set the month programmatically,
   * use {@link month]] and [[onMonthChange}.
   *
   * @defaultValue The current month
   */
  defaultMonth?: Date | undefined;
  /**
   * The month displayed in the calendar.
   *
   * As opposed to {@link DayPickerBase.defaultMonth}, use this prop with
   * {@link DayPickerBase.onMonthChange} to change the month programmatically.
   */
  month?: Date | undefined;
  /**
   * Event fired when the user navigates between months.
   */
  onMonthChange?: MonthChangeEventHandler | undefined;
  /**
   * The number of displayed months.
   *
   * @defaultValue 1
   */
  numberOfMonths?: number | undefined;
  /**
   * The earliest day to start the month navigation.
   */
  fromDate?: Date | undefined;
  /**
   * The latest day to end the month navigation.
   */
  toDate?: Date | undefined;
  /**
   * The earliest month to start the month navigation.
   */
  fromMonth?: Date | undefined;
  /**
   * The latest month to end the month navigation.
   */
  toMonth?: Date | undefined;
  /**
   * The earliest year to start the month navigation.
   */
  fromYear?: number | undefined;
  /**
   * The latest year to end the month navigation.
   */
  toYear?: number | undefined;
  /**
   * Disable the navigation between months.
   *
   * @defaultValue false
   */
  disableNavigation?: boolean | undefined;
  /**
   * Paginate the month navigation displaying the {@link numberOfMonths} at
   * time.
   *
   * @defaultValue false
   */
  pagedNavigation?: boolean | undefined;
  /**
   * Render the months in reversed order (when {@link numberOfMonths} is greater
   * than `1`) to display the most recent month first.
   *
   * @defaultValue false
   */
  reverseMonths?: boolean | undefined;

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
  captionLayout?: CaptionLayout | undefined;
  /**
   * Display six weeks per months, regardless the month’s number of weeks.
   * To use this prop, {@link showOutsideDays} must be set.
   *
   * @defaultValue false
   */
  fixedWeeks?: boolean | undefined;
  /**
   * Hide the month’s head displaying the weekday names.
   *
   * @defaultValue false
   */
  hideHead?: boolean | undefined;
  /**
   * Show the outside days.  An outside day is a day falling in the next or the
   * previous month.
   *
   * @defaultValue false
   */
  showOutsideDays?: boolean | undefined;
  /**
   * Show the week numbers column. Weeks are numbered according to the local
   * week index. To use ISO week numbering, use the {@link ISOWeek} prop.
   *
   * @defaultValue false
   */
  showWeekNumber?: boolean | undefined;
  /**
   * The index of the first day of the week (0 - Sunday). Overrides the locale's one.
   */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  /**
   * The day of January, which is always in the first week of the year. See also
   * https://date-fns.org/docs/getWeek and
   * https://en.wikipedia.org/wiki/Week#Numbering
   */
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined;
  /**
   * Use ISO week dates instead of the locale setting. See also
   * https://en.wikipedia.org/wiki/ISO_week_date.
   *
   * Setting this prop will ignore {@link weekStartsOn} and {@link firstWeekContainsDate}.
   */
  ISOWeek?: boolean | undefined;

  /**
   * Map of components used to create the layout. Look at the [components
   * source](https://github.com/gpbl/react-day-picker/tree/master/packages/react-day-picker/src/components)
   * to understand how internal components are built and provide your custom components.
   */
  components?: CustomComponents | undefined;

  /**
   * Content to add to the table footer element.
   */
  footer?: React.ReactNode | undefined;

  /**
   * When a selection mode is set, DayPicker will focus the first selected day
   * (if set) or the today's date (if not disabled).
   *
   * Use this prop when you need to focus DayPicker after a user actions, for
   * improved accessibility.
   */
  initialFocus?: boolean | undefined;

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
  today?: Date | undefined;
  /**
   * Add modifiers to the matching days.
   */
  modifiers?: DayModifiers | undefined;

  /**
   * The date-fns locale object used to localize dates.
   *
   * @defaultValue en-US
   */
  locale?: Locale | undefined;

  /**
   * Labels creators to override the defaults. Use this prop to customize the
   * ARIA labels attributes.
   */
  labels?: Partial<Labels> | undefined;

  /**
   * The text direction of the calendar. Use `ltr` for left-to-right (default)
   * or `rtl` for right-to-left.
   */
  dir?: string | undefined;

  /**
   * A map of formatters. Use the formatters to override the default formatting
   * functions.
   */
  formatters?: Partial<Formatters | undefined>;

  onDayClick?: DayClickEventHandler | undefined;
  onDayFocus?: DayFocusEventHandler | undefined;
  onDayBlur?: DayFocusEventHandler | undefined;
  onDayMouseEnter?: DayMouseEventHandler | undefined;
  onDayMouseLeave?: DayMouseEventHandler | undefined;
  onDayKeyDown?: DayKeyboardEventHandler | undefined;
  onDayKeyUp?: DayKeyboardEventHandler | undefined;
  onDayKeyPress?: DayKeyboardEventHandler | undefined;
  onDayPointerEnter?: DayPointerEventHandler | undefined;
  onDayPointerLeave?: DayPointerEventHandler | undefined;
  onDayTouchCancel?: DayTouchEventHandler | undefined;
  onDayTouchEnd?: DayTouchEventHandler | undefined;
  onDayTouchMove?: DayTouchEventHandler | undefined;
  onDayTouchStart?: DayTouchEventHandler | undefined;
  onNextClick?: MonthChangeEventHandler | undefined;
  onPrevClick?: MonthChangeEventHandler | undefined;
  onWeekNumberClick?: WeekNumberClickEventHandler | undefined;
}

/**
 * Map of the components that can be changed using the `components` prop.
 *
 * Look at the [components
 * source](https://github.com/gpbl/react-day-picker/tree/master/packages/react-day-picker/src/components)
 * to understand how internal components are built.
 */
export interface CustomComponents {
  /** The component for the caption element. */
  Caption?: ((props: CaptionProps) => JSX.Element | null) | undefined;
  /** The component for the caption element. */
  CaptionLabel?: ((props: CaptionLabelProps) => JSX.Element | null) | undefined;
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
  Day?: ((props: DayProps) => JSX.Element | null) | undefined;
  /** The component for the content of the day element. */
  DayContent?: ((props: DayContentProps) => JSX.Element | null) | undefined;
  /** The component for the drop-down elements. */
  Dropdown?: ((props: DropdownProps) => JSX.Element | null) | undefined;
  /** The component for the table footer. */
  Footer?: ((props: FooterProps) => JSX.Element | null) | undefined;
  /** The component for the table’s head. */
  Head?: (() => JSX.Element | null) | undefined;
  /** The component for the table’s head row. */
  HeadRow?: (() => JSX.Element | null) | undefined;
  /** The component for the small icon in the drop-downs. */
  IconDropdown?: ((props: StyledComponent) => JSX.Element | null) | undefined;
  /** The arrow right icon (used for the Navigation buttons). */
  IconRight?: ((props: StyledComponent) => JSX.Element | null) | undefined;
  /** The arrow left icon (used for the Navigation buttons). */
  IconLeft?: ((props: StyledComponent) => JSX.Element | null) | undefined;
  /** The component for the table rows. */
  Row?: ((props: RowProps) => JSX.Element | null) | undefined;
  /** The component for the week number in the table rows. */
  WeekNumber?: ((props: WeekNumberProps) => JSX.Element | null) | undefined;
}
