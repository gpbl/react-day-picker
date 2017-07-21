import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Caption from './Caption';
import Navbar from './Navbar';
import Month from './Month';
import Weekday from './Weekday';

import * as Helpers from './Helpers';
import * as DateUtils from './DateUtils';
import * as LocaleUtils from './LocaleUtils';
import classNames from './classNames';

import { ENTER, SPACE, LEFT, UP, DOWN, RIGHT } from './keys';

export default class DayPicker extends Component {
  static VERSION = '6.1.0';

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
    }).isRequired,
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
    enableOutsideDays: PropTypes.bool,
    fixedWeeks: PropTypes.bool,

    // CSS and HTML
    classNames: PropTypes.shape({
      body: PropTypes.string,
      container: PropTypes.string,
      day: PropTypes.string.isRequired,
      disabled: PropTypes.string.isRequired,
      footer: PropTypes.string,
      interactionDisabled: PropTypes.string,
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
  };

  static defaultProps = {
    classNames,
    tabIndex: 0,
    initialMonth: new Date(),
    numberOfMonths: 1,
    labels: {
      previousMonth: 'Previous Month',
      nextMonth: 'Next Month',
    },
    locale: 'en',
    localeUtils: LocaleUtils,
    enableOutsideDays: false,
    fixedWeeks: false,
    canChangeMonth: true,
    reverseMonths: false,
    pagedNavigation: false,
    showWeekNumbers: false,
    renderDay: day => day.getDate(),
    weekdayElement: <Weekday />,
    navbarElement: <Navbar classNames={classNames} />,
    captionElement: <Caption classNames={classNames} />,
  };

  constructor(props) {
    super(props);
    this.state = this.getStateFromProps(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.month !== nextProps.month) {
      this.setState(this.getStateFromProps(nextProps));
    }
  }

  getStateFromProps = props => {
    const initialMonth = Helpers.startOfMonth(
      props.month || props.initialMonth
    );
    let currentMonth = initialMonth;

    if (props.pagedNavigation && props.numberOfMonths > 1 && props.fromMonth) {
      const diffInMonths = Helpers.getMonthsDiff(props.fromMonth, currentMonth);
      currentMonth = DateUtils.addMonths(
        props.fromMonth,
        Math.floor(diffInMonths / props.numberOfMonths) * props.numberOfMonths
      );
    }
    return { currentMonth };
  };

  getNextNavigableMonth() {
    return DateUtils.addMonths(
      this.state.currentMonth,
      this.props.numberOfMonths
    );
  }

  getPreviousNavigableMonth() {
    return DateUtils.addMonths(this.state.currentMonth, -1);
  }

  dayPicker = null;

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

    if (dayNodeIndex === 0) {
      this.showPreviousMonth(() => this.focusLastDayOfMonth());
    } else {
      dayNodes[dayNodeIndex - 1].focus();
    }
  }

  focusNextDay(dayNode) {
    const dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
    const dayNodeIndex = Helpers.nodeListToArray(dayNodes).indexOf(dayNode);

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
        this.showPreviousMonth();
        break;
      case RIGHT:
        this.showNextMonth();
        break;
      case UP:
        this.showPreviousYear();
        break;
      case DOWN:
        this.showNextYear();
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
        this.focusPreviousDay(e.target);
        break;
      case RIGHT:
        Helpers.cancelEvent(e);
        this.focusNextDay(e.target);
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
    if (modifiers[this.props.classNames.outside]) {
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
    this.showMonth(new Date());
    e.target.blur();
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
      classNames: this.props.classNames,
      className: this.props.classNames.navBar,
      nextMonth: this.getNextNavigableMonth(),
      previousMonth: this.getPreviousNavigableMonth(),
      showPreviousButton: this.allowPreviousMonth(),
      showNextButton: this.allowNextMonth(),
      onNextClick: () => this.showNextMonth(),
      onPreviousClick: () => this.showPreviousMonth(),
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
          footer={this.props.todayButton && this.renderTodayButton()}
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
        role="application"
        lang={this.props.locale}
      >
        <div
          className={this.props.classNames.wrapper}
          tabIndex={this.props.canChangeMonth && this.props.tabIndex}
          onKeyDown={this.handleKeyDown}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
        >
          {this.renderNavbar()}
          {this.renderMonths()}
        </div>
      </div>
    );
  }
}
