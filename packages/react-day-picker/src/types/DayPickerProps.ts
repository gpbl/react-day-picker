import { Locale } from 'date-fns';

import {
  CaptionLayout,
  ClassNames,
  Components,
  DateRange,
  DayClickEventHandler,
  DayFocusEventHandler,
  DayKeyboardEventHandler,
  DayMouseEventHandler,
  DayTouchEventHandler,
  Formatters,
  Labels,
  Matcher,
  ModifierClassNames,
  ModifierMatchers,
  ModifierStyles,
  MonthChangeEventHandler,
  SelectEventHandler,
  SelectMode,
  SelectMultipleEventHandler,
  SelectRangeEventHandler,
  Styles,
  WeekNumberClickEventHandler
} from './';

/**
 * The props for the [[DayPicker]] component.
 */
export interface DayPickerProps {
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
   *  function Example() {
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
   * Change the inline styles for each [[UIElement]].
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
   */
  defaultMonth?: Date;
  /**
   * Change the number of months displayed by the component. Defaults to `1`.
   *
   * See also [[pagedNavigation]].
   *
   * **Example**
   *
   * ```
   * function Example() {
   *  return <DayPicker numberOfMonths={2} />
   * };
   * ```
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
   * **Note** `dropdown` is valid only when `fromDate` or `toDate` are set.
   *
   * **Example**
   *
   * ```
   * function Example() {
   *  return (
   *    <DayPicker fromYear={2020} toYear={2025} captionLayout="dropdown" />
   * )};
   * ```
   */
  captionLayout?: CaptionLayout;

  /**
   * Paginate the month navigation displaying the [[numberOfMonths]] at time.
   *
   * **Example**
   *
   * ```
   * function Example() {
   *  return <DayPicker numberOfMonths={3} pagedNavigation />
   * };
   * ```
   */
  pagedNavigation?: boolean;
  /**
   * Render the months in reversed order (when [[numberOfMonths]] is greater
   * than `1`) to display the most recent month first.
   *
   * **Example**
   *
   * ```
   * function Example() {
   *  return <DayPicker numberOfMonths={5} reverseMonths />
   * };
   * ```
   */
  reverseMonths?: boolean;
  /**
   * The month to display in the calendar.
   *
   * As opposed to [[defaultMonth]], use this prop with [[onMonthChange]] to
   * change the month programmatically.
   *
   * **Example**
   *
   * Implement a button to go to today.
   *
   * ```
   * function Example() {
   *   const [month, setMonth] = useState();
   *   return (
   *     <>
   *       <DayPicker month={month} onMonthChange={setMonth} />
   *       <button onClick={() => setMonth(new Date())}>Go to Today</button>
   *     </>
   *   );
   * }
   * ```
   */
  month?: Date;
  /**
   * Display six weeks per months, regardless the month’s number of weeks.
   *
   * To use this prop, [[showOutsideDays]] must be set. Default to `false`.
   *
   * **Example**
   *
   * ```
   * function Example() {
   *  return <DayPicker showOutsideDays fixedWeeks />
   * };
   * ```
   */
  fixedWeeks?: boolean;
  /**
   * Hide the month’s head displaying the weekday names.
   *
   * **Example**
   *
   * ```
   * function Example() {
   *  return <DayPicker hideHead />
   * };
   * ```
   */
  hideHead?: boolean;
  /**
   * Show the outside days.  An outside day is a day falling in the next or the
   * previous month. Default is `false`.
   *
   * Outside days are not interactive as default. Use [[enableOutsideDaysClick]]
   * to make them clickable.
   *
   * **Example**
   *
   * ```
   * function Example() {
   *  return <DayPicker showOutsideDays />
   * };
   * ```
   */
  showOutsideDays?: boolean;
  /**
   * Enable the day click event for outside days when [[showOutsideDays]] is set.
   * Default to `false`.
   */
  enableOutsideDaysClick?: boolean;
  /**
   * Show the week numbers column. Default to `false`.
   *
   * **Example**
   *
   * ```
   * function Example() {
   *  return <DayPicker showWeekNumber />
   * };
   * ```
   */
  showWeekNumber?: boolean;
  /**
   * The default selected day(s).
   */
  defaultSelected?: Date | Date[] | DateRange | undefined;
  /**
   * The selection mode.
   *
   * - `single` (default) allows selecting only a single day
   * - `multiple` allows selecting multiple days
   * - `range` allows selecting a range of days
   * - `uncontrolled`: set the selections using the `selected` prop
   *
   * **Example**
   *
   * When setting to `uncontrolled`, handle the selection in the parent
   * component’ state:
   *
   * ```
   * function Example() {
   *  const [day, setDay] = useState(new Date());
   *  return (
   *    <DayPicker mode="uncontrolled" selected={day} onDayClick={setDay} />
   *  )
   * };
   * ```
   *
   */
  mode?: SelectMode;
  /**
   * When the selection type is controlled, require at least one day to be selected.
   */
  required?: boolean;
  /**
   * Apply the `selected` modifier to the matching days.
   *
   * **Example**
   *
   * ```
   * function Example() {
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
  selected?: Matcher;
  /**
   * Apply the `disabled` modifier to the matching days.
   *
   * **Example**
   *
   * ```
   * function Example() {
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
  disabled?: Matcher;
  /**
   * Apply the `hidden` modifier to the matching days – to hide them from the
   * calendar.
   *
   * **Example**
   *
   * ```
   * function Example() {
   *   return (
   *     <DayPicker
   *       defaultMonth={new Date(2021, 11)}
   *       hidden={{
   *         from: new Date(2021, 11, 14),
   *         to: new Date(2021, 11, 24)
   *       }}
   *     />
   *   );
   * }
   * ```
   */
  hidden?: Matcher;
  /**
   * The today’s date. Default is the current date.
   *
   * **Example**
   *
   * ```
   * function Example() {
   *   return <DayPicker today={new Date(2022, 2, 18)} />;
   * }
   * ```
   */
  today?: Date;
  /**
   * Add a custom modifier to the matching days.
   *
   * **Example**
   *
   * Add a `booked` modifier to the current day.
   *
   * ```
   * function Example() {
   *    return <DayPicker modifiers={{ booked: new Date() }} />
   * }
   * ```
   */
  modifiers?: ModifierMatchers;

  /**
   * A map of labels creators used for the ARIA labels attributes.
   */
  labels?: Partial<Labels>;

  /**
   * The date-fns locale object to localize the user interface. Defaults to English.
   *
   * See also date-fns [Internationalization guide](https://date-fns.org/v2.17.0/docs/I18n).
   *
   * **Example**
   *
   * Set the calendar to Spanish.
   *
   * ```
   * import spanish from 'date-fns/locale/es';
   *
   * function Example() {
   *   return <DayPicker locale={spanish} />;
   * }
   * ```
   */
  locale?: Locale;
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
   * function Example() {
   *   return <DayPicker locale={arabic} dir="rtl" />;
   * }
   * ```
   */
  dir?: string;

  /**
   * Change the default formatters.
   */
  formatters?: Partial<Formatters>;

  /**
   * Customize the internal components.
   */
  components?: Partial<Components>;

  /* Event handlers */
  /**
   * Event fired when the user navigates between months.
   */
  onMonthChange?: MonthChangeEventHandler;
  /**
   * Event fired when a day is selected.
   *
   * **Note:** This event is disabled when `mode='uncontrolled'`.
   */
  onSelect?: SelectEventHandler;
  /**
   * Event fired when multiple days are selected.
   *
   * **Note:** This event is disabled when `mode='uncontrolled'`.
   */
  onSelectMultiple?: SelectMultipleEventHandler;
  /**
   * Event fired when a range of days is selected.
   *
   * **Note:** This event is disabled when `mode='uncontrolled'`.
   */
  onSelectRange?: SelectRangeEventHandler;
  /**
   * Event fired when a day is clicked.
   */
  onDayClick?: DayClickEventHandler;
  /**
   * Event fired when a day button gets the focus.
   */
  onDayFocus?: DayFocusEventHandler;
  /**
   * Event fired when a day button loses the focus.
   */
  onDayBlur?: DayFocusEventHandler;
  /**
   * Event fired when the mouse enters the day button.
   */
  onDayMouseEnter?: DayMouseEventHandler;
  /**
   * Event fired when the mouse leaves the day button.
   */
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
