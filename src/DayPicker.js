import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Caption from './Caption';
import Navbar from './Navbar';
import Month from './Month';
import Weekday from './Weekday';

import * as Helpers from './Helpers';
import * as DateUtils from './DateUtils';
import * as LocaleUtils from './LocaleUtils';
import * as ModifiersUtils from './ModifiersUtils';
import classNames from './classNames';

import { ENTER, SPACE, LEFT, UP, DOWN, RIGHT } from './keys';

export class DayPicker extends Component {
  dayPicker = null;

  static propTypes = {
    // Rendering months
    initialMonth: PropTypes.instanceOf(Date),
    month: PropTypes.instanceOf(Date),
    numberOfMonths: PropTypes.number,
    fromMonth: PropTypes.instanceOf(Date),
    toMonth: PropTypes.instanceOf(Date),
    canChangeMonth: PropTypes.bool,
    reverseMonths: PropTypes.bool,
    pagedNavigation: PropTypes.bool,
    todayButton: PropTypes.string,
    showWeekNumbers: PropTypes.bool,
    showWeekDays: PropTypes.bool,

    // Modifiers
    selectedDays: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func,
      PropTypes.array,
    ]),
    disabledDays: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func,
      PropTypes.array,
    ]),

    modifiers: PropTypes.object,
    modifiersStyles: PropTypes.object,

    // Localization
    dir: PropTypes.string,
    firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    labels: PropTypes.shape({
      nextMonth: PropTypes.string.isRequired,
      previousMonth: PropTypes.string.isRequired,
    }),
    locale: PropTypes.string,
    localeUtils: PropTypes.shape({
      formatMonthTitle: PropTypes.func,
      formatWeekdayShort: PropTypes.func,
      formatWeekdayLong: PropTypes.func,
      getFirstDayOfWeek: PropTypes.func,
    }),
    months: PropTypes.arrayOf(PropTypes.string),
    weekdaysLong: PropTypes.arrayOf(PropTypes.string),
    weekdaysShort: PropTypes.arrayOf(PropTypes.string),

    // Customization
    showOutsideDays: PropTypes.bool,
    enableOutsideDaysClick: PropTypes.bool,
    fixedWeeks: PropTypes.bool,

    // CSS and HTML
    classNames: PropTypes.shape({
      body: PropTypes.string,
      container: PropTypes.string,
      day: PropTypes.string.isRequired,
      disabled: PropTypes.string.isRequired,
      footer: PropTypes.string,
      interactionDisabled: PropTypes.string,
      months: PropTypes.string,
      month: PropTypes.string,
      navBar: PropTypes.string,
      outside: PropTypes.string.isRequired,
      selected: PropTypes.string.isRequired,
      today: PropTypes.string.isRequired,
      todayButton: PropTypes.string,
      week: PropTypes.string,
      wrapper: PropTypes.string,
    }),
    className: PropTypes.string,
    containerProps: PropTypes.object,
    tabIndex: PropTypes.number,

    // Custom elements
    renderDay: PropTypes.func,
    renderWeek: PropTypes.func,
    weekdayElement: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
      PropTypes.instanceOf(Component),
    ]),
    navbarElement: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
      PropTypes.instanceOf(Component),
    ]),
    captionElement: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
      PropTypes.instanceOf(Component),
    ]),

    // Events
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onDayClick: PropTypes.func,
    onDayKeyDown: PropTypes.func,
    onDayMouseEnter: PropTypes.func,
    onDayMouseLeave: PropTypes.func,
    onDayMouseDown: PropTypes.func,
    onDayMouseUp: PropTypes.func,
    onDayTouchStart: PropTypes.func,
    onDayTouchEnd: PropTypes.func,
    onDayFocus: PropTypes.func,
    onMonthChange: PropTypes.func,
    onCaptionClick: PropTypes.func,
    onWeekClick: PropTypes.func,
    onTodayButtonClick: PropTypes.func,
  };

  static defaultProps = {
    classNames,
    tabIndex: 0,
    numberOfMonths: 1,
    labels: {
      previousMonth: 'Previous Month',
      nextMonth: 'Next Month',
    },
    locale: 'en',
    localeUtils: LocaleUtils,
    showOutsideDays: false,
    enableOutsideDaysClick: true,
    fixedWeeks: false,
    canChangeMonth: true,
    reverseMonths: false,
    pagedNavigation: false,
    showWeekNumbers: false,
    showWeekDays: true,
    renderDay: day => day.getDate(),
    renderWeek: weekNumber => weekNumber,
    weekdayElement: <Weekday />,
    navbarElement: <Navbar classNames={classNames} />,
    captionElement: <Caption classNames={classNames} />,
  };

  constructor(props) {
    super(props);

    const currentMonth = this.getCurrentMonthFromProps(props);
    this.state = { currentMonth };
  }

  componentDidUpdate(prevProps) {
    // Changing the `month` props means changing the current displayed month
    if (
      prevProps.month !== this.props.month &&
      !DateUtils.isSameMonth(prevProps.month, this.props.month)
    ) {
      const currentMonth = this.getCurrentMonthFromProps(this.props);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ currentMonth });
    }
  }

  static VERSION = '7.4.8';

  /**
   * Return the month to be shown in the calendar based on the component props.
   *
   * @param {Object} props
   * @returns Date
   * @memberof DayPicker
   * @private
   */
  getCurrentMonthFromProps(props) {
    const initialMonth = Helpers.startOfMonth(
      props.month || props.initialMonth || new Date()
    );
    let currentMonth = initialMonth;

    if (props.pagedNavigation && props.numberOfMonths > 1 && props.fromMonth) {
      const fromMonth = Helpers.startOfMonth(props.fromMonth);
      const diffInMonths = Helpers.getMonthsDiff(fromMonth, currentMonth);
      currentMonth = DateUtils.addMonths(
        fromMonth,
        Math.floor(diffInMonths / props.numberOfMonths) * props.numberOfMonths
      );
    } else if (
      props.toMonth &&
      props.numberOfMonths > 1 &&
      Helpers.getMonthsDiff(currentMonth, props.toMonth) <= 0
    ) {
      currentMonth = DateUtils.addMonths(
        Helpers.startOfMonth(props.toMonth),
        1 - this.props.numberOfMonths
      );
    }
    return currentMonth;
  }

  getNextNavigableMonth() {
    return DateUtils.addMonths(
      this.state.currentMonth,
      this.props.numberOfMonths
    );
  }

  getPreviousNavigableMonth() {
    return DateUtils.addMonths(this.state.currentMonth, -1);
  }

  allowPreviousMonth() {
    const previousMonth = DateUtils.addMonths(this.state.currentMonth, -1);
    return this.allowMonth(previousMonth);
  }

  allowNextMonth() {
    const nextMonth = DateUtils.addMonths(
      this.state.currentMonth,
      this.props.numberOfMonths
    );
    return this.allowMonth(nextMonth);
  }

  allowMonth(d) {
    const { fromMonth, toMonth, canChangeMonth } = this.props;
    if (
      !canChangeMonth ||
      (fromMonth && Helpers.getMonthsDiff(fromMonth, d) < 0) ||
      (toMonth && Helpers.getMonthsDiff(toMonth, d) > 0)
    ) {
      return false;
    }
    return true;
  }

  allowYearChange() {
    return this.props.canChangeMonth;
  }

  showMonth(d, callback) {
    if (!this.allowMonth(d)) {
      return;
    }
    this.setState({ currentMonth: Helpers.startOfMonth(d) }, () => {
      if (callback) {
        callback();
      }
      if (this.props.onMonthChange) {
        this.props.onMonthChange(this.state.currentMonth);
      }
    });
  }

  showNextMonth = callback => {
    if (!this.allowNextMonth()) {
      return;
    }
    const deltaMonths = this.props.pagedNavigation
      ? this.props.numberOfMonths
      : 1;
    const nextMonth = DateUtils.addMonths(this.state.currentMonth, deltaMonths);
    this.showMonth(nextMonth, callback);
  };

  showPreviousMonth = callback => {
    if (!this.allowPreviousMonth()) {
      return;
    }
    const deltaMonths = this.props.pagedNavigation
      ? this.props.numberOfMonths
      : 1;
    const previousMonth = DateUtils.addMonths(
      this.state.currentMonth,
      -deltaMonths
    );
    this.showMonth(previousMonth, callback);
  };

  showNextYear() {
    if (!this.allowYearChange()) {
      return;
    }
    const nextMonth = DateUtils.addMonths(this.state.currentMonth, 12);
    this.showMonth(nextMonth);
  }

  showPreviousYear() {
    if (!this.allowYearChange()) {
      return;
    }
    const nextMonth = DateUtils.addMonths(this.state.currentMonth, -12);
    this.showMonth(nextMonth);
  }

  focus() {
    this.wrapper.focus();
  }

  focusFirstDayOfMonth() {
    Helpers.getDayNodes(this.dayPicker, this.props.classNames)[0].focus();
  }

  focusLastDayOfMonth() {
    const dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
    dayNodes[dayNodes.length - 1].focus();
  }

  focusPreviousDay(dayNode) {
    const dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
    const dayNodeIndex = Helpers.nodeListToArray(dayNodes).indexOf(dayNode);
    if (dayNodeIndex === -1) return;
    if (dayNodeIndex === 0) {
      this.showPreviousMonth(() => this.focusLastDayOfMonth());
    } else {
      dayNodes[dayNodeIndex - 1].focus();
    }
  }

  focusNextDay(dayNode) {
    const dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
    const dayNodeIndex = Helpers.nodeListToArray(dayNodes).indexOf(dayNode);
    if (dayNodeIndex === -1) return;
    if (dayNodeIndex === dayNodes.length - 1) {
      this.showNextMonth(() => this.focusFirstDayOfMonth());
    } else {
      dayNodes[dayNodeIndex + 1].focus();
    }
  }

  focusNextWeek(dayNode) {
    const dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
    const dayNodeIndex = Helpers.nodeListToArray(dayNodes).indexOf(dayNode);
    const isInLastWeekOfMonth = dayNodeIndex > dayNodes.length - 8;

    if (isInLastWeekOfMonth) {
      this.showNextMonth(() => {
        const daysAfterIndex = dayNodes.length - dayNodeIndex;
        const nextMonthDayNodeIndex = 7 - daysAfterIndex;
        Helpers.getDayNodes(this.dayPicker, this.props.classNames)[
          nextMonthDayNodeIndex
        ].focus();
      });
    } else {
      dayNodes[dayNodeIndex + 7].focus();
    }
  }

  focusPreviousWeek(dayNode) {
    const dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
    const dayNodeIndex = Helpers.nodeListToArray(dayNodes).indexOf(dayNode);
    const isInFirstWeekOfMonth = dayNodeIndex <= 6;

    if (isInFirstWeekOfMonth) {
      this.showPreviousMonth(() => {
        const previousMonthDayNodes = Helpers.getDayNodes(
          this.dayPicker,
          this.props.classNames
        );
        const startOfLastWeekOfMonth = previousMonthDayNodes.length - 7;
        const previousMonthDayNodeIndex = startOfLastWeekOfMonth + dayNodeIndex;
        previousMonthDayNodes[previousMonthDayNodeIndex].focus();
      });
    } else {
      dayNodes[dayNodeIndex - 7].focus();
    }
  }

  // Event handlers

  handleKeyDown = e => {
    e.persist();

    switch (e.keyCode) {
      case LEFT:
        if (this.props.dir === 'rtl') {
          this.showNextMonth();
        } else {
          this.showPreviousMonth();
        }
        Helpers.cancelEvent(e);
        break;
      case RIGHT:
        if (this.props.dir === 'rtl') {
          this.showPreviousMonth();
        } else {
          this.showNextMonth();
        }
        Helpers.cancelEvent(e);
        break;
      case UP:
        this.showPreviousYear();
        Helpers.cancelEvent(e);
        break;
      case DOWN:
        this.showNextYear();
        Helpers.cancelEvent(e);
        break;
      default:
        break;
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(e);
    }
  };

  handleDayKeyDown = (day, modifiers, e) => {
    e.persist();

    switch (e.keyCode) {
      case LEFT:
        Helpers.cancelEvent(e);
        if (this.props.dir === 'rtl') {
          this.focusNextDay(e.target);
        } else {
          this.focusPreviousDay(e.target);
        }
        break;
      case RIGHT:
        Helpers.cancelEvent(e);
        if (this.props.dir === 'rtl') {
          this.focusPreviousDay(e.target);
        } else {
          this.focusNextDay(e.target);
        }
        break;
      case UP:
        Helpers.cancelEvent(e);
        this.focusPreviousWeek(e.target);
        break;
      case DOWN:
        Helpers.cancelEvent(e);
        this.focusNextWeek(e.target);
        break;
      case ENTER:
      case SPACE:
        Helpers.cancelEvent(e);
        if (this.props.onDayClick) {
          this.handleDayClick(day, modifiers, e);
        }
        break;
      default:
        break;
    }
    if (this.props.onDayKeyDown) {
      this.props.onDayKeyDown(day, modifiers, e);
    }
  };

  handleDayClick = (day, modifiers, e) => {
    e.persist();

    if (
      modifiers[this.props.classNames.outside] &&
      this.props.enableOutsideDaysClick
    ) {
      this.handleOutsideDayClick(day);
    }
    if (this.props.onDayClick) {
      this.props.onDayClick(day, modifiers, e);
    }
  };

  handleOutsideDayClick(day) {
    const { currentMonth } = this.state;
    const { numberOfMonths } = this.props;
    const diffInMonths = Helpers.getMonthsDiff(currentMonth, day);
    if (diffInMonths > 0 && diffInMonths >= numberOfMonths) {
      this.showNextMonth();
    } else if (diffInMonths < 0) {
      this.showPreviousMonth();
    }
  }

  handleTodayButtonClick = e => {
    const today = new Date();
    const month = new Date(today.getFullYear(), today.getMonth());
    this.showMonth(month);
    e.target.blur();
    if (this.props.onTodayButtonClick) {
      e.persist();
      this.props.onTodayButtonClick(
        new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        ModifiersUtils.getModifiersForDay(today, this.props.modifiers),
        e
      );
    }
  };

  renderNavbar() {
    const {
      labels,
      locale,
      localeUtils,
      canChangeMonth,
      navbarElement,
      ...attributes
    } = this.props;

    if (!canChangeMonth) return null;

    const props = {
      month: this.state.currentMonth,
      classNames: this.props.classNames,
      className: this.props.classNames.navBar,
      nextMonth: this.getNextNavigableMonth(),
      previousMonth: this.getPreviousNavigableMonth(),
      showPreviousButton: this.allowPreviousMonth(),
      showNextButton: this.allowNextMonth(),
      onNextClick: this.showNextMonth,
      onPreviousClick: this.showPreviousMonth,
      dir: attributes.dir,
      labels,
      locale,
      localeUtils,
    };
    return React.isValidElement(navbarElement)
      ? React.cloneElement(navbarElement, props)
      : React.createElement(navbarElement, props);
  }

  renderMonths() {
    const months = [];
    const firstDayOfWeek = Helpers.getFirstDayOfWeekFromProps(this.props);
    for (let i = 0; i < this.props.numberOfMonths; i += 1) {
      const month = DateUtils.addMonths(this.state.currentMonth, i);
      months.push(
        <Month
          key={i}
          {...this.props}
          month={month}
          firstDayOfWeek={firstDayOfWeek}
          onDayKeyDown={this.handleDayKeyDown}
          onDayClick={this.handleDayClick}
        />
      );
    }

    if (this.props.reverseMonths) {
      months.reverse();
    }
    return months;
  }

  renderFooter() {
    if (this.props.todayButton) {
      return (
        <div className={this.props.classNames.footer}>
          {this.renderTodayButton()}
        </div>
      );
    }
    return null;
  }

  renderTodayButton() {
    return (
      <button
        type="button"
        tabIndex={0}
        className={this.props.classNames.todayButton}
        aria-label={this.props.todayButton}
        onClick={this.handleTodayButtonClick}
      >
        {this.props.todayButton}
      </button>
    );
  }

  render() {
    let className = this.props.classNames.container;

    if (!this.props.onDayClick) {
      className = `${className} ${this.props.classNames.interactionDisabled}`;
    }
    if (this.props.className) {
      className = `${className} ${this.props.className}`;
    }
    return (
      <div
        {...this.props.containerProps}
        className={className}
        ref={el => (this.dayPicker = el)}
        lang={this.props.locale}
      >
        <div
          className={this.props.classNames.wrapper}
          ref={el => (this.wrapper = el)}
          tabIndex={
            this.props.canChangeMonth &&
            typeof this.props.tabIndex !== 'undefined'
              ? this.props.tabIndex
              : -1
          }
          onKeyDown={this.handleKeyDown}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
        >
          {this.renderNavbar()}
          <div className={this.props.classNames.months}>
            {this.renderMonths()}
          </div>
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}

DayPicker.DateUtils = DateUtils;
DayPicker.LocaleUtils = LocaleUtils;
DayPicker.ModifiersUtils = ModifiersUtils;

export { DateUtils, LocaleUtils, ModifiersUtils };

export default DayPicker;
