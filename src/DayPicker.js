import React, { Component, PropTypes } from 'react';
import Caption from './Caption';
import Navbar from './Navbar';
import Month from './Month';
import Day from './Day';
import Weekday from './Weekday';

import * as Helpers from './Helpers';
import * as DateUtils from './DateUtils';
import * as LocaleUtils from './LocaleUtils';

import keys from './keys';
import DayPickerPropTypes from './PropTypes';

export default class DayPicker extends Component {
  static VERSION = '3.1.0';

  static propTypes = {
    initialMonth: PropTypes.instanceOf(Date),
    numberOfMonths: PropTypes.number,
    selectedDays: PropTypes.func,
    disabledDays: PropTypes.func,

    modifiers: PropTypes.object,

    locale: PropTypes.string,
    localeUtils: DayPickerPropTypes.localeUtils,

    enableOutsideDays: PropTypes.bool,
    fixedWeeks: PropTypes.bool,
    canChangeMonth: PropTypes.bool,
    reverseMonths: PropTypes.bool,
    pagedNavigation: PropTypes.bool,
    fromMonth: PropTypes.instanceOf(Date),
    toMonth: PropTypes.instanceOf(Date),

    firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
    months: PropTypes.arrayOf(PropTypes.string),
    weekdaysLong: PropTypes.arrayOf(PropTypes.string),
    weekdaysShort: PropTypes.arrayOf(PropTypes.string),

    onKeyDown: PropTypes.func,
    onDayClick: PropTypes.func,
    onDayKeyDown: PropTypes.func,
    onDayMouseEnter: PropTypes.func,
    onDayMouseLeave: PropTypes.func,
    onDayTouchStart: PropTypes.func,
    onDayTouchEnd: PropTypes.func,
    onDayFocus: PropTypes.func,
    onMonthChange: PropTypes.func,
    onCaptionClick: PropTypes.func,

    renderDay: PropTypes.func,

    weekdayElement: PropTypes.element,
    navbarElement: PropTypes.element,
    captionElement: PropTypes.element,

    dir: PropTypes.string,
    className: PropTypes.string,
    tabIndex: PropTypes.number,

  };

  static defaultProps = {
    tabIndex: 0,
    initialMonth: new Date(),
    numberOfMonths: 1,
    locale: 'en',
    localeUtils: LocaleUtils,
    enableOutsideDays: false,
    fixedWeeks: false,
    canChangeMonth: true,
    reverseMonths: false,
    pagedNavigation: false,
    renderDay: day => day.getDate(),
    weekdayElement: <Weekday />,
    navbarElement: <Navbar />,
    captionElement: <Caption />,
  };

  constructor(props) {
    super(props);

    this.renderDayInMonth = this.renderDayInMonth.bind(this);
    this.showNextMonth = this.showNextMonth.bind(this);
    this.showPreviousMonth = this.showPreviousMonth.bind(this);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayKeyDown = this.handleDayKeyDown.bind(this);

    this.state = this.getStateFromProps(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.initialMonth !== nextProps.initialMonth) {
      this.setState(this.getStateFromProps(nextProps));
    }
  }

  getStateFromProps = (props) => {
    const initialMonth = Helpers.startOfMonth(props.initialMonth);
    let currentMonth = initialMonth;

    if (props.pagedNavigation && props.numberOfMonths > 1 && props.fromMonth) {
      const diffInMonths = Helpers.getMonthsDiff(props.fromMonth, currentMonth);
      currentMonth = DateUtils.addMonths(
        props.fromMonth,
        Math.floor(diffInMonths / props.numberOfMonths) * props.numberOfMonths
      );
    }
    return { currentMonth };
  }

  getDayNodes() {
    return this.dayPicker.querySelectorAll('.DayPicker-Day:not(.DayPicker-Day--outside)');
  }

  getNextNavigableMonth() {
    return DateUtils.addMonths(this.state.currentMonth, this.props.numberOfMonths);
  }

  getPreviousNavigableMonth() {
    return DateUtils.addMonths(this.state.currentMonth, -1);
  }

  dayPicker = null

  allowPreviousMonth() {
    const previousMonth = DateUtils.addMonths(this.state.currentMonth, -1);
    return this.allowMonth(previousMonth);
  }

  allowNextMonth() {
    const nextMonth = DateUtils.addMonths(this.state.currentMonth, this.props.numberOfMonths);
    return this.allowMonth(nextMonth);
  }

  allowMonth(d) {
    const { fromMonth, toMonth, canChangeMonth } = this.props;
    if (!canChangeMonth ||
      (fromMonth && Helpers.getMonthsDiff(fromMonth, d) < 0) ||
      (toMonth && Helpers.getMonthsDiff(toMonth, d) > 0)) {
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

  showNextMonth(callback) {
    if (!this.allowNextMonth()) {
      return;
    }
    const deltaMonths = this.props.pagedNavigation ? this.props.numberOfMonths : 1;
    const nextMonth = DateUtils.addMonths(this.state.currentMonth, deltaMonths);
    this.showMonth(nextMonth, callback);
  }

  showPreviousMonth(callback) {
    if (!this.allowPreviousMonth()) {
      return;
    }
    const deltaMonths = this.props.pagedNavigation ? this.props.numberOfMonths : 1;
    const previousMonth = DateUtils.addMonths(this.state.currentMonth, -deltaMonths);
    this.showMonth(previousMonth, callback);
  }

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
    this.getDayNodes()[0].focus();
  }

  focusLastDayOfMonth() {
    const dayNodes = this.getDayNodes();
    dayNodes[dayNodes.length - 1].focus();
  }

  focusPreviousDay(dayNode) {
    const dayNodes = this.getDayNodes();
    const dayNodeIndex = [...dayNodes].indexOf(dayNode);

    if (dayNodeIndex === 0) {
      this.showPreviousMonth(() => this.focusLastDayOfMonth());
    } else {
      dayNodes[dayNodeIndex - 1].focus();
    }
  }

  focusNextDay(dayNode) {
    const dayNodes = this.getDayNodes();
    const dayNodeIndex = [...dayNodes].indexOf(dayNode);

    if (dayNodeIndex === dayNodes.length - 1) {
      this.showNextMonth(() => this.focusFirstDayOfMonth());
    } else {
      dayNodes[dayNodeIndex + 1].focus();
    }
  }

  focusNextWeek(dayNode) {
    const dayNodes = this.getDayNodes();
    const dayNodeIndex = [...dayNodes].indexOf(dayNode);
    const isInLastWeekOfMonth = dayNodeIndex > dayNodes.length - 8;

    if (isInLastWeekOfMonth) {
      this.showNextMonth(() => {
        const daysAfterIndex = dayNodes.length - dayNodeIndex;
        const nextMonthDayNodeIndex = 7 - daysAfterIndex;
        this.getDayNodes()[nextMonthDayNodeIndex].focus();
      });
    } else {
      dayNodes[dayNodeIndex + 7].focus();
    }
  }

  focusPreviousWeek(dayNode) {
    const dayNodes = this.getDayNodes();
    const dayNodeIndex = [...dayNodes].indexOf(dayNode);
    const isInFirstWeekOfMonth = dayNodeIndex <= 6;

    if (isInFirstWeekOfMonth) {
      this.showPreviousMonth(() => {
        const previousMonthDayNodes = this.getDayNodes();
        const startOfLastWeekOfMonth = previousMonthDayNodes.length - 7;
        const previousMonthDayNodeIndex = startOfLastWeekOfMonth + dayNodeIndex;
        previousMonthDayNodes[previousMonthDayNodeIndex].focus();
      });
    } else {
      dayNodes[dayNodeIndex - 7].focus();
    }
  }

  // Event handlers

  handleKeyDown(e) {
    e.persist();

    switch (e.keyCode) {
      case keys.LEFT:
        this.showPreviousMonth();
        break;
      case keys.RIGHT:
        this.showNextMonth();
        break;
      case keys.UP:
        this.showPreviousYear();
        break;
      case keys.DOWN:
        this.showNextYear();
        break;
      default:
        break;
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(e);
    }
  }

  handleDayKeyDown(e, day, modifiers) {
    e.persist();
    switch (e.keyCode) {
      case keys.LEFT:
        Helpers.cancelEvent(e);
        this.focusPreviousDay(e.target);
        break;
      case keys.RIGHT:
        Helpers.cancelEvent(e);
        this.focusNextDay(e.target);
        break;
      case keys.UP:
        Helpers.cancelEvent(e);
        this.focusPreviousWeek(e.target);
        break;
      case keys.DOWN:
        Helpers.cancelEvent(e);
        this.focusNextWeek(e.target);
        break;
      case keys.ENTER:
      case keys.SPACE:
        Helpers.cancelEvent(e);
        if (this.props.onDayClick) {
          this.handleDayClick(e, day, modifiers);
        }
        break;
      default:
        break;
    }
    if (this.props.onDayKeyDown) {
      this.props.onDayKeyDown(e, day, modifiers);
    }
  }

  handleDayClick(e, day, modifiers) {
    e.persist();
    if (modifiers.outside) {
      this.handleOutsideDayClick(day);
    }
    this.props.onDayClick(e, day, modifiers);
  }

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
  renderNavbar() {
    const {
      locale,
      localeUtils,
      canChangeMonth,
      navbarElement,
    ...attributes } = this.props;

    if (!canChangeMonth) return null;
    const props = {
      className: 'DayPicker-NavBar',
      nextMonth: this.getNextNavigableMonth(),
      previousMonth: this.getPreviousNavigableMonth(),
      showPreviousButton: this.allowPreviousMonth(),
      showNextButton: this.allowNextMonth(),
      onNextClick: this.showNextMonth,
      onPreviousClick: this.showPreviousMonth,
      dir: attributes.dir,
      locale,
      localeUtils,
    };
    return React.cloneElement(navbarElement, props);
  }
  renderDayInMonth(day, month) {
    let dayModifiers = [];
    if (DateUtils.isSameDay(day, new Date())) {
      dayModifiers.push('today');
    }
    if (day.getMonth() !== month.getMonth()) {
      dayModifiers.push('outside');
    }
    dayModifiers = [
      ...dayModifiers,
      ...Helpers.getModifiersForDay(day, Helpers.getModifiersFromProps(this.props)),
    ];

    const isOutside = day.getMonth() !== month.getMonth();
    let tabIndex = null;
    if (this.props.onDayClick && !isOutside) {
      tabIndex = -1;
      // Focus on the first day of the month
      if (day.getDate() === 1) {
        tabIndex = this.props.tabIndex;
      }
    }
    const key = `${day.getFullYear()}${day.getMonth()}${day.getDate()}`;
    return (
      <Day
        key={ `${isOutside ? 'outside-' : ''}${key}` }
        day={ day }
        modifiers={ dayModifiers }
        empty={ isOutside && !this.props.enableOutsideDays && !this.props.fixedWeeks }

        tabIndex={ tabIndex }

        ariaLabel={ this.props.localeUtils.formatDay(day, this.props.locale) }
        ariaDisabled={ isOutside || dayModifiers.indexOf('disabled') > -1 }
        ariaSelected={ dayModifiers.indexOf('selected') > -1 }

        onMouseEnter={ this.props.onDayMouseEnter }
        onMouseLeave={ this.props.onDayMouseLeave }
        onKeyDown={ this.handleDayKeyDown }
        onTouchStart={ this.props.onDayTouchStart }
        onTouchEnd={ this.props.onDayTouchEnd }
        onFocus={ this.props.onDayFocus }
        onClick={ this.props.onDayClick ? this.handleDayClick : undefined }
      >
        {this.props.renderDay(day)}
      </Day>
    );
  }

  renderMonths() {
    const months = [];
    const firstDayOfWeek = Helpers.getFirstDayOfWeekFromProps(this.props);

    for (let i = 0; i < this.props.numberOfMonths; i += 1) {
      const month = DateUtils.addMonths(this.state.currentMonth, i);

      months.push(
        <Month
          key={ i }
          month={ month }
          months={ this.props.months }
          weekdaysShort={ this.props.weekdaysShort }
          weekdaysLong={ this.props.weekdaysLong }
          locale={ this.props.locale }
          localeUtils={ this.props.localeUtils }
          firstDayOfWeek={ firstDayOfWeek }
          fixedWeeks={ this.props.fixedWeeks }

          className="DayPicker-Month"
          wrapperClassName="DayPicker-Body"
          weekClassName="DayPicker-Week"

          weekdayComponent={ this.props.weekdayComponent }
          weekdayElement={ this.props.weekdayElement }
          captionElement={ this.props.captionElement }

          onCaptionClick={ this.props.onCaptionClick }
        >
          {this.renderDayInMonth}
        </Month>);
    }

    if (this.props.reverseMonths) {
      months.reverse();
    }
    return months;
  }

  render() {
    const customProps = Helpers.getCustomProps(this.props, DayPicker.propTypes);
    let className = `DayPicker DayPicker--${this.props.locale}`;

    if (!this.props.onDayClick) {
      className = `${className} DayPicker--interactionDisabled`;
    }
    if (this.props.className) {
      className = `${className} ${this.props.className}`;
    }

    return (
      <div
        { ...customProps }
        className={ className }
        ref={ (el) => { this.dayPicker = el; } }
        role="application"
        tabIndex={ this.props.canChangeMonth && this.props.tabIndex }
        onKeyDown={ this.handleKeyDown }
      >
        {this.renderNavbar()}
        {this.renderMonths()}
      </div>
    );
  }
}
