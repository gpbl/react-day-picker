import { Locale } from 'date-fns';

import {
  CaptionLayout,
  ClassNames,
  Components,
  DayClickEventHandler,
  DayFocusEventHandler,
  DayKeyboardEventHandler,
  DayMouseEventHandler,
  DayTouchEventHandler,
  Formatters,
  Labels,
  Matcher,
  ModifierClassNames,
  Modifiers,
  ModifierStyles,
  MonthChangeEventHandler,
  SelectionMode,
  Styles,
  WeekNumberClickEventHandler
} from './index';

/**
 * The base props for the [[DayPicker]] component.
 *
 * This interface extends other props according to the selection mode:
 *
 * - see [[DayPickerSingle]] when using `mode="single"`
 * - see [[DayPickerMultiple]] when using `mode="multiple"`
 * - see [[DayPickerRange]] when using `mode="range"`
 */
export interface DayPickerBase {
  /**
   * CSS class to add to the root UI element.
   */
  className?: string;
  /**
   * Change the class names.
   *
   * Use this prop when you need to change the default class names — for example
   * when using CSS modules.
   *
   * **Example**
   *
   * Use of custom class names for the head and the caption elements:
   *
   * ```
   *  function App() {
   *    const css = `
   *      .salmon-head {
   *        color: salmon;
   *      }
   *      .purple-caption {
   *        font-weight: bold;
   *        color: purple;
   *        padding: 3px 0 6px 0;
   *      }
   *    `;
   *    return (
   *      <>
   *        <style>{css}</style>
   *        <DayPicker
   *          classNames={{
   *            head: 'salmon-head',
   *            caption: 'purple-caption'
   *          }}
   *        />
   *      </>
   *    );
   *  }
   * ```
   */
  classNames?: ClassNames;
  /**
   * Change the class name for the day matching the [[modifiers]].
   *
   * **Example**
   *
   * Add the `.with-circle` class of the days matching the `isToday` modifier.
   *
   * ```
   * <DayPicker
   *  modifiers={{ isToday: new Date() }}
   *  modifierClassNames={{ isToday: 'with-circle' }}
   * />
   * ```
   */
  modifierClassNames?: ModifierClassNames;
  /**
   * The prefix to add to the modifiers class names. Default is `rdp-day_`.
   *
   * #### Usage
   *
   * Each day will get a `${modifierPrefix}${modifier}` class name when matching
   * a modifier.
   *
   * ```
   * const today = new Date();
   * <DayPicker
   *  modifierPrefix="calendar-day_" // use this prefix instead of default
   *  selected={today} // Today element has `.calendar-day_selected`
   *  hidden={today} // `.calendar-day_hidden`
   *  modifiers={{ today }} // `.calendar-day_today`
   * />
   * ```
   */
  modifierPrefix?: string;
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
   *
   * **Example**
   *
   * Change the background color of the days matching the `isToday` modifier.
   *
   * ```
   * <DayPicker
   *  modifiers={{ isToday: new Date() }}
   *  modifierStyles={{ isToday: { backgroundColor: 'purple' } }}
   * />
   * ```
   */
  modifierStyles?: ModifierStyles;
  /**
   * The initial month to show in the calendar. Default is the current month.
   *
   * As opposed to [[month]], use this prop to let DayPicker control the current
   * month.
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
   * Change the layout of the caption:
   *
   * - `buttons` (default): display prev/right buttons
   * - `dropdown`: display drop-downs to change the month and the year
   *
   * **Note** `dropdown` is valid only when `fromDate/fromMonth/fromYear` and
   * `toDate/toMonth/toYear` are set.
   */
  captionLayout?: CaptionLayout;

  /**
   * Paginate the month navigation displaying the [[numberOfMonths]] at time.
   */
  pagedNavigation?: boolean;
  /**
   * Render the months in reversed order (when [[numberOfMonths]] is greater
   * than `1`) to display the most recent month first.
   */
  reverseMonths?: boolean;
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
   * The selection mode – the way DayPicker enables selection when clicking a
   * day.
   *
   * - `single` (default) enables the selection of a single day per time
   * - `multiple` enables the selection of multiple days
   * - `range` enables th selection of a range of days
   * - `uncontrolled`: disable the controlled selection. Use `selected` and
   *   `onDayClick` to implement a custom selection mode.
   */
  mode?: SelectionMode;
  /**
   * Apply the `selected` modifier to the matching days.
   *
   * **Example**
   *
   * ```
   * function App() {
   *   return (
   *     <DayPicker
   *       defaultMonth={new Date(2021, 11)}
   *       selected={{
   *         from: new Date(2021, 11, 14),
   *         to: new Date(2021, 11, 24)
   *       }}
   *     />
   *   );
   * }
   * ```
   */
  selected?: Matcher | Matcher[];
  /**
   * Apply the `disabled` modifier to the matching days.
   *
   * **Example**
   *
   * ```
   * function App() {
   *   return (
   *     <DayPicker
   *       defaultMonth={new Date(2021, 11)}
   *       disabled={{
   *         from: new Date(2021, 11, 14),
   *         to: new Date(2021, 11, 24)
   *       }}
   *     />
   *   );
   * }
   * ```
   */
  disabled?: Matcher | Matcher[];
  /**
   * Apply the `hidden` modifier to the matching days. Will hide them from the
   * calendar.
   */
  hidden?: Matcher | Matcher[];

  /**
   * The today’s date. Default is the current date.
   *
   * This Date will get the `today` modifier to style the day. Set it to `off`
   * to disable it.
   */
  today?: Date | 'off';

  /**
   * Add modifiers to the matching days.
   *
   * For example, to add a `booked` modifier to the current day:
   *
   * ```
   * <DayPicker modifiers={{ booked: new Date() }} />
   * ```
   */
  modifiers?: Modifiers;

  /**
   * The date-fns locale object to localize the user interface. Defaults to
   * `en-US`.
   *
   * For example, to the calendar to Spanish:
   *
   * ```
   * import spanish from 'date-fns/locale/es';
   *
   * function App() {
   *   return <DayPicker locale={spanish} />;
   * }
   * ```
   *
   * See also date-fns [Internationalization
   * guide](https://date-fns.org/docs/I18n).
   *
   */
  locale?: Locale;

  /**
   * A map of labels creators used for the ARIA labels attributes.
   */
  labels?: Partial<Labels>;

  /**
   * The text direction of the calendar. Use `ltr` for left-to-right (default)
   * or `rtl` for right-to-left.
   *
   * **Example**
   *
   * When setting the calendar to Arabic, using `dir` to enable right-to-left
   * direction.
   *
   * ```
   * import arabic from 'date-fns/locale/ar-SA';
   *
   * function App() {
   *   return <DayPicker locale={arabic} dir="rtl" />;
   * }
   * ```
   */
  dir?: string;

  /**
   * A map of formatters to change the default formatting functions.
   */
  formatters?: Partial<Formatters>;

  /**
   * A map of components used to create the layout.
   *
   * For example, to use custom navigation icons:
   *
   * ```
   * <DayPicker component={{
   *    IconNext: MyIconNext,
   *    IconPrevious: MyIconPrev
   *  }}
   * />
   * ```
   */
  components?: Partial<Components>;

  /** Content to add to the `tfoot` element. */
  footer?: React.ReactNode;

  /**
   * Event fired when the user navigates between months.
   */
  onMonthChange?: MonthChangeEventHandler;
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
}
