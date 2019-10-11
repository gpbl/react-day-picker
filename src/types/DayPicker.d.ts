import { ClassNames } from './ClassNames';
import { Modifier, Modifiers } from './Modifier';
import { Styles } from './Styles';

export interface DayPicker {
  classNames: ClassNames;
  styles: Styles;
  className: string;
  style: object;

  /**
   * The month to show in the calendar.
   */
  month: Date;

  /**
   * The number of months to show in the date picker. See also `pagedNavigation`
   * and `reverseMonths`.
   */
  numberOfMonths: number;

  /**
   * Allow navigation only after this month.
   *
   * See also `toMonth`.
   */
  fromMonth?: Date;

  /**
   * Allow navigation only before this month.
   *
   * See also `fromMonth`.
   */
  toMonth?: Date;

  /**
   * When displaying multiple months, the navigation will be paginated
   * displaying the `numberOfMonths` months at time instead of one.
   */
  pagedNavigation: Boolean;

  /**
   * Render the months in reversed order. Useful when `numberOfMonths` is
   * greater than 1, to display the most recent month first.
   */
  reverseMonths: Boolean;

  // CUSTOMIZATION PROPS

  /**
   * Display 6 weeks per months, regardless the month’s number of weeks. Outside
   * days will be always shown if setting this to `true`. See also
   * `showOutsideDays`.
   */
  fixedWeeks: Boolean;

  /**
   * Show the month caption displaying the month and the year.
   */
  showCaption: Boolean;

  /**
   * Show the month head containing the weekday names.
   */
  showHead: Boolean;

  /**
   * Show the outside days. An outside day is a day displayed in a month but
   * falling in the next or the previous month. See also
   * `enableOutsideDaysClick`.
   */
  showOutsideDays: Boolean;

  /**
   * Enable click event for outside days. See also `showOutsideDays`.
   */
  enableOutsideDaysClick: Boolean;

  /**
   * Show the week numbers. See also `onWeekNumberClick`.
   */
  showWeekNumber: Boolean;

  // NAVIGATION

  /**
   * Show the navigation bar. `onMonthChange` must be set.
   */
  showNavigation: Boolean;

  /**
   * The date passed when clicking the start button in the navigation.
   */
  startDay: Date;

  /**
   * Label used for the start button in Navigation. Set it to empty string to
   * hide the button.
   */
  startLabel: string;

  /**
   * Label used for the previous month button in Navigation. Set it to empty
   * string to hide the button.
   */
  prevLabel: string;

  /**
   * Label used for the next month button in Navigation. Set it to empty string
   * to hide the button.
   */
  nextLabel: string;

  // MODIFIERS

  /**
   * Days that should appear as selected.
   */
  selected?: Modifier;

  /**
   * Days that should appear as disabled.
   */
  disabled?: Modifier;

  /**
   * Days that should not appear in the calendar.
   */
  hidden?: Modifier;

  /**
   * An object of modifiers.
   */
  modifiers?: Modifiers;

  // LOCALIZATION

  /**
   * Locale object for localization.
   */
  locale: Locale;

  /**
   * The text direction.
   */
  dir?: string;

  /**
   * Format the month caption text.
   *
   * The formatter receives the month (as `Date` object) as first argument, and
   * an option object with `locale` as second argument. It must return a String.
   *
   * The default format is "Month Year".
   */
  formatCaption: Function;

  /**
   * Format the content of the day element.
   *
   * The formatter receives the day (as `Date` object) as first argument, and an option
   * object with `locale` as second argument. It must return a String.
   *
   * Default is the day's date.
   */
  formatDay: Function;

  /**
   * Format the weekday's name in the head element.
   *
   * The formatter receives the day (as `Date` object) as first argument, and an option
   * object with `locale` as second argument. It must return a String.
   */
  formatWeekdayName: Function;

  /**
   * Format the week numbers (when `showWeekNumber` is set).
   *
   * The formatter receives the week number as first argument, and an option
   * object with `locale` as second argument. It must return a String.
   */
  formatWeekNumber: Function;

  /* #region CUSTOM COMPONENTS */

  /**
   * React components replacing the native ones.
   *
   * TODO?: better description
   */
  components: Components;

  /* #endregion */

  // EVENTS

  /**
   * Event handler when the user clicks on a day. Receives a `DateWithModifiers`
   * object as first argument, and the native event as second argument.
   */
  onDayClick?: Function;

  /**
   * Event handler when the month changes, e.g. when using the next/prev
   * navigation buttons. Receives a `Date` object as first argument, and the
   * native event as second argument.
   */
  onMonthChange?: Function;

  /**
   * Event handler when the next navigation button is clicked. Receives a `Date`
   * object as first argument, and the native event as second argument.
   */
  onNextClick?: Function;

  /**
   * Event handler when the prev navigation button is clicked. Receives a `Date`
   * object as first argument, and the native event as second argument.
   */
  onPrevClick?: Function;

  /**
   * Event handler when the prev navigation button is clicked. Receives a `Date`
   * object as first argument, and the native event as second argument.
   */
  onStartClick?: Function;
}
