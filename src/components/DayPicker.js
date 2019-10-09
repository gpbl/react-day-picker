import React from 'react';
import PropTypes from 'prop-types';
import { getTime } from 'date-fns';

import deprecated from './utils/deprecated';

import { prepareDayPicker } from './helpers';
import defaultProps from './defaultProps';
import defaultClassNames from './defaultClassNames';

function DayPicker(initialProps) {
  const props = {
    ...initialProps,
    components: {
      ...defaultProps.components,
      ...initialProps.components,
    },
    classNames: {
      ...defaultClassNames,
      ...initialProps.classNames,
    },
  };
  const style = {
    ...props.styles.container,
    ...props.styles,
  };

  let className = [props.classNames.container];
  if (props.className) {
    className.push(props.className.split(' '));
  }
  className = className.join(' ');

  const { months } = prepareDayPicker(props);
  const { Navigation, Month } = props.components;

  return (
    <div className={className} style={style} dir={props.dir}>
      {props.showNavigation && <Navigation dayPickerProps={props} />}
      <div className={props.classNames.months} style={props.styles.months}>
        {months.map(month => (
          <Month
            key={getTime(month)}
            month={month}
            months={months}
            dayPickerProps={props}
          />
        ))}
      </div>
    </div>
  );
}

DayPicker.defaultProps = defaultProps;
DayPicker.propTypes = {
  // STYLE AND CLASSES
  style: PropTypes.object,
  styles: PropTypes.shape({
    container: PropTypes.object,
    caption: PropTypes.object,

    // Day Component
    day: PropTypes.object,
    dayWrapper: PropTypes.object,

    // Month Component
    month: PropTypes.object,
    monthTable: PropTypes.object,
    monthTbody: PropTypes.object,
    months: PropTypes.object,

    // Head Components
    head: PropTypes.object,
    headRow: PropTypes.object,
    headWeekNumber: PropTypes.object,
    headWeekName: PropTypes.object,

    // Navigation Component
    nav: PropTypes.object,
    navStart: PropTypes.object,
    navPrev: PropTypes.object,
    navNext: PropTypes.object,

    // Week Component
    week: PropTypes.object,
    weekNumber: PropTypes.object,
    weekDay: PropTypes.object,

    // Modifiers
    modifiers: PropTypes.object,
  }),

  className: PropTypes.string,
  classNames: PropTypes.shape({
    container: PropTypes.string,
    caption: PropTypes.string,

    // Day Component
    day: PropTypes.string,
    dayWrapper: PropTypes.string,

    // Month Component
    month: PropTypes.string,
    monthTable: PropTypes.string,
    monthTbody: PropTypes.string,
    months: PropTypes.string,

    // Head Components
    head: PropTypes.string,
    headRow: PropTypes.string,
    headWeekNumber: PropTypes.string,
    headWeekName: PropTypes.string,

    // Navigation Component
    nav: PropTypes.string,
    navStart: PropTypes.string,
    navPrev: PropTypes.string,
    navNext: PropTypes.string,

    // Week Component
    week: PropTypes.string,
    weekNumber: PropTypes.string,
    weekDay: PropTypes.string,

    // Modifiers
    modifiers: PropTypes.object,
  }),

  // MONTH RENDERING PROPS

  /**
   * The month to show in the calendar.
   */
  month: PropTypes.instanceOf(Date),

  /**
   * The number of months to show in the date picker. See also `pagedNavigation`
   * and `reverseMonths`.
   */
  numberOfMonths: PropTypes.number,

  /**
   * Allow navigation only after this month.
   *
   * See also `toMonth`.
   */
  fromMonth: PropTypes.instanceOf(Date),

  /**
   * Allow navigation only before this month.
   *
   * See also `fromMonth`.
   */
  toMonth: PropTypes.instanceOf(Date),

  /**
   * When displaying multiple months, the navigation will be paginated
   * displaying the `numberOfMonths` months at time instead of one.
   */
  pagedNavigation: PropTypes.bool,

  /**
   * Render the months in reversed order. Useful when `numberOfMonths` is
   * greater than 1, to display the most recent month first.
   */
  reverseMonths: PropTypes.bool,

  // Deprecated props
  /**
   * Enable navigation between months.
   *
   * @deprecated Use `showNavigation` prop instead.
   */
  canChangeMonth: deprecated(
    PropTypes.bool,
    'Use "showNavigation" prop instead.'
  ),

  /**
   * The month to display in the calendar at first render.
   *
   * @deprecated Use `month` prop instead
   */
  initialMonth: deprecated(
    PropTypes.instanceOf(Date),
    'Use `month` prop instead.'
  ),

  /**
   * Display a button to switch to the current month using the provided string
   * as label.
   *
   * @deprecated Use `startLabel` prop instead.
   */
  todayButton: deprecated(PropTypes.string, 'Use "startLabel" prop instead.'),

  // CUSTOMIZATION PROPS

  /**
   * Display 6 weeks per months, regardless the month’s number of weeks. Outside
   * days will be always shown if setting this to `true`. See also
   * `showOutsideDays`.
   */
  fixedWeeks: PropTypes.bool,

  /**
   * Show the month caption displaying the month and the year.
   */
  showCaption: PropTypes.bool,

  /**
   * Show the month head containing the weekday names.
   */
  showHead: PropTypes.bool,

  /**
   * Show the outside days. An outside day is a day displayed in a month but
   * falling in the next or the previous month. See also
   * `enableOutsideDaysClick`.
   */
  showOutsideDays: PropTypes.bool,

  /**
   * Enable click event for outside days. See also `showOutsideDays`.
   */
  enableOutsideDaysClick: PropTypes.bool,

  /**
   * Display the weekday names in the calendar header.
   *
   * @deprecated Use `showHead` prop instead.
   */
  showWeekDays: deprecated(PropTypes.bool, 'Use "showHead" prop instead.'),

  /**
   * Show the week numbers. See also `onWeekNumberClick`.
   */
  showWeekNumber: PropTypes.bool,

  // NAVIGATION

  /**
   * Show the navigation bar. `onMonthChange` must be set.
   */
  showNavigation: PropTypes.bool,

  /**
   * The date passed when clicking the start button in the navigation.
   */
  startDay: PropTypes.instanceOf(Date).isRequired,

  /**
   * Label used for the start button in Navigation. Set it to empty string to
   * hide the button.
   */
  startLabel: PropTypes.string,

  /**
   * Label used for the previous month button in Navigation. Set it to empty
   * string to hide the button.
   */
  prevLabel: PropTypes.string,

  /**
   * Label used for the next month button in Navigation. Set it to empty string
   * to hide the button.
   */
  nextLabel: PropTypes.string,

  // MODIFIERS

  /**
   * Days that should appear as selected.
   */
  selected: PropTypes.instanceOf('Modifier'),

  /**
   * Days that should appear as selected.
   *
   * @deprecated Use `selected` instead.
   */
  selectedDays: deprecated(PropTypes.any),

  /**
   * Days that should appear as disabled.
   */
  disabled: PropTypes.instanceOf('Modifier'),
  /**
   * Days that should appear as disabled.
   *
   * @deprecated Use `disabled` instead.
   */
  disabledDays: deprecated(PropTypes.any),

  /**
   * Days that should not appear in the calendar.
   */
  hidden: PropTypes.instanceOf('Modifier'),

  /**
   * An object of modifiers.
   */
  modifiers: PropTypes.object,

  // LOCALIZATION

  /**
   * Locale object for localization.
   */
  locale: PropTypes.object,

  /**
   * The text direction.
   */
  dir: PropTypes.oneOf(['left', 'right']),

  /**
   * Format the month caption text.
   *
   * The formatter receives the month (as `Date` object) as first argument, and
   * an option object with `locale` as second argument. It must return a string.
   *
   * The default format is "Month Year".
   */
  formatCaption: PropTypes.func.isRequired,

  /**
   * Format the content of the day element.
   *
   * The formatter receives the day (as `Date` object) as first argument, and an option
   * object with `locale` as second argument. It must return a string.
   *
   * Default is the day's date.
   */
  formatDay: PropTypes.func.isRequired,

  /**
   * Format the weekday's name in the head element.
   *
   * The formatter receives the day (as `Date` object) as first argument, and an option
   * object with `locale` as second argument. It must return a string.
   */
  formatWeekdayName: PropTypes.func.isRequired,

  /**
   * Format the week numbers (when `showWeekNumber` is set).
   *
   * The formatter receives the week number as first argument, and an option
   * object with `locale` as second argument. It must return a string.
   */
  formatWeekNumber: PropTypes.func.isRequired,

  /* #region CUSTOM COMPONENTS */

  /**
   * React components replacing the native ones.
   *
   * TODO: better description
   */
  components: PropTypes.shape({
    Caption: PropTypes.element,
    Day: PropTypes.element,
    Head: PropTypes.element,
    Month: PropTypes.element,
    Navigation: PropTypes.element,
    Week: PropTypes.element,
  }),

  /* #endregion */

  // EVENTS

  /**
   * Event handler when the user clicks on a day. Receives a `DateWithModifiers`
   * object as first argument, and the native event as second argument.
   */
  onDayClick: PropTypes.func,

  /**
   * Event handler when the month changes, e.g. when using the next/prev
   * navigation buttons. Receives a `Date` object as first argument, and the
   * native event as second argument.
   */
  onMonthChange: PropTypes.func,

  /**
   * Event handler when the next navigation button is clicked. Receives a `Date`
   * object as first argument, and the native event as second argument.
   */
  onNextClick: PropTypes.func,

  /**
   * Event handler when the prev navigation button is clicked. Receives a `Date`
   * object as first argument, and the native event as second argument.
   */
  onPrevClick: PropTypes.func,
};

export default DayPicker;
