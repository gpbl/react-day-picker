import React, { Component, PropTypes } from "react";
import Utils from "./Utils";

const keys = {
  LEFT: 37,
  RIGHT: 39,
  ENTER: 13,
  SPACE: 32
};

class DayPicker extends Component {

  static propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,
    tabIndex: PropTypes.number,

    initialMonth: PropTypes.instanceOf(Date),
    numberOfMonths: PropTypes.number,

    modifiers: PropTypes.object,

    locale: PropTypes.string,
    localeUtils: PropTypes.shape({
      formatMonthTitle: PropTypes.func.isRequired,
      formatWeekdayShort: PropTypes.func.isRequired,
      formatWeekdayLong: PropTypes.func.isRequired,
      getFirstDayOfWeek: PropTypes.func.isRequired
    }),

    enableOutsideDays: PropTypes.bool,
    canChangeMonth: PropTypes.bool,

    onDayClick: PropTypes.func,
    onDayTouchTap: PropTypes.func,
    onDayMouseEnter: PropTypes.func,
    onDayMouseLeave: PropTypes.func,
    onMonthChange: PropTypes.func,
    onCaptionClick: PropTypes.func,

    renderDay: PropTypes.func

  }

  static defaultProps = {
    tabIndex: 0,
    initialMonth: new Date(),
    numberOfMonths: 1,
    locale: "en",
    localeUtils: Utils,
    enableOutsideDays: false,
    canChangeMonth: true,
    renderDay: (day) => day.getDate()
  }

  constructor(props) {
    super(props);
    this.state = {
      currentMonth: Utils.startOfMonth(props.initialMonth)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.initialMonth !== nextProps.initialMonth) {
      this.setState({
        currentMonth: nextProps.initialMonth
      });
    }
  }

  render() {
    const { numberOfMonths, locale, style, tabIndex, canChangeMonth } = this.props;
    const { currentMonth } = this.state;
    let className = `DayPicker DayPicker--${locale}`;

    if (!this.props.onDayClick && !this.props.onDayTouchTap) {
      className = `${className} DayPicker--interactionDisabled`;
    }
    if (this.props.className) {
      className = `${className} ${this.props.className}`;
    }

    let months = [], month;
    for (let i = 0; i < numberOfMonths; i++) {
      month = Utils.addMonths(currentMonth, i);
      months.push(this.renderMonth(month, i));
    }

    return (
      <div className={className}
        style={style}
        role="widget"
        tabIndex={ canChangeMonth && tabIndex }
        onKeyDown={ canChangeMonth && ::this.handleKeyDown }
      >
        { canChangeMonth && this.renderNavBar() }
        { months }
      </div>
    );
  }

  renderNavBar() {
    const baseClass = "DayPicker-NavButton DayPicker-NavButton";
    return (
      <div className="DayPicker-NavBar">
        <span
          key="prev"
          className={ `${baseClass}--prev` }
          onClick={ ::this.handlePrevMonthClick } />
        <span
          key="next"
          className={ `${baseClass}--next` }
          onClick={ ::this.handleNextMonthClick } />
      </div>
    );
  }

  renderMonth(d, i) {
    const { locale, localeUtils, onCaptionClick } = this.props;
    const { currentMonth } = this.state;

    return (
      <div
        className="DayPicker-Month"
        key={i}>
        <div className="DayPicker-Caption" onClick={ onCaptionClick ?
          (e) => this.handleCaptionClick(e, currentMonth) : null }>
          { localeUtils.formatMonthTitle(d, locale) }
        </div>
        <div className="DayPicker-Weekdays">
          { this.renderWeekDays() }
        </div>
        <div className="DayPicker-Body">
          { this.renderWeeksInMonth(d) }
        </div>
      </div>
    );
  }

  renderWeekDays() {
    const { locale, localeUtils } = this.props;
    let days = [];
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="DayPicker-Weekday">
          <attr title={localeUtils.formatWeekdayLong(i, locale)}>
            { localeUtils.formatWeekdayShort(i, locale) }
          </attr>
        </div>
      );
    }
    return (
      <div>
        { days }
      </div>
    );
  }

  renderWeeksInMonth(month) {
    const { locale, localeUtils } = this.props;
    const firstDayOfWeek = localeUtils.getFirstDayOfWeek(locale);
    return Utils.getWeekArray(month, firstDayOfWeek).map((week, i) =>
      <div key={i} className="DayPicker-Week" role="row">
        { week.map(day => this.renderDay(month, day)) }
      </div>
    );
  }

  renderDay(month, day) {
    const { renderDay } = this.props;

    const { enableOutsideDays, modifiers: modifierFunctions } = this.props;

    let className = "DayPicker-Day";
    let modifiers = [];
    let key = `${day.getFullYear()}${day.getMonth()}${day.getDate()}`;

    const isToday = Utils.isSameDay(day, new Date());
    if (isToday) {
      modifiers.push("today");
    }

    const isOutside = Utils.isDayOutsideMonth(day, month);
    if (isOutside) {
      modifiers.push("outside");
    }

    if (modifierFunctions) {
      const customModifiers = Utils.getModifiersForDay(day, modifierFunctions);
      modifiers = [...modifiers, ...customModifiers];
    }

    className += modifiers.map(modifier => ` ${className}--${modifier}`).join("");

    if (isOutside && !enableOutsideDays) {
      return <div key={`outside-${key}`} className={className} />;
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
        { renderDay(day) }
      </div>
    );
  }

  showMonth(d) {
    this.setState({
      currentMonth: Utils.startOfMonth(d)
    });
  }

  showNextMonth(callback) {
    const { numberOfMonths } = this.props;
    const { currentMonth } = this.state;
    const nextMonth = Utils.addMonths(currentMonth, numberOfMonths);
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
    const { numberOfMonths } = this.props;
    const { currentMonth } = this.state;
    const prevMonth = Utils.addMonths(currentMonth, -numberOfMonths);
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
      this.showPreviousMonth(() => {
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
      this.showNextMonth(() => {
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
    switch (e.keyCode) {
      case keys.LEFT:
        this.showPreviousMonth();
      break;
      case keys.RIGHT:
        this.showNextMonth();
      break;
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

  handleNextMonthClick(e) {
    e.stopPropagation();
    this.showNextMonth();
  }

  handlePrevMonthClick(e) {
    e.stopPropagation();
    this.showPreviousMonth();
  }

  handleCaptionClick(e, currentMonth) {
    e.persist();
    this.props.onCaptionClick(e, currentMonth);
  }

  handleDayTouchTap(e, day, modifiers) {
    e.persist();
    if (day.getMonth() !== this.state.currentMonth.getMonth()) {
      this.showMonth(day);
    }
    this.props.onDayTouchTap(e, day, modifiers);
  }

  handleDayClick(e, day, modifiers) {
    e.persist();
    if (day.getMonth() !== this.state.currentMonth.getMonth()) {
      this.showMonth(day);
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

}

export default DayPicker;
