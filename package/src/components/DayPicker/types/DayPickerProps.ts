import * as dateFns from "date-fns";

import { CaptionProps, CaptionFormatter } from "../../Caption";
import { DayProps, DayFormatter } from "../../Day";
import { NavigationProps } from "../../Navigation";
import { WeekNumberProps, WeekNumberFormatter } from "../../WeekNumber";
import { WeekdayNameFormatter } from "../../Week";

import {
  MatchingModifiers,
  ModifiersClassNames,
  ModifiersStyles,
  Modifiers,
  DayModifier
} from "./Modifiers";

import { ClassNames } from "./ClassNames";
import { InlineStyles } from "./Styles";

/** Event handler when a day is clicked */
export type DayClickEventHandler = (
  day: Date,
  modifiers: MatchingModifiers,
  e: React.MouseEvent
) => void;

/** Event handler when the month changed */
export type MonthChangeEventHandler = (
  month: Date,
  e: React.MouseEvent
) => void;

/** Components that can be swizzled */
export type SwizzlingComponents = {
  Caption: React.ComponentType<CaptionProps>;
  Day: React.ComponentType<DayProps>;
  Navigation: React.ComponentType<NavigationProps>;
  WeekNumber: React.ComponentType<WeekNumberProps>;
};

/**
 * The props used by the {@link DayPicker} component.
 */
export interface DayPickerProps {
  /**
   * @ignore
   */
  className?: string;
  /**
   * The CSS classes to use for each DayPicker element.
   *
   * See {@link defaultClassNames} for the defaults.
   */
  classNames?: ClassNames;
  /**
   * The class names for the day {@link modifiers}.
   */
  modifiersClassNames?: ModifiersClassNames;

  /**
   * @ignore
   */
  style?: React.CSSProperties;
  /**
   * The inline styles for each DayPicker element.
   */
  styles?: InlineStyles;
  /**
   * The inline-styles for the day {@link modifiers}.
   */
  modifiersStyles?: ModifiersStyles;

  /**
   * The initial month to show in the calendar.
   */
  initialMonth?: Date;
  /**
   * The number of months to display at tha same time.
   *
   * See also {@link pagedNavigation}.
   */
  numberOfMonths?: number;
  /**
   * Allow navigation only after this month.
   *
   * See also {@link toMonth}.
   */
  fromMonth?: Date;
  /**
   * Allow navigation only before this month.
   *
   * See also {@link fromMonth}.
   */
  toMonth?: Date;
  /**
   * When displaying multiple months, the navigation will be paginated
   * displaying the {@link numberOfMonths} months at time instead of one.
   */
  pagedNavigation?: boolean;
  /**
   * Render the months in reversed order. Useful when {@link numberOfMonths} is
   * greater than 1, to display the most recent month first.
   */
  reverseMonths?: boolean;
  /**
   * The rendered month. Implement {@link onMonthChange} to enable months
   * navigation.
   */
  month?: Date;

  /**
   * Display 6 weeks per months, regardless the month’s number of weeks. Outside
   * days will be always shown if setting this to `true`.
   *
   * See also {@link showOutsideDays}.
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
   * falling in the next or the previous month.
   *
   * See also {@link enableOutsideDaysClick}.
   */
  showOutsideDays?: boolean;
  /**
   * Enable click event for outside days when {@link showOutsideDays} is used.
   */
  enableOutsideDaysClick?: boolean;
  /**
   * Show the week numbers.
   */
  showWeekNumber?: boolean;

  /**
   * Show the navigation bar. {@link onMonthChange} must be set.
   */
  showNavigation?: boolean;
  /**
   * Label used for the previous month button in {@link Navigation}. Set it to
   * empty string to hide the prev button.
   */
  prevLabel?: string;
  /**
   * Label used for the next month button in {@link Navigation}. Set it to empty
   * string to hide the next button.
   */
  nextLabel?: string;

  /**
   * Style the matching days as selected.
   */
  selected?: DayModifier;
  /**
   * Disable the matching days. Disabled days cannot be clicked.
   */
  disabled?: DayModifier;
  /**
   * Hide the matching days.
   */
  hidden?: DayModifier;
  /**
   * An object of modifiers.
   */
  modifiers?: Modifiers;

  /**
   * A [`dateFns.Locale`](https://date-fns.org/docs/Locale) object to localize
   * the user interface.
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
  formatCaption?: CaptionFormatter;
  /**
   * Format the content of the day element.
   */
  formatDay?: DayFormatter;
  /**
   * Format the weekday's name in the head element.
   */
  formatWeekdayName?: WeekdayNameFormatter;
  /**
   * Format the week numbers (when `showWeekNumber` is set).
   *
   */
  formatWeekNumber?: WeekNumberFormatter;

  /**
   * Components to extend DayPicker.
   */
  swizzle?: SwizzlingComponents;

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
}
