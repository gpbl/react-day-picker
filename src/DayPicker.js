import React, { Component, PropTypes } from "react";
import * as Helpers from "./Helpers";
import * as DateUtils from "./DateUtils";
import * as LocaleUtils from "./LocaleUtils";

const keys = {
  LEFT: 37,
  RIGHT: 39,
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
    const { fromMonth } = this.props;
    if (!fromMonth) {
      return true;
    }
    const { currentMonth } = this.state;
    return Helpers.getMonthsDiff(currentMonth, fromMonth) < 0;
  }

  allowNextMonth() {
    const { toMonth, numberOfMonths } = this.props;
    if (!toMonth) {
      return true;
    }
    const { currentMonth } = this.state;
    return Helpers.getMonthsDiff(currentMonth, toMonth) >= numberOfMonths;
  }

  allowMonth(d) {
    const { fromMonth, toMonth } = this.props;
    if ((fromMonth && Helpers.getMonthsDiff(fromMonth, d) < 0) ||
      (toMonth && Helpers.getMonthsDiff(toMonth, d) > 0)) {
      return false;
    }
    return true;
  }

  showMonth(d) {
    if (!this.allowMonth(d)) {
      return;
    }
    this.setState({
      currentMonth: Helpers.startOfMonth(d)
    });
  }

  showNextMonth(callback) {
    if (!this.allowNextMonth()) {
      return;
    }
    const { currentMonth } = this.state;
    const nextMonth = DateUtils.addMonths(currentMonth, 1);
    this.setState({
      currentMonth: nextMonth
    }, () => {
      if (callback) {
        callback();
      }
      if (this.props.onMonthChange) {
        this.props.onMonthChange(this.state.currentMonth);
      }
    });
  }

  showPreviousMonth(callback) {
    if (!this.allowPreviousMonth()) {
      return;
    }
    const { currentMonth } = this.state;
    const prevMonth = DateUtils.addMonths(currentMonth, -1);
    this.setState({
      currentMonth: prevMonth
    }, () => {
      if (callback) {
        callback();
      }
      if (this.props.onMonthChange) {
        this.props.onMonthChange(this.state.currentMonth);
      }
    });
  }

  focusPreviousDay(dayNode) {
    const body = dayNode.parentNode.parentNode.parentNode.parentNode;
    let dayNodes = body.querySelectorAll(".DayPicker-Day:not(.DayPicker-Day--outside)");
    let nodeIndex;
    for (let i = 0; i < dayNodes.length; i++) {
      if (dayNodes[i] === dayNode) {
        nodeIndex = i;
        break;
      }
    }
    if (nodeIndex === 0) {
      const { currentMonth } = this.state;
      const { numberOfMonths } = this.props;
      const prevMonth = DateUtils.addMonths(currentMonth, -numberOfMonths);
      this.setState({
        currentMonth: prevMonth
      }, () => {
        dayNodes = body.querySelectorAll(".DayPicker-Day:not(.DayPicker-Day--outside)");
        dayNodes[dayNodes.length - 1].focus();
      });
    }
    else {
      dayNodes[nodeIndex - 1].focus();
    }
  }

  focusNextDay(dayNode) {
    const body = dayNode.parentNode.parentNode.parentNode.parentNode;
    let dayNodes = body.querySelectorAll(".DayPicker-Day:not(.DayPicker-Day--outside)");
    let nodeIndex;
    for (let i = 0; i < dayNodes.length; i++) {
      if (dayNodes[i] === dayNode) {
        nodeIndex = i;
        break;
      }
    }

    if (nodeIndex === dayNodes.length - 1) {
      const { currentMonth } = this.state;
      const { numberOfMonths } = this.props;
      const nextMonth = DateUtils.addMonths(currentMonth, numberOfMonths);
      this.setState({
        currentMonth: nextMonth
      }, () => {
        dayNodes = body.querySelectorAll(".DayPicker-Day:not(.DayPicker-Day--outside)");
        dayNodes[0].focus();
      });
    }
    else {
      dayNodes[nodeIndex + 1].focus();
    }
  }

  // Event handlers

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
      e.preventDefault();
      e.stopPropagation();
      this.focusPreviousDay(e.target);
      break;
    case keys.RIGHT:
      e.preventDefault();
      e.stopPropagation();
      this.focusNextDay(e.target);
      break;
    case keys.ENTER:
    case keys.SPACE:
      e.preventDefault();
      e.stopPropagation();
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

        <div className="DayPicker-Weekdays">
          <div className="DayPicker-WeekdaysRow">
            { this.renderWeekDays() }
          </div>
        </div>
        <div className="DayPicker-Body">
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
    return (
      <div key={ key } className={ className }
        tabIndex={ tabIndex }
        role="gridcell"
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
    const { numberOfMonths, locale, canChangeMonth, ...attributes } = this.props;
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

    return (
      <div
        {...attributes}
        className={ className }
        role="widget"
        tabIndex={ canChangeMonth && attributes.tabIndex }
        onKeyDown={ e => this.handleKeyDown(e) }>
        { canChangeMonth && this.renderNavBar() }
        { months }
      </div>
    );
  }


}
