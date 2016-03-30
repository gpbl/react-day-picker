import React, { Component, PropTypes } from "react";
import * as Helpers from "./Helpers";
import * as DateUtils from "./DateUtils";
import * as LocaleUtils from "./LocaleUtils";

const keys = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  ENTER: 13,
  SPACE: 32
};

class Caption extends Component {

  render() {
    const { date, locale, localeUtils, onClick } = this.props;
    return (
      <div className="DayPicker-Caption" onClick={ onClick }>
        { localeUtils.formatMonthTitle(date, locale) }
      </div>
    );
  }
}

export default class DayPicker extends Component {

  static propTypes = {
    tabIndex: PropTypes.number,
    initialMonth: PropTypes.instanceOf(Date),
    numberOfMonths: PropTypes.number,

    modifiers: PropTypes.object,

    locale: PropTypes.string,
    localeUtils: PropTypes.shape({
      formatMonthTitle: PropTypes.func,
      formatWeekdayShort: PropTypes.func,
      formatWeekdayLong: PropTypes.func,
      getFirstDayOfWeek: PropTypes.func
    }),

    enableOutsideDays: PropTypes.bool,
    canChangeMonth: PropTypes.bool,
    reverseMonths: PropTypes.bool,
    fromMonth: PropTypes.instanceOf(Date),
    toMonth: PropTypes.instanceOf(Date),

    onDayClick: PropTypes.func,
    onDayTouchTap: PropTypes.func,
    onDayMouseEnter: PropTypes.func,
    onDayMouseLeave: PropTypes.func,
    onMonthChange: PropTypes.func,
    onCaptionClick: PropTypes.func,

    renderDay: PropTypes.func,

    captionElement: PropTypes.element
  };

  static defaultProps = {
    tabIndex: 0,
    initialMonth: new Date(),
    numberOfMonths: 1,
    locale: "en",
    localeUtils: LocaleUtils,
    enableOutsideDays: false,
    canChangeMonth: true,
    reverseMonths: false,
    renderDay: day => day.getDate(),
    captionElement: <Caption />
  };

  constructor(props) {
    super(props);
    this.state = {
      currentMonth: Helpers.startOfMonth(props.initialMonth)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.initialMonth !== nextProps.initialMonth) {
      this.setState({
        currentMonth: Helpers.startOfMonth(nextProps.initialMonth)
      });
    }
  }

  allowPreviousMonth() {
    const previousMonth = DateUtils.addMonths(this.state.currentMonth, -1)
    return this.allowMonth(previousMonth);
  }

  allowNextMonth() {
    const nextMonth = DateUtils.addMonths(this.state.currentMonth, this.props.numberOfMonths);
    return this.allowMonth(nextMonth);
  }

  allowMonth(d) {
    const { fromMonth, toMonth } = this.props;
    if ((fromMonth && Helpers.getMonthsDiff(fromMonth, d) < 0) ||
      (toMonth && Helpers.getMonthsDiff(toMonth, d) > 0)) {
      return false;
    }
    return true;
  }

  showMonth(d, callback) {
    if (!this.allowMonth(d)) {
      return;
    }

    this.setState({
      currentMonth: Helpers.startOfMonth(d)
    }, callback);
  }

  showMonthAndCallHandler(d, callback) {
    this.showMonth(d, () => {
      if (callback) {
        callback();
      }
      if (this.props.onMonthChange) {
        this.props.onMonthChange(this.state.currentMonth);
      }
    });
  }

  showNextMonth(callback) {
    if (this.allowNextMonth()) {
      const nextMonth = DateUtils.addMonths(this.state.currentMonth, 1);
      this.showMonthAndCallHandler(nextMonth, callback);
    }
  }

  showPreviousMonth(callback) {
    if (this.allowPreviousMonth()) {
      const previousMonth = DateUtils.addMonths(this.state.currentMonth, -1);
      this.showMonthAndCallHandler(previousMonth, callback);
    }
  }

  showNextYear(callback) {
    const nextMonth = DateUtils.addMonths(this.state.currentMonth, 12);
    this.showMonthAndCallHandler(nextMonth, callback);
  }

  showPreviousYear(callback) {
    const nextMonth = DateUtils.addMonths(this.state.currentMonth, -12);
    this.showMonthAndCallHandler(nextMonth, callback);
  }

  getDayNodes() {
    return this.refs.dayPicker.querySelectorAll(".DayPicker-Day:not(.DayPicker-Day--outside)");
  }

  getDayNodeIndex(dayNode, dayNodes) {
    for (let i = 0; i < dayNodes.length; i++) {
      if (dayNodes[i] === dayNode) {
        return i;
      }
    }

    return -1;
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
    const dayNodeIndex = this.getDayNodeIndex(dayNode, dayNodes);

    if (dayNodeIndex === 0) {
      this.showPreviousMonth(() => { this.focusLastDayOfMonth() })
    }
    else {
      dayNodes[dayNodeIndex - 1].focus();
    }
  }

  focusNextDay(dayNode) {
    const dayNodes = this.getDayNodes();
    const dayNodeIndex = this.getDayNodeIndex(dayNode, dayNodes);

    if (dayNodeIndex === dayNodes.length - 1) {
      this.showNextMonth(() => { this.focusFirstDayOfMonth() });
    }
    else {
      dayNodes[dayNodeIndex + 1].focus();
    }
  }

  focusNextWeek(dayNode) {
    const dayNodes = this.getDayNodes();
    const dayNodeIndex = this.getDayNodeIndex(dayNode, dayNodes);
    const isInLastWeekOfMonth = dayNodeIndex > dayNodes.length - 8;

    if (isInLastWeekOfMonth) {
      this.showNextMonth(() => {
        const daysAfterIndex = dayNodes.length - dayNodeIndex;
        const nextMonthDayNodeIndex = 7 - daysAfterIndex;
        this.getDayNodes()[nextMonthDayNodeIndex].focus();
      });
    }
    else {
      dayNodes[dayNodeIndex + 7].focus();
    }
  }

  focusPreviousWeek(dayNode) {
    const dayNodes = this.getDayNodes();
    const dayNodeIndex = this.getDayNodeIndex(dayNode, dayNodes);
    const isInFirstWeekOfMonth = dayNodeIndex <= 6;

    if (isInFirstWeekOfMonth) {
      this.showPreviousMonth(() => {
        const previousMonthDayNodes = this.getDayNodes();
        const startOfLastWeekOfMonth = previousMonthDayNodes.length - 7;
        const previousMonthDayNodeIndex = startOfLastWeekOfMonth + dayNodeIndex;
        previousMonthDayNodes[previousMonthDayNodeIndex].focus();
      });
    }
    else {
      dayNodes[dayNodeIndex - 7].focus();
    }
  }

  // Event handlers

  cancelEvent(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  handleKeyDown(e) {
    e.persist();
    const { canChangeMonth, onKeyDown } = this.props;

    if (!canChangeMonth && onKeyDown) {
      onKeyDown(e);
      return;
    }

    if (canChangeMonth) {
      switch (e.keyCode) {
      case keys.LEFT:
        this.showPreviousMonth(onKeyDown);
        break;
      case keys.RIGHT:
        this.showNextMonth(onKeyDown);
        break;
      case keys.UP:
        this.showPreviousYear(onKeyDown);
        break;
      case keys.DOWN:
        this.showNextYear(onKeyDown);
        break;
      default:
        if (onKeyDown) {
          onKeyDown(e);
        }
      }
    }
  }

  handleDayKeyDown(e, day, modifiers) {
    e.persist();
    switch (e.keyCode) {
    case keys.LEFT:
      this.cancelEvent(e);
      this.focusPreviousDay(e.target);
      break;
    case keys.RIGHT:
      this.cancelEvent(e);
      this.focusNextDay(e.target);
      break;
    case keys.UP:
      this.cancelEvent(e);
      this.focusPreviousWeek(e.target);
      break;
    case keys.DOWN:
      this.cancelEvent(e);
      this.focusNextWeek(e.target);
      break;
    case keys.ENTER:
    case keys.SPACE:
      this.cancelEvent(e);
      if (this.props.onDayClick) {
        this.handleDayClick(e, day, modifiers);
      }
      if (this.props.onDayTouchTap) {
        this.handleDayTouchTap(e, day, modifiers);
      }
      break;
    }
  }

  handleNextMonthClick() {
    this.showNextMonth();
  }

  handlePrevMonthClick() {
    this.showPreviousMonth();
  }

  handleCaptionClick(e, currentMonth) {
    e.persist();
    this.props.onCaptionClick(e, currentMonth);
  }

  handleDayTouchTap(e, day, modifiers) {
    e.persist();
    if (modifiers.indexOf("outside") > -1) {
      this.handleOutsideDayPress(day);
    }
    this.props.onDayTouchTap(e, day, modifiers);
  }

  handleDayClick(e, day, modifiers) {
    e.persist();
    if (modifiers.indexOf("outside") > -1) {
      this.handleOutsideDayPress(day);
    }

    this.props.onDayClick(e, day, modifiers);
  }

  handleDayMouseEnter(e, day, modifiers) {
    e.persist();
    this.props.onDayMouseEnter(e, day, modifiers);
  }

  handleDayMouseLeave(e, day, modifiers) {
    e.persist();
    this.props.onDayMouseLeave(e, day, modifiers);
  }

  handleOutsideDayPress(day) {
    const { currentMonth } = this.state;
    const { numberOfMonths } = this.props;
    const diffInMonths = Helpers.getMonthsDiff(currentMonth, day);
    if (diffInMonths > 0 && diffInMonths >= numberOfMonths) {
      this.showNextMonth();
    }
    else if (diffInMonths < 0) {
      this.showPreviousMonth();
    }
  }

  renderNavBar() {
    const baseClass = "DayPicker-NavButton DayPicker-NavButton";
    const isRTL = this.props.dir === "rtl";

    const leftButton = isRTL ? this.allowNextMonth() : this.allowPreviousMonth();
    const rightButton = isRTL ? this.allowPreviousMonth() : this.allowNextMonth();

    return (
      <div className="DayPicker-NavBar">
        { leftButton &&
          <span
            key="left"
            className={ `${baseClass}--prev` }
            onClick={ isRTL ? ::this.handleNextMonthClick : ::this.handlePrevMonthClick }
          />
        }
        { rightButton &&
          <span
            key="right"
            className={ `${baseClass}--next` }
            onClick={  isRTL ? ::this.handlePrevMonthClick : ::this.handleNextMonthClick }
          />
        }
      </div>
    );
  }

  renderMonth(date, i) {
    const { locale, localeUtils, onCaptionClick, captionElement } = this.props;

    const caption = React.cloneElement(captionElement, {
      date, localeUtils, locale,
      onClick: onCaptionClick ? e => this.handleCaptionClick(e, date) : null
    });

    return (
      <div
        className="DayPicker-Month"
        key={ i }>

        { caption }

        <div className="DayPicker-Weekdays" role="rowgroup">
          <div className="DayPicker-WeekdaysRow" role="columnheader">
            { this.renderWeekDays() }
          </div>
        </div>
        <div className="DayPicker-Body" role="rowgroup">
          { this.renderWeeksInMonth(date) }
        </div>
      </div>
    );
  }

  renderWeekDays() {
    const { locale, localeUtils } = this.props;
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={ i } className="DayPicker-Weekday">
          <abbr title={ localeUtils.formatWeekdayLong(i, locale) }>
            { localeUtils.formatWeekdayShort(i, locale) }
          </abbr>
        </div>
      );
    }
    return days;
  }

  renderWeeksInMonth(month) {
    const { locale, localeUtils } = this.props;
    const firstDayOfWeek = localeUtils.getFirstDayOfWeek(locale);
    return Helpers.getWeekArray(month, firstDayOfWeek).map((week, i) =>
      <div key={ i } className="DayPicker-Week" role="row">
        { week.map(day => this.renderDay(month, day)) }
      </div>
    );
  }

  renderDay(month, day) {

    const { enableOutsideDays, modifiers: modifierFunctions } = this.props;

    let className = "DayPicker-Day";
    let modifiers = [];
    const key = `${day.getFullYear()}${day.getMonth()}${day.getDate()}`;

    const isToday = DateUtils.isSameDay(day, new Date());
    if (isToday) {
      modifiers.push("today");
    }

    const isOutside = day.getMonth() !== month.getMonth();
    if (isOutside) {
      modifiers.push("outside");
    }

    if (modifierFunctions) {
      const customModifiers = Helpers.getModifiersForDay(day, modifierFunctions);
      modifiers = [...modifiers, ...customModifiers];
    }

    className += modifiers.map(modifier => ` ${className}--${modifier}`).join("");

    if (isOutside && !enableOutsideDays) {
      return <div key={ `outside-${key}` } className={ className } />;
    }

    const { onDayMouseEnter, onDayMouseLeave, onDayTouchTap, onDayClick }
      = this.props;
    let tabIndex = null;
    if ((onDayTouchTap || onDayClick) && !isOutside) {
      tabIndex = -1;
      // Focus on the first day of the month
      if (day.getDate() === 1) {
        tabIndex = this.props.tabIndex;
      }
    }

    const ariaLabel = this.props.localeUtils.formatDate ?
      this.props.localeUtils.formatDate(day) : day.toDateString();
    const ariaDisabled = isOutside ? "true" : "false";

    return (
      <div key={ key } className={ className }
        tabIndex={ tabIndex }
        role="gridcell"
        aria-label={ ariaLabel }
        aria-disabled={ ariaDisabled }
        onKeyDown={
          (e) => this.handleDayKeyDown(e, day, modifiers) }
        onMouseEnter= { onDayMouseEnter ?
          (e) => this.handleDayMouseEnter(e, day, modifiers) : null }
        onMouseLeave= { onDayMouseLeave ?
          (e) => this.handleDayMouseLeave(e, day, modifiers) : null }
        onClick= { onDayClick ?
          (e) => this.handleDayClick(e, day, modifiers) : null }
        onTouchTap= { onDayTouchTap ?
          (e) => this.handleDayTouchTap(e, day, modifiers) : null }
        >
        { this.props.renderDay(day) }
      </div>
    );
  }

  render() {
    const { numberOfMonths, locale, canChangeMonth, reverseMonths, ...attributes } = this.props;
    const { currentMonth } = this.state;
    let className = `DayPicker DayPicker--${locale}`;

    if (!this.props.onDayClick && !this.props.onDayTouchTap) {
      className = `${className} DayPicker--interactionDisabled`;
    }
    if (attributes.className) {
      className = `${className} ${attributes.className}`;
    }

    const months = [];
    let month;
    for (let i = 0; i < numberOfMonths; i++) {
      month = DateUtils.addMonths(currentMonth, i);
      months.push(this.renderMonth(month, i));
    }

    if (reverseMonths) {
      months.reverse();
    }

    return (
      <div
        {...attributes}
        className={ className }
        ref="dayPicker"
        role="widget"
        tabIndex={ canChangeMonth && attributes.tabIndex }
        onKeyDown={ e => this.handleKeyDown(e) }>
        { canChangeMonth && this.renderNavBar() }
        { months }
      </div>
    );
  }


}
