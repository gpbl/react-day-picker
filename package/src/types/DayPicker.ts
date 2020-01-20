import * as DateFns from "date-fns";

import {
  MatchingModifiers,
  ModifiersClassNames,
  ModifiersStyles,
  Modifier,
  Modifiers
} from "./Modifiers";

import { ClassNames } from "./ClassNames";

import { Styles } from "./Styles";
import { CaptionProps, CaptionFormatter } from "./Caption";
import { DayProps, DayFormatter } from "./Day";
import { NavigationProps } from "./Navigation";
import { WeekNumberProps, WeekNumberFormatter } from "./WeekNumber";
import { WeekdayNameFormatter } from "./Week";
/**
 * @category Components
 */
export type DayClickEventHandler = (
  day: Date,
  modifiers: MatchingModifiers,
  e: React.MouseEvent
) => void;

/**
 * @category Components
 */
export type MonthChangeEventHandler = (
  month: Date,
  e: React.MouseEvent
) => void;

/**
 * @category Components
 */
export interface Components {
  Caption: React.ComponentType<CaptionProps>;
  Day: React.ComponentType<DayProps>;
  Navigation: React.ComponentType<NavigationProps>;
  WeekNumber: React.ComponentType<WeekNumberProps>;
}

/**
 * @category Components
 */
export interface DayPickerProps {
  // #region CLASSNAMES
  className?: string;
  /**
   * The class names for each DayPicker element.
   */
  classNames: ClassNames;
  /**
   * The class names for the day modifiers specified via `modifiers`.
   */
  modifiersClassNames?: ModifiersClassNames;
  // #endregion

  // #region STYLES
  style?: React.CSSProperties;
  /**
   * The inline styles for each DayPicker element.
   */
  styles: Styles;
  /**
   * The inline-styles for the day modifiers specified via `modifiers`.
   */
  modifiersStyles?: ModifiersStyles;
  // #endregion

  // #region MONTH SETTINGS
  /**
   * The initial month to show in the calendar.
   */
  initialMonth?: Date;
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
  pagedNavigation?: boolean;
  /**
   * Render the months in reversed order. Useful when `numberOfMonths` is
   * greater than 1, to display the most recent month first.
   */
  reverseMonths?: boolean;
  /**
   * The rendered month. Passing this props will make the component switch to controlled mode?: this means you will need to implement `onMonthChange` to enable months navigation.
   */
  month?: Date;
  // #endregion

  // #region CUSTOMIZATION PROPS
  /**
   * Display 6 weeks per months, regardless the month’s number of weeks. Outside
   * days will be always shown if setting this to `true`. See also
   * `showOutsideDays`.
   */
  fixedWeeks?: boolean;
  /**
   * Show the month caption displaying the month and the year.
   */
  showCaption?: boolean;
  /**
   * Show the month head containing the weekday names.
   */
  showHead?: boolean;
  /**
   * Show the outside days. An outside day is a day displayed in a month but
   * falling in the next or the previous month. See also
   * `enableOutsideDaysClick`.
   */
  showOutsideDays?: boolean;
  /**
   * Enable click event for outside days. See also `showOutsideDays`.
   */
  enableOutsideDaysClick?: boolean;
  /**
   * Show the week numbers.
   */
  showWeekNumber: boolean;
  // #endregion

  // #region NAVIGATION
  /**
   * Show the navigation bar. `onMonthChange` must be set.
   */
  showNavigation?: boolean;
  /**
   * Label used for the previous month button in Navigation. Set it to empty
   * string to hide the button.
   */
  prevLabel?: string;
  /**
   * Label used for the next month button in Navigation. Set it to empty string
   * to hide the button.
   */
  nextLabel?: string;
  // #endregion

  // #region MODIFIERS
  /**
   * Style the matching days as selected.
   */
  selected?: Modifier;
  /**
   * Disable the matching days. Disabled days cannot be clicked.
   */
  disabled?: Modifier;
  /**
   * Hide the matching days.
   */
  hidden?: Modifier;
  /**
   * An object of modifiers.
   */
  modifiers?: Modifiers;
  // #endregion

  // #region LOCALIZATION
  /**
   * DateFns.Locale object used for localization.
   */
  locale: DateFns.Locale;
  /**
   * The text direction of the calendar. Use `ltr` for left-to-right (default)
   * or `rtl` for right-to-left.
   */
  dir?: string;
  // #endregion

  // #region FORMATTERS
  /**
   * Format the month caption text.
   *
   * @category Formatters
   */
  formatCaption: CaptionFormatter;
  /**
   * Format the content of the day element.
   *
   * @category Formatters
   */
  formatDay: DayFormatter;
  /**
   * Format the weekday's name in the head element.
   *
   * @category Formatters
   */
  formatWeekdayName: WeekdayNameFormatter;
  /**
   * Format the week numbers (when `showWeekNumber` is set).
   * * @category Formatters
   */
  formatWeekNumber: WeekNumberFormatter;
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
  onDayClick?: DayClickEventHandler;
  /**
   * Event handler when the month changes, e.g. when using the next/prev
   * navigation buttons.
   */
  onMonthChange?: MonthChangeEventHandler;
  /**
   * Event handler when the next navigation button is clicked.
   */
  onNextClick?: MonthChangeEventHandler;
  /**
   * Event handler when the prev navigation button is clicked.
   */
  onPrevClick?: MonthChangeEventHandler;
  // #endregion
}
