import { CSSProperties, ReactNode } from 'react';

import { Locale } from 'date-fns';

import { CaptionLayout, CaptionProps } from '../components/Caption';
import { CaptionLabelProps } from '../components/CaptionLabel';
import { DayProps } from '../components/Day';
import { DayContentProps } from '../components/DayContent';
import { DropdownProps } from '../components/Dropdown';
import { FooterProps } from '../components/Footer';
import { MonthsProps } from '../components/Months';
import { RowProps } from '../components/Row';
import { WeekNumberProps } from '../components/WeekNumber';

import {
  DayClickEventHandler,
  DayFocusEventHandler,
  DayKeyboardEventHandler,
  DayMouseEventHandler,
  DayPointerEventHandler,
  DayTouchEventHandler,
  MonthChangeEventHandler,
  WeekNumberClickEventHandler,
} from './EventHandlers';
import { Formatters } from './Formatters';
import { Labels } from './Labels';
import { Matcher } from './Matchers';
import {
  DayModifiers,
  ModifiersClassNames,
  ModifiersStyles,
} from './Modifiers';
import { ClassNames, StyledComponent, Styles } from './Styles';

/**
 * Selection modes supported by DayPicker.
 *
 * - `single`: use DayPicker to select single days.
 * - `multiple`: allow selecting multiple days.
 * - `range`: use DayPicker to select a range of days
 * - `default`: disable the built-in selection behavior. Customize what is
 *   selected by using {@link PropsBase.onDayClick}.
 */
export type Mode = 'single' | 'multiple' | 'range' | 'default';
/** @deprecated Use {@link Mode} instead. */
export type DaySelectionMode = Mode;

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
   * when importing the style via CSS modules or when using a CSS framework.
   */
  classNames?: Partial<ClassNames>;
  /** Change the class name for the day matching the {@link modifiers}. */
  modifiersClassNames?: ModifiersClassNames;

  /** Style to apply to the container element. */
  style?: CSSProperties;
  /** Change the inline styles of the HTML elements. */
  styles?: Partial<Styles>;
  /** Change the inline style for the day matching the {@link modifiers}. */
  modifiersStyles?: ModifiersStyles;

  /**
   * A unique id to replace the random generated id – used by DayPicker for
   * accessibility.
   */
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
   * As opposed to {@link PropsBase.defaultMonth}, use this prop with
   * {@link PropsBase.onMonthChange} to change the month programmatically.
   */
  month?: Date;
  /** Event fired when the user navigates between months. */
  onMonthChange?: MonthChangeEventHandler;

  /**
   * The number of displayed months.
   *
   * @defaultValue 1
   */
  numberOfMonths?: number;
  /**
   * Paginate the month navigation displaying the {@link numberOfMonths} at time.
   *
   * @defaultValue false
   */
  pagedNavigation?: boolean;

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

  /**
   * Disable the navigation between months.
   *
   * @defaultValue false
   */
  disableNavigation?: boolean;
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
   * Display six weeks per months, regardless the month’s number of weeks. To
   * use this prop, {@link showOutsideDays} must be set.
   */
  fixedWeeks?: boolean;
  /**
   * Hide the month’s head displaying the weekday names.
   *
   * @deprecated Use {@link hideWeekdayRow} instead.
   */
  hideHead?: boolean;
  /**
   * Hide the month’s head displaying the weekday names.
   *
   * TODO: implement this prop
   *
   * @since 8.11.0
   */
  hideWeekdayRow?: boolean;

  /** Show the outside days (days falling in the next or the previous month). */
  showOutsideDays?: boolean;
  /**
   * Show the week numbers column.
   *
   * Weeks are numbered according to the local week index.
   *
   * - To use ISO week numbering, use the {@link ISOWeek} prop.
   * - To change how the week numbers are displayed, use the {@link formatters}
   *   prop.
   */
  showWeekNumber?: boolean;

  /**
   * Use ISO week dates instead of the locale setting.
   *
   * Setting this prop will ignore {@link weekStartsOn} and
   * {@link firstWeekContainsDate}.
   *
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   */
  ISOWeek?: boolean;
  /**
   * The index of the first day of the week (0 - Sunday). Overrides the locale's
   * one.
   */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  /**
   * The day of January, which is always in the first week of the year. Can be
   * either Monday (`1`) or Thursday (`4`).
   *
   * @see https://date-fns.org/docs/getWeek
   * @see https://en.wikipedia.org/wiki/Week#Numbering
   */
  firstWeekContainsDate?: 1 | 4;

  /** Change the components used for rendering the calendar elements. */
  components?: CustomComponents;

  /** Content to add to the grid as footer element. */
  footer?: ReactNode;

  /**
   * When a selection mode is set, DayPicker will focus the first selected day
   * (if set) or the today's date (if not disabled).
   *
   * @deprecated Use the {@link autoFocus} prop instead.
   */
  initialFocus?: boolean;
  /**
   * Autofocus the calendar when mounted.
   *
   * Use this prop when you need to focus DayPicker after a user actions, for
   * improved accessibility.
   *
   * TODO: implement this prop
   *
   * @since 8.11.0
   */
  autoFocus?: boolean;

  /** Apply the `disabled` modifier to disable the matching days. */
  disabled?: Matcher | Matcher[] | undefined;

  /**
   * Apply the `hidden` modifier to the matching days to hide them from the
   * calendar.
   */
  hidden?: Matcher | Matcher[] | undefined;

  /** Apply the `selected` modifier to display the matching days as selected. */
  selected?: Matcher | Matcher[] | undefined;

  /** The today’s date. Default is the current date. */
  today?: Date;

  /** Map of modifiers to add to the matching days. */
  modifiers?: DayModifiers;

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
   */
  nonce?: HTMLDivElement['nonce'];

  /** Add a `title` attribute to the container element. */
  title?: HTMLDivElement['title'];

  /** Add the language tag to the container element. */
  lang?: HTMLDivElement['lang'];

  /**
   * The date-fns locale object used to localize dates.
   *
   * @defaultValue en-US
   * @see https://date-fns.org/docs/Locale
   */
  locale?: Locale | undefined;

  /** Event callback fired when the next month button is clicked. */
  onNextClick?: MonthChangeEventHandler;

  /** Event callback fired when the previous month button is clicked. */
  onPrevClick?: MonthChangeEventHandler;

  /** Event callback fired when the week number is clicked. */
  onWeekNumberClick?: WeekNumberClickEventHandler;

  /** Event callback fired when the user clicks on a day. */
  onDayClick?: DayClickEventHandler;
  /** Event callback fired when the user focuses on a day. */
  onDayFocus?: DayFocusEventHandler;
  /** Event callback fired when the user blurs from a day. */
  onDayBlur?: DayFocusEventHandler;
  /** Event callback fired when the user hovers on a day. */
  onDayMouseEnter?: DayMouseEventHandler;
  /** Event callback fired when the user hovers away from a day. */
  onDayMouseLeave?: DayMouseEventHandler;
  /** Event callback fired when the user presses a key on a day. */
  onDayKeyDown?: DayKeyboardEventHandler;
  /** Event callback fired when the user presses a key on a day. */
  onDayKeyUp?: DayKeyboardEventHandler;
  /** Event callback fired when the user presses a key on a day. */
  onDayKeyPress?: DayKeyboardEventHandler;
  /** Event callback fired when the pointer enters a day. */
  onDayPointerEnter?: DayPointerEventHandler;
  /** Event callback fired when the pointer leaves a day. */
  onDayPointerLeave?: DayPointerEventHandler;
  /** Event callback when a day touch event is canceled. */
  onDayTouchCancel?: DayTouchEventHandler;
  /** Event callback when a day touch event ends. */
  onDayTouchEnd?: DayTouchEventHandler;
  /** Event callback when a day touch event moves. */
  onDayTouchMove?: DayTouchEventHandler;
  /** Event callback when a day touch event starts. */
  onDayTouchStart?: DayTouchEventHandler;
}
/** @deprecated Use {@link PropsBase} instead. */
export type DayPickerBase = PropsBase;

/**
 * The components that can be changed using the {@link PropsBase.components}
 * components prop.
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
   * - An empty `Fragment`, to render if `isHidden` is true
   * - A `button` element, when the day is interactive, e.g. is selectable
   * - A `div` or a `span` element, when the day is not interactive
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
  /** The component wrapping the month grids. */
  Months?: (props: MonthsProps) => JSX.Element | null;
  /** The component for the table rows. */
  Row?: (props: RowProps) => JSX.Element | null;
  /** The component for the week number in the table rows. */
  WeekNumber?: (props: WeekNumberProps) => JSX.Element | null;
}
