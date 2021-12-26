import { Locale } from 'date-fns';

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
import { DayModifiers, ModifierClassNames, ModifierStyles } from './Modifiers';
import { ClassNames, StyledComponent, Styles } from './Styles';

/**
 * The props for the [[DayPicker]] component.
 */
export interface DayPickerProps {
  // #region class names
  /** The CSS class to add to the container element. */
  className?: string;
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
  modifierClassNames?: ModifierClassNames;
  // #endregion

  // #region styles
  /**
   * Style to apply to the container element.
   */
  style?: React.CSSProperties;
  /**
   * Change the inline styles for each UIElement.
   */
  styles?: Styles;
  /**
   * Change the inline style for the day matching the [[modifiers]].
   */
  modifierStyles?: ModifierStyles;
  // #endregion

  // #region month navigation
  /**
   * The initial month to show in the calendar. Default is the current month.
   *
   * Use this prop to let DayPicker control the current month. If you need to set the month programmatically, use [[month]] and [[onMonthChange]].
   */
  defaultMonth?: Date;
  /**
   * The month to display in the calendar.
   *
   * As opposed to [[defaultMonth]], use this prop with [[onMonthChange]] to
   * change the month programmatically.
   */
  month?: Date;
  /**
   * Event fired when the user navigates between months.
   */
  onMonthChange?: MonthChangeEventHandler;
  /**
   * The number of displayed months. Defaults to `1`.
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
   */
  disableNavigation?: boolean;
  /**
   * Paginate the month navigation displaying the [[numberOfMonths]] at time.
   */
  pagedNavigation?: boolean;
  /**
   * Render the months in reversed order (when [[numberOfMonths]] is greater
   * than `1`) to display the most recent month first.
   */
  reverseMonths?: boolean;
  // #endregion

  // #region customization props
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
  fixedWeeks?: boolean;
  /**
   * Hide the month’s head displaying the weekday names.
   */
  hideHead?: boolean;
  /**
   * Show the outside days.  An outside day is a day falling in the next or the
   * previous month. Default is `false`.
   */
  showOutsideDays?: boolean;
  /**
   * Show the week numbers column. Default to `false`.
   */
  showWeekNumber?: boolean;
  /**
   * A map of components used to create the layout.
   */
  components?: Partial<Components>;

  /** Content to add to the `tfoot` element. */
  footer?: React.ReactNode;

  /**
   * By setting this prop, DayPicker will focus the first selected day (if set)
   * or the today's date (if not disabled).
   *
   * Use this prop if you need to focus DayPicker when initially rendered, like
   * when rendering it after a user actions, for improved accessibility.
   **/
  initialFocus?: boolean;
  // #endregion

  // #region modifiers props

  /**
   * Apply the `disabled` modifier to the matching days.
   */
  disabled?: Matcher | Matcher[];
  /**
   * Apply the `hidden` modifier to the matching days. Will hide them from the
   * calendar.
   */
  hidden?: Matcher | Matcher[];

  /** Apply the `selected` modifier to the matching days. */
  selected?: Matcher | Matcher[];

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
   * The prefix to add to the modifiers class names. Default is `rdp-day_`.
   *
   * Each day will get a `${modifierPrefix}${modifier}` class name when matching
   * a modifier.
   */
  modifierPrefix?: string;
  // #endregion

  // #region selection props
  /**
   * Toggle the controlled selection mode.
   *
   * - `single`: control the selection of single days
   * - `multiple`: control the selection of multiple days
   * - `range`: control the selection of a range of days
   * - `custom`: customize what is selected by using `onDayClick`
   */
  mode?: 'custom' | 'single' | 'multiple' | 'range';

  // #region  props
  /**
   * The date-fns locale object to localize the user interface. Defaults to
   * `en-US`.
   */
  locale?: Locale;

  /**
   * A map of labels creators used for the ARIA labels attributes.
   */
  labels?: Partial<Labels>;

  /**
   * The text direction of the calendar. Use `ltr` for left-to-right (default)
   * or `rtl` for right-to-left.
   */
  dir?: string;

  /**
   * A map of formatters to change the default formatting functions.
   */
  formatters?: Partial<Formatters>;
  // #endregion

  // #region event handlers
  onDayClick?: DayClickEventHandler;
  onDayFocus?: DayFocusEventHandler;
  onDayBlur?: DayFocusEventHandler;
  onDayMouseEnter?: DayMouseEventHandler;
  onDayMouseLeave?: DayMouseEventHandler;
  onDayKeyDown?: DayKeyboardEventHandler;
  onDayKeyUp?: DayKeyboardEventHandler;
  onDayKeyPress?: DayKeyboardEventHandler;
  onDayTouchCancel?: DayTouchEventHandler;
  onDayTouchEnd?: DayTouchEventHandler;
  onDayTouchMove?: DayTouchEventHandler;
  onDayTouchStart?: DayTouchEventHandler;
  onNextClick?: MonthChangeEventHandler;
  onPrevClick?: MonthChangeEventHandler;
  onWeekNumberClick?: WeekNumberClickEventHandler;
  // #endregion
}

/** A map of the component that can be changed via the `components` prop. */
export interface Components {
  /** The component for the caption element. */
  Caption: (props: CaptionProps) => JSX.Element | null;
  /** The component for the caption element. */
  CaptionLabel: (props: CaptionLabelProps) => JSX.Element | null;
  /** The component for the day element. This is a button or a span. */
  Day: (props: DayProps) => JSX.Element | null;
  /** The component for the content of the day element. */
  DayContent: (props: DayContentProps) => JSX.Element | null;
  /** The component for the drop-down elements. */
  Dropdown: (props: DropdownProps) => JSX.Element | null;
  /** The component for the table footer. */
  Footer: () => JSX.Element | null;
  /** The component for the table’s head. */
  Head: () => JSX.Element | null;
  /** The component for the small icon in the drop-downs. */
  IconDropdown: (props: StyledComponent) => JSX.Element | null;
  /** The arrow right icon (used for the Navigation buttons). */
  IconRight: (props: StyledComponent) => JSX.Element | null;
  /** The arrow left icon (used for the Navigation buttons). */
  IconLeft: (props: StyledComponent) => JSX.Element | null;
  /** The component for the table rows. */
  Row: (props: RowProps) => JSX.Element | null;
  /** The component for the week number in the table rows. */
  WeekNumber: (props: WeekNumberProps) => JSX.Element | null;
}
