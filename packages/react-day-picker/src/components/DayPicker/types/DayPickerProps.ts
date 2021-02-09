import * as dateFns from 'date-fns';

import { DayFormatter } from '../../Day';
import { MonthCaptionFormatter } from '../../MonthCaption';
import { WeekNumberFormatter } from '../../WeekNumber';
import { WeekdayNameFormatter } from '../../WeekRow';
import { CustomComponents } from './CustomComponents';
import { DayClickEventHandler } from './DayClickEventHandler';
import { DayPickerClassNames } from './DayPickerClassNames';
import { DayPickerStyles } from './DayPickerStyles';
import { Matcher } from './Matcher';
import { ModifiersClassNames, ModifiersStyles } from './Modifiers';
import { ModifiersMatchers } from './ModifiersMatchers';
import { MonthChangeEventHandler } from './MonthChangeEventHandler';

/**
 * The props of the [[DayPicker]] component.
 */
export interface DayPickerProps {
  /**
   * CSS class to add to the root element
   */
  className?: string;
  /**
   * Change the class names used by `DayPicker`.
   *
   * Use this prop when you need to change the default class
   * names — for example when using CSS modules.
   *
   * **Example**. Use of custom class names for the head and the caption
   * elements:
   *
   * ```jsx showOutput
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
  classNames?: DayPickerClassNames;
  /**
   * Change the class names used for the [modifiers](#day).
   */
  modifiersClassNames?: ModifiersClassNames;

  /**
   * Style to apply to the root element.
   */
  style?: React.CSSProperties;
  /**
   * Change the inline styles for each [DayPicker element](./enumerations#daypickerelements).
   */
  styles?: DayPickerStyles;
  /**
   * Change the inline style for each modifier.
   */
  modifiersStyles?: ModifiersStyles;

  /**
   * The initial month to show in the calendar.
   */
  initialMonth?: Date;
  /**
   * The number of months to render.
   *
   * @see pagedNavigation
   */
  numberOfMonths?: number;
  /**
   * Allow navigation after (and including) the specified month.
   *
   * @see toMonth
   */
  fromMonth?: Date;
  /**
   * Allow navigation before (and including) the specified month.
   *
   * @see fromMonth
   */
  toMonth?: Date;
  /**
   * When displaying multiple months, the navigation will be paginated
   * displaying the [numberOfMonths](#numberofmonths) months at time instead of
   * one.
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
   * @default false
   * @see [showOutsideDays](#showoutsidedays)
   */
  fixedWeeks?: boolean;
  /**
   * Show the month’s caption. As default, the caption displays month and year.
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
   * @see enableOutsideDaysClick
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
   * Apply the `selected` modifier to the matching days.
   */
  selected?: Matcher;
  /**
   * Add the `disabled` modifier for the matching days. Interaction with
   * disabled days is disabled.
   */
  disabled?: Matcher;
  /**
   * Add the `hidden` modifier for the matching days. Days with the `hidden`
   * modifier won’t display in the calendar.
   */
  hidden?: Matcher;
  /**
   * The today’s date. Default is the current date.
   */
  today?: Date | 'off';
  /**
   * Add a custom modifier to the matching days.
   */
  modifiers?: ModifiersMatchers;

  /**
   * The date-fns locale object to localize the user interface. Defaults to English.
   */
  locale: dateFns.Locale;
  /**
   * The text direction of the calendar. Use `ltr` for left-to-right (default)
   * or `rtl` for right-to-left.
   */
  dir?: string;

  /**
   * Format the month caption text.
   *
   * @default See [[defaultFormatCaption]].
   */
  formatCaption: MonthCaptionFormatter;
  /**
   * Format the content of the day element.
   *
   * @default See [[defaultFormatDay]].
   */
  formatDay: DayFormatter;
  /**
   * Format the weekday's name in the head element.
   *
   * @default See [[defaultFormatWeekdayName]].
   */
  formatWeekdayName: WeekdayNameFormatter;
  /**
   * Format the week numbers (when [[showWeekNumber]] is set).
   *
   * @default See [[defaultFormatWeekNumber]].
   */
  formatWeekNumber: WeekNumberFormatter;

  /**
   * Customize the internal components.
   */
  components?: CustomComponents;

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
