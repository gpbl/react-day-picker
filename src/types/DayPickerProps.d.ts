import { ClassNames } from './ClassNames';
import {
  Modifier,
  Modifiers,
  ModifiersStyles,
  ModifiersClassNames,
} from './Modifiers';
import { Styles } from './Styles';
import { Components } from './Components';

export interface FormatOptions {
  locale?: Locale;
}

export interface DayPickerProps {
  // #region CLASSNAMES
  className: string;
  /**
   * The class names for each DayPicker element.
   */
  classNames: ClassNames;
  /**
   * The class names for the day modifiers specified via the `modifiers`.
   */
  modifiersClassNames: ModifiersClassNames;
  // #endregion

  // #region STYLES
  style: React.CSSProperties;
  /**
   * The inline styles for each DayPicker element.
   */
  styles: Styles;
  /**
   * The inline-styles for the day modifiers specified via the `modifiers`.
   */
  modifiersStyles: ModifiersStyles;
  // #endregion

  // #region MONTH SETTINGS
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
   * Allow navigation only after this month. See also `toMonth`.
   */
  fromMonth?: Date;
  /**
   * Allow navigation only before this month. See also `fromMonth`.
   */
  toMonth?: Date;
  /**
   * When displaying multiple months, the navigation will be paginated
   * displaying the `numberOfMonths` months at time instead of one.
   */
  pagedNavigation: boolean;
  /**
   * Render the months in reversed order. Useful when `numberOfMonths` is
   * greater than 1, to display the most recent month first.
   */
  reverseMonths: boolean;
  // #endregion

  // #region CUSTOMIZATION PROPS
  /**
   * Display 6 weeks per months, regardless the month’s number of weeks. Outside
   * days will be always shown if setting this to `true`. See also
   * `showOutsideDays`.
   */
  fixedWeeks: boolean;
  /**
   * Show the month caption displaying the month and the year.
   */
  showCaption: boolean;
  /**
   * Show the month head containing the weekday names.
   */
  showHead: boolean;
  /**
   * Show the outside days. An outside day is a day displayed in a month but
   * falling in the next or the previous month. See also
   * `enableOutsideDaysClick`.
   */
  showOutsideDays: boolean;
  /**
   * Enable click event for outside days. See also `showOutsideDays`.
   */
  enableOutsideDaysClick: boolean;
  /**
   * Show the week numbers.
   */
  showWeekNumber: boolean;
  // #endregion

  // #region NAVIGATION
  /**
   * Show the navigation bar. `onMonthChange` must be set.
   */
  showNavigation: boolean;
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
  // #endregion

  // #region MODIFIERS
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
  // #endregion

  // #region LOCALIZATION
  /**
   * Locale object used for localization.
   */
  locale: Locale;
  /**
   * The text direction of the calendar (left-to-right or right-to-left).
   */
  dir?: string;
  // #endregion

  // #region FORMATTERS
  /**
   * Format the month caption text.
   */
  formatCaption: (month: Date, options?: FormatOptions) => string;
  /**
   * Format the content of the day element.
   */
  formatDay: (day: Date = new Date(), options?: FormatOptions) => string;
  /**
   * Format the weekday's name in the head element.
   */
  formatWeekdayName: (
    day: Date = new Date(),
    options?: FormatOptions
  ) => string;
  /**
   * Format the week numbers (when `showWeekNumber` is set).
   */
  formatWeekNumber: (weekNumber: number, options?: FormatOptions) => string;
  // #endregion

  // #region CUSTOM COMPONENTS
  /**
   * Components to extend DayPicker.
   */
  components: Components;
  // #endregion

  // #region EVENTS
  /**
   * Event handler when the user clicks on a day.
   */
  onDayClick?: (
    day: Date,
    modifiers: ModifiersValue,
    e: React.MouseEvent
  ) => void;
  /**
   * Event handler when the month changes, e.g. when using the next/prev
   * navigation buttons.
   */
  onMonthChange?: (month?: Date, e: React.MouseEvent) => void;
  /**
   * Event handler when the next navigation button is clicked.
   */
  onNextClick?: (month?: Date, e: React.MouseEvent) => void;
  /**
   * Event handler when the prev navigation button is clicked.
   */
  onPrevClick?: (month?: Date, e: React.MouseEvent) => void;
  /**
   * Event handler when the prev navigation button is clicked.
   */
  onStartClick?: (startDay: Date, e: React.MouseEvent) => void;
  // #endregion
}
