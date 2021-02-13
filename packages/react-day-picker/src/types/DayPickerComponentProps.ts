import * as dateFns from 'date-fns';
import {
  CustomizableComponents,
  DateFormatter,
  DayClickEventHandler,
  DayKeyboardEventHandler,
  DayMouseEventHandler,
  DayPickerClassNames,
  DayPickerStyles,
  DayTouchEventHandler,
  Matcher,
  ModifiersClassNames,
  ModifiersMatchers,
  ModifiersStyles,
  MonthChangeEventHandler,
  WeekNumberFormatter,
  LabelsFormatters,
  WeekdayFormatter,
  DayFocusEventHandler
} from 'types';

/**
 * The props for the [[DayPicker]] component.
 */
export interface DayPickerComponentProps {
  /**
   * A map of formatters for the ARIA labels used in the UI.
   */
  labelsFormatters: LabelsFormatters;

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
   * ```jsx showOutput open=no
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
  classNames?: DayPickerClassNames;
  /**
   * Change the class name for the day UI element matching the [[modifiers]].
   *
   * **Example**
   *
   * Add the `.with-circle` class of the days matching the `isToday` modifier.
   *
   * ```jsx
   * <DayPicker
   *  modifiers={{ isToday: new Date() }}
   *  modifiersClassNames={{ isToday: 'with-circle' }}
   * />
   * ```
   */
  modifiersClassNames?: ModifiersClassNames;

  /**
   * Style to apply to the root UI element.
   */
  style?: React.CSSProperties;
  /**
   * Change the inline styles for each UI element.
   */
  styles?: DayPickerStyles;
  /**
   * Change the inline style for the day UI element matching the [[modifiers]].
   *
   * **Example**
   *
   * Change the background color of the days matching the `isToday` modifier.
   *
   * ```jsx
   * <DayPicker
   *  modifiers={{ isToday: new Date() }}
   *  modifiersStyles={{ isToday: { backgroundColor: 'purple' } }}
   * />
   * ```
   */
  modifiersStyles?: ModifiersStyles;

  /**
   * The initial month to show in the calendar. Default is the current month.
   *
   * Notes
   *
   * - to know when the user changes the month, use [[onMonthChange]].
   * - to change the month programmatically, use the [[month]] prop.
   */
  initialMonth?: Date;
  /**
   * Change the number of months rendered by the component. Defaults to `1`.
   *
   * See also [[pagedNavigation]].
   *
   * **Example**
   *
   * ```jsx showOutput open=no
   * function Example() {
   *  return <DayPicker numberOfMonths={2} />
   * };
   * ```
   */
  numberOfMonths?: number;
  /**
   * Restrict the month navigation from the specified month. See also [[toMonth]].
   */
  fromMonth?: Date;
  /**
   * Restrict the month navigation to the specified month. See also [[fromMonth]].
   */
  toMonth?: Date;
  /**
   * When displaying more than one months, the navigation will be paginated
   * displaying the number of months at time (instead of one).
   *
   * Requires [[numberOfMonths]] to be set. Default to `false`.
   *
   * **Example**
   *
   * ```jsx showOutput open=no
   * function Example() {
   *  return <DayPicker numberOfMonths={2} pagedNavigation />
   * };
   * ```
   */
  pagedNavigation?: boolean;
  /**
   * Render the months in reversed order when [[numberOfMonths]] is greater than
   * `1` – to display the most recent month first.
   *
   * **Example**
   *
   * ```jsx showOutput open=no
   * function Example() {
   *  return <DayPicker numberOfMonths={5} reverseMonths />
   * };
   * ```
   */
  reverseMonths?: boolean;
  /**
   * The month to display in the calendar.
   *
   * As opposed to [[initialMonth]], use this prop with [[onMonthChange]] to
   * change the month programmatically. Implementing [[onMonthChange]] will also
   * enable months navigation.
   *
   * **Example**
   *
   * Implement a button to go to today.
   *
   * ```jsx showOutput open=no
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
   * ```jsx showOutput open=no
   * function Example() {
   *  return <DayPicker showOutsideDays fixedWeeks />
   * };
   * ```
   */
  fixedWeeks?: boolean;
  /**
   * Show the month’s caption. As default, the caption displays month and year.
   *
   * **Example**
   *
   * ```jsx showOutput open=no
   * function Example() {
   *  return <DayPicker showCaption={false} />
   * };
   * ```
   */
  showCaption?: boolean;
  /**
   * Show the month’s head. As default, it displays the weekday names according
   * to [[locale]].
   *
   * **Example**
   *
   * ```jsx showOutput open=no
   * function Example() {
   *  return <DayPicker showHead={false} />
   * };
   * ```
   */
  showHead?: boolean;
  /**
   * Show the outside days.
   *
   * An outside day is a day falling in the next or the previous month. Default
   * is `false`.
   *
   * Outside days are not interactive as default. Use [[enableOutsideDaysClick]]
   * to make them clickable.
   *
   * **Example**
   *
   * ```jsx showOutput open=no
   * function Example() {
   *  return <DayPicker showOutsideDays />
   * };
   * ```
   */
  showOutsideDays?: boolean;
  /**
   * Enable the dayclick event for outside days when [[showOutsideDays]] is set.
   * Default to `false`.
   */
  enableOutsideDaysClick?: boolean;
  /**
   * Show the week numbers column. Default to `false`.
   *
   * **Example**
   *
   * ```jsx showOutput open=no
   * function Example() {
   *  return <DayPicker showWeekNumber />
   * };
   * ```
   */
  showWeekNumber?: boolean;

  /**
   * Show the month navigation bar. Default is `true`.
   *
   * When using [[month]], make sure you set [[onMonthChange]] to make the
   * navigation appear.
   *
   * **Example**
   *
   * ```jsx showOutput open=no
   * function Example() {
   *  return <DayPicker showNavigation={false} />
   * };
   * ```
   */
  showNavigation?: boolean;
  /**
   * Apply the `selected` modifier to the matching days.
   *
   * **Example**
   *
   * ```jsx showOutput open=no
   * function Example() {
   *   return (
   *     <DayPicker
   *       initialMonth={new Date(2021, 11)}
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
   * ```jsx showOutput open=no
   * function Example() {
   *   return (
   *     <DayPicker
   *       initialMonth={new Date(2021, 11)}
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
   * ```jsx showOutput open=no
   * function Example() {
   *   return (
   *     <DayPicker
   *       initialMonth={new Date(2021, 11)}
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
   * The today’s date. Default is the current date. Adds the `today` modifier to
   * the day cell.
   *
   * Set it to `off` to disable the today date.
   *
   * **Example**
   *
   * ```jsx showOutput open=no
   * function Example() {
   *   return <DayPicker today={new Date(2022, 2, 18)} />;
   * }
   * ```
   */
  today?: Date | 'off';
  /**
   * Add a custom modifier to the matching days.
   *
   * **Example**
   *
   * Add a `booked` modifier to the current day.
   *
   * ```
   * <DayPicker modifiers={{ booked: new Date() }}
   * />
   * ```
   */
  modifiers?: ModifiersMatchers;

  /**
   * The date-fns locale object to localize the user interface. Defaults to English.
   *
   * See also DateFns [Internationalization guide](https://date-fns.org/v2.17.0/docs/I18n)/
   *
   * **Example**
   *
   * Set the calendar to Spanish.
   *
   * ```jsx showOutput open=no
   * import spanish from 'date-fns/locale/es';
   *
   * function Example() {
   *   return <DayPicker locale={spanish} />;
   * }
   * ```
   */
  locale?: dateFns.Locale;
  /**
   * The text direction of the calendar. Use `ltr` for left-to-right (default)
   * or `rtl` for right-to-left.
   */
  dir?: string;

  /**
   * Format the month caption text.
   */
  formatCaption?: DateFormatter;
  /**
   * Format the content of the day element.
   */
  formatDay?: DateFormatter;
  /**
   * Format the weekday's name in the head element.
   */
  formatWeekdayName?: WeekdayFormatter;
  /**
   * Format the week numbers (when [[showWeekNumber]] is set).
   */
  formatWeekNumber?: WeekNumberFormatter;

  /**
   * Customize the internal components.
   */
  components?: CustomizableComponents;

  /* Event handlers */
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
  onMonthChange?: MonthChangeEventHandler;
  onNextClick?: MonthChangeEventHandler;
  onPrevClick?: MonthChangeEventHandler;
}
