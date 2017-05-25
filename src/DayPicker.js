import React, { Component } from 'react';
import Caption from './Caption';
import Navbar from './Navbar';
import Month from './Month';
import Day from './Day';
import Weekday from './Weekday';

import * as Helpers from './Helpers';
import * as DateUtils from './DateUtils';
import * as LocaleUtils from './LocaleUtils';
import * as ModifiersUtils from './ModifiersUtils';
import classNames from './classNames';

import keys from './keys';
import PropTypes, { ModifierPropType } from './PropTypes';

export default class DayPicker extends Component {
  static VERSION = '5.5.2';

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
      ModifierPropType,
      PropTypes.arrayOf(ModifierPropType),
    ]),
    disabledDays: PropTypes.oneOfType([
      ModifierPropType,
      PropTypes.arrayOf(ModifierPropType),
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
    localeUtils: PropTypes.localeUtils,
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
    /* istanbul ignore next */
    // for the ignore above see: https://github.com/gotwarlost/istanbul/issues/690

    this.renderDayInMonth = this.renderDayInMonth.bind(this);
    this.showNextMonth = this.showNextMonth.bind(this);
    this.showPreviousMonth = this.showPreviousMonth.bind(this);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayKeyDown = this.handleDayKeyDown.bind(this);

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

  getDayNodes() {
    let outsideClassName;
    if (this.props.classNames === classNames) {
      // When using CSS modules prefix the modifier as required by the BEM syntax
      outsideClassName = `${this.props.classNames.day}--${this.props.classNames.outside}`;
    } else {
      outsideClassName = `${this.props.classNames.outside}`;
    }
    const dayQuery = this.props.classNames.day.replace(/ /g, '.');
    const outsideDayQuery = outsideClassName.replace(/ /g, '.');
    const selector = `.${dayQuery}:not(.${outsideDayQuery})`;
    return this.dayPicker.querySelectorAll(selector);
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

  showNextMonth(callback) {
    if (!this.allowNextMonth()) {
      return;
    }
    const deltaMonths = this.props.pagedNavigation
      ? this.props.numberOfMonths
      : 1;
    const nextMonth = DateUtils.addMonths(this.state.currentMonth, deltaMonths);
    this.showMonth(nextMonth, callback);
  }

  showPreviousMonth(callback) {
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

  handleDayKeyDown(day, modifiers, e) {
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
          this.handleDayClick(day, modifiers, e);
        }
        break;
      default:
        break;
    }
    if (this.props.onDayKeyDown) {
      this.props.onDayKeyDown(day, modifiers, e);
    }
  }

  handleDayClick(day, modifiers, e) {
    e.persist();
    if (modifiers.outside) {
      this.handleOutsideDayClick(day);
    }
    this.props.onDayClick(day, modifiers, e);
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
  renderDayInMonth(day, month) {
    const propModifiers = Helpers.getModifiersFromProps(this.props);
    const dayModifiers = ModifiersUtils.getModifiersForDay(day, propModifiers);
    if (
      DateUtils.isSameDay(day, new Date()) &&
      !Object.prototype.hasOwnProperty.call(
        propModifiers,
        this.props.classNames.today
      )
    ) {
      dayModifiers.push(this.props.classNames.today);
    }
    if (day.getMonth() !== month.getMonth()) {
      dayModifiers.push(this.props.classNames.outside);
    }

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
    const modifiers = {};
    dayModifiers.forEach(modifier => {
      modifiers[modifier] = true;
    });

    return (
      <Day
        key={`${isOutside ? 'outside-' : ''}${key}`}
        classNames={this.props.classNames}
        day={day}
        modifiers={modifiers}
        modifiersStyles={this.props.modifiersStyles}
        empty={
          isOutside && !this.props.enableOutsideDays && !this.props.fixedWeeks
        }
        tabIndex={tabIndex}
        ariaLabel={this.props.localeUtils.formatDay(day, this.props.locale)}
        ariaDisabled={isOutside || dayModifiers.indexOf('disabled') > -1}
        ariaSelected={dayModifiers.indexOf('selected') > -1}
        onMouseEnter={this.props.onDayMouseEnter}
        onMouseLeave={this.props.onDayMouseLeave}
        onKeyDown={this.handleDayKeyDown}
        onTouchStart={this.props.onDayTouchStart}
        onTouchEnd={this.props.onDayTouchEnd}
        onFocus={this.props.onDayFocus}
        onClick={this.props.onDayClick ? this.handleDayClick : undefined}
      >
        {this.props.renderDay(day, modifiers)}
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
          key={i}
          classNames={this.props.classNames}
          month={month}
          months={this.props.months}
          weekdayElement={this.props.weekdayElement}
          captionElement={this.props.captionElement}
          fixedWeeks={this.props.fixedWeeks}
          weekdaysShort={this.props.weekdaysShort}
          weekdaysLong={this.props.weekdaysLong}
          locale={this.props.locale}
          localeUtils={this.props.localeUtils}
          firstDayOfWeek={firstDayOfWeek}
          footer={this.props.todayButton && this.renderTodayButton()}
          showWeekNumbers={this.props.showWeekNumbers}
          onCaptionClick={this.props.onCaptionClick}
          onWeekClick={this.props.onWeekClick}
        >
          {this.renderDayInMonth}
        </Month>
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
        ref={el => {
          this.dayPicker = el;
        }}
        role="application"
        lang={this.props.locale}
        tabIndex={this.props.canChangeMonth && this.props.tabIndex}
        onKeyDown={this.handleKeyDown}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
      >
        {this.renderNavbar()}
        {this.renderMonths()}
      </div>
    );
  }
}
