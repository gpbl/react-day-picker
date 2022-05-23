import type { Locale } from 'date-fns';

import { CaptionLayout, CaptionProps } from 'components/Caption';
import { CaptionLabelProps } from 'components/CaptionLabel';
import { DayProps } from 'components/Day';
import { DayContentProps } from 'components/DayContent';
import { DropdownProps } from 'components/Dropdown';
import { RowProps } from 'components/Row';
import { WeekNumberProps } from 'components/WeekNumber';

import {
  DayClickEventHandler,
  DayFocusEventHandler,
  DayKeyboardEventHandler,
  DayMouseEventHandler,
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
 * - `default`: disable the built-in selection behavior. Customize what is selected by using [[onDayClick]].
 */
export type DaySelectionMode = 'single' | 'multiple' | 'range' | 'default';

/**
 * The base props for the [[DayPicker]] component.
 */
export interface DayPickerBase {
  /** The CSS class to add to the container element. */
  className?: string | undefined;
  /**
   * Change the class names of the HTML elements.
   *
   * Use this prop when you need to change the default class names — for example
   * when using CSS modules.
   */
  classNames?: ClassNames;
  /**
   * Change the class name for the day matching the [[modifiers]].
   */
  modifiersClassNames?: ModifiersClassNames;

  /**
   * Style to apply to the container element.
   */
  style?: React.CSSProperties | undefined;
  /**
   * Change the inline styles for each UIElement.
   */
  styles?: Styles;
  /**
   * Change the inline style for the day matching the [[modifiers]].
   */
  modifiersStyles?: ModifiersStyles | undefined;

  /**
   * The initial month to show in the calendar. Default is the current month.
   *
   * Use this prop to let DayPicker control the current month. If you need to set the month programmatically, use [[month]] and [[onMonthChange]].
   */
  defaultMonth?: Date | undefined;
  /**
   * The month to display in the calendar.
   *
   * As opposed to [[defaultMonth]], use this prop with [[onMonthChange]] to
   * change the month programmatically.
   */
  month?: Date | undefined;
  /**
   * Event fired when the user navigates between months.
   */
  onMonthChange?: MonthChangeEventHandler | undefined;
  /**
   * The number of displayed months. Defaults to `1`.
   */
  numberOfMonths?: number;
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
   */
  disableNavigation?: boolean | undefined;
  /**
   * Paginate the month navigation displaying the [[numberOfMonths]] at time.
   */
  pagedNavigation?: boolean | undefined;
  /**
   * Render the months in reversed order (when [[numberOfMonths]] is greater
   * than `1`) to display the most recent month first.
   */
  reverseMonths?: boolean | undefined;

  /**
   * Change the layout of the caption:
   *
   * - `buttons` (default): display prev/right buttons
   * - `dropdown`: display drop-downs to change the month and the year
   *
   * **Note:** the `dropdown` layout is available only when `fromDate`,
   * `fromMonth` or`fromYear` and `toDate`, `toMonth` or `toYear` are set.
   */
  captionLayout?: CaptionLayout;
  /**
   * Display six weeks per months, regardless the month’s number of weeks.
   * To use this prop, [[showOutsideDays]] must be set. Default to `false`.
   */
  fixedWeeks?: boolean | undefined;
  /**
   * Hide the month’s head displaying the weekday names.
   */
  hideHead?: boolean | undefined;
  /**
   * Show the outside days.  An outside day is a day falling in the next or the
   * previous month. Default is `false`.
   */
  showOutsideDays?: boolean | undefined;
  /**
   * Show the week numbers column. Default to `false`.
   */
  showWeekNumber?: boolean | undefined;
  /**
   * A map of components used to create the layout.
   */
  components?: CustomComponents | undefined;

  /** Content to add to the `tfoot` element. */
  footer?: React.ReactNode;

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

  /** Apply the `selected` modifier to the matching days. */
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

  /** The date-fns locale object used to localize dates. Defaults to* `en-US`. */
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
  dir?: string | undefined;

  /**
   * A map of formatters. Use the formatters to override the default formatting
   * functions.
   */
  formatters?: Partial<Formatters>;

  /**
   * The index of the first day of the week (0 - Sunday). Overrides the locale's one.
   */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;

  onDayClick?: DayClickEventHandler | undefined;
  onDayFocus?: DayFocusEventHandler | undefined;
  onDayBlur?: DayFocusEventHandler | undefined;
  onDayMouseEnter?: DayMouseEventHandler | undefined;
  onDayMouseLeave?: DayMouseEventHandler | undefined;
  onDayKeyDown?: DayKeyboardEventHandler | undefined;
  onDayKeyUp?: DayKeyboardEventHandler | undefined;
  onDayKeyPress?: DayKeyboardEventHandler | undefined;
  onDayTouchCancel?: DayTouchEventHandler | undefined;
  onDayTouchEnd?: DayTouchEventHandler | undefined;
  onDayTouchMove?: DayTouchEventHandler | undefined;
  onDayTouchStart?: DayTouchEventHandler | undefined;
  onNextClick?: MonthChangeEventHandler | undefined;
  onPrevClick?: MonthChangeEventHandler | undefined;
  onWeekNumberClick?: WeekNumberClickEventHandler | undefined;
}

/** A map of the component that can be changed via the `components` prop. */
export interface CustomComponents {
  /** The component for the caption element. */
  Caption?: (props: CaptionProps) => JSX.Element | null;
  /** The component for the caption element. */
  CaptionLabel?: (props: CaptionLabelProps) => JSX.Element | null;
  /** The component for the day element. This is a button or a span. */
  Day?: (props: DayProps) => JSX.Element | null;
  /** The component for the content of the day element. */
  DayContent?: (props: DayContentProps) => JSX.Element | null;
  /** The component for the drop-down elements. */
  Dropdown?: (props: DropdownProps) => JSX.Element | null;
  /** The component for the table footer. */
  Footer?: () => JSX.Element | null;
  /** The component for the table’s head. */
  Head?: () => JSX.Element | null;
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
