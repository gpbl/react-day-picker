import * as dateFns from "date-fns";

import { MonthCaptionProps, MonthCaptionFormatter } from "../../MonthCaption";
import { DayProps, DayFormatter } from "../../Day";
import { NavigationProps } from "../../Navigation";
import { WeekNumberProps, WeekNumberFormatter } from "../../WeekNumber";
import { WeekdayNameFormatter } from "../../WeekRow";

import {
  MatchingModifiers,
  ModifiersClassNames,
  ModifiersStyles,
  DayMatcher,
  DayModifiers
} from "./Modifiers";

import { DayPickerElements } from "./DayPickerElements";

/**
 * Names of the CSS classes for each UI element.
 */
export type DayPickerClassNames = {
  [name in DayPickerElements]?: string;
};
/**
 * Inline `style` for each UI element.
 */
export type DayPickerStyles = {
  [name in DayPickerElements]?: React.CSSProperties;
};

/**
 * Event handler when a day is clicked.
 */
export type DayClickEventHandler = (
  day: Date,
  modifiers: MatchingModifiers,
  e: React.MouseEvent
) => void;

/**
 * Event handler when the month is changed.
 */
export type MonthChangeEventHandler = (
  month: Date,
  e: React.MouseEvent
) => void;

/**
 * Components that can be [swizzled](./docs/swizzling).
 */
export type SwizzlingComponents = {
  /** A [[MonthCaption]] component. */
  MonthCaption: React.ComponentType<MonthCaptionProps>;
  /** A [[Day]] component. */
  Day: React.ComponentType<DayProps>;
  /** A [[Navigation]] component. */
  Navigation: React.ComponentType<NavigationProps>;
  /** A [[WeekNumber]] component. */
  WeekNumber: React.ComponentType<WeekNumberProps>;
};

/**
 * The props used by the [[DayPicker]] component.
 */
export interface DayPickerProps {
  /**
   * CSS class to add to the root element.
   */
  className?: string;
  /**
   * Change the class names used by `DayPicker`.
   *
   * Use this prop when you cannot style the CSS using the
   * [[defaultClassNames]], for example when using CSS modules.
   *
   * ```jsx
   * import { selected, disabled } from './styles.css';
   * <DayPicker classNames={{ selected, disabled }} />
   * ````
   */
  classNames?: DayPickerClassNames;
  /**
   * Change the class names used for the day [[modifiers]].
   */
  modifiersClassNames?: ModifiersClassNames;

  /**
   * Style to apply to the root element.
   */
  style?: React.CSSProperties;
  /**
   * Inline styles to apply to the [[DayPickerElements]].
   */
  styles?: DayPickerStyles;
  /**
   * Change the inline style for the day [[modifiers]].
   */
  modifiersStyles?: ModifiersStyles;

  /**
   * The initial month to show in the calendar.
   */
  initialMonth?: Date;
  /**
   * The number of months to render.
   *
   * See also [[pagedNavigation]].
   */
  numberOfMonths?: number;
  /**
   * Allow navigation after (and including) the specified month.
   *
   * See also [[toMonth]].
   */
  fromMonth?: Date;
  /**
   * Allow navigation before (and including) the specified month.
   *
   * See also [[fromMonth]].
   */
  toMonth?: Date;
  /**
   * When displaying multiple months, the navigation will be paginated
   * displaying the [[numberOfMonths]] months at time instead of one.
   */
  pagedNavigation?: boolean;
  /**
   * Render the months in reversed order. Useful when [[numberOfMonths]] is
   * greater than `1`, to display the most recent month first.
   */
  reverseMonths?: boolean;
  /**
   * The rendered month. Implement [[onMonthChange]] to enable months
   * navigation.
   */
  month?: Date;
  /**
   * Display six weeks per months, regardless the month’s number of weeks. Outside
   * days will be always shown when setting this prop.
   *
   * See also [[showOutsideDays]].
   */
  fixedWeeks?: boolean;
  /**
   * Show the month’s caption. As default, the caption displays month and year.
   *
   * - use [[formatCaption]] to localize the content of the caption
   * - [swizzle](../docs/swizzling) this component using the [[swizzle]] prop
   */
  showCaption?: boolean;
  /**
   * Show the month’s head. As default, it displays the weekday names according
   * to [[locale]].
   */
  showHead?: boolean;
  /**
   * Show the outside days. An outside day is a day falling in the next or the
   * previous month.
   *
   * See also [[enableOutsideDaysClick]].
   */
  showOutsideDays?: boolean;
  /**
   * Enable click event for outside days when [[showOutsideDays]] is used.
   */
  enableOutsideDaysClick?: boolean;
  /**
   * Show the week numbers column.
   */
  showWeekNumber?: boolean;

  /**
   * Show the navigation bar. [[onMonthChange]] must be set.
   */
  showNavigation?: boolean;
  /**
   * Label used for the previous month button in [[Navigation]]. Set it to
   * empty string to hide the button.
   */
  prevLabel?: string;
  /**
   * Label used for the next month button in [[Navigation]]. Set it to empty
   * string to hide the button.
   */
  nextLabel?: string;

  /**
   * Style the matching days as selected.
   */
  selected?: DayMatcher;
  /**
   * Disable the matching days. Disabled days cannot be clicked.
   */
  disabled?: DayMatcher;
  /**
   * Hide the matching days.
   */
  hidden?: DayMatcher;
  /**
   * An object of modifiers.
   */
  modifiers?: DayModifiers;

  /**
   * A [`dateFns.Locale`](https://date-fns.org/docs/Locale) object to localize
   * the user interface.
   */
  locale?: dateFns.Locale;
  /**
   * The text direction of the calendar. Use `ltr` for left-to-right (default)
   * or `rtl` for right-to-left.
   */
  dir?: string | undefined;

  /**
   * Format the month caption text.
   *
   * @default See [[defaultFormatCaption]].
   */
  formatCaption?: MonthCaptionFormatter;
  /**
   * Format the content of the day element.
   *
   * @default See [[defaultFormatDay]].
   */
  formatDay?: DayFormatter;
  /**
   * Format the weekday's name in the head element.
   *
   * @default See [[defaultFormatWeekdayName]].
   */
  formatWeekdayName?: WeekdayNameFormatter;
  /**
   * Format the week numbers (when [[showWeekNumber]] is set).
   *
   * @default See [[defaultFormatWeekNumber]].
   */
  formatWeekNumber?: WeekNumberFormatter;

  /**
   * The components to [swizzle](./docs/swizzling).
   */
  swizzle?: SwizzlingComponents;

  /**
   * Event handler when the user clicks on a day.
   */
  onDayClick?: DayClickEventHandler;
  /**
   * Event handler when the month changes.
   */
  onMonthChange?: MonthChangeEventHandler;
  /**
   * Event handler when the next month button is clicked.
   */
  onNextClick?: MonthChangeEventHandler;
  /**
   * Event handler when the previous month button is clicked.
   */
  onPrevClick?: MonthChangeEventHandler;
}
