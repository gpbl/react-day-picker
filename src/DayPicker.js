import React, { Component, PropTypes } from "react";
import Utils from "./Utils";
import LocaleUtils from "./LocaleUtils";

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

    initialMonth: PropTypes.instanceOf(Date).isRequired,
    numberOfMonths: PropTypes.number,

    modifiers: PropTypes.object,

    locale: PropTypes.string,

    enableOutsideDays: PropTypes.bool,
    canChangeMonth: PropTypes.bool,

    onDayClick: PropTypes.func,
    onDayTouchTap: PropTypes.func,
    onDayMouseEnter: PropTypes.func,
    onDayMouseLeave: PropTypes.func,
    onMonthChange: PropTypes.func

  }

  static defaultProps = {
    tabIndex: 0,
    initialMonth: new Date(),
    numberOfMonths: 1,
    locale: "en",
    enableOutsideDays: false,
    canChangeMonth: true
  }

  constructor(props) {
    super(props);
    let { initialMonth, tabIndex } = this.props;

    this.state = {
      currentMonth: Utils.startOfMonth(initialMonth)
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
    let months = [];
    for (let i = 0; i < numberOfMonths; i++) {
      months.push(this.renderMonth(Utils.addMonths(currentMonth, i), i));
    }
    return (
      <div className={className}
        style={style}
        role="widget"
        tabIndex={ canChangeMonth ? tabIndex : null }
        onKeyDown={ canChangeMonth ? ::this.handleKeyDown : null}>
        { months }
      </div>
    );
  }

  renderMonth(d, i) {
    const { locale, numberOfMonths, canChangeMonth } = this.props;

    const isFirstMonth = i === 0;
    const isLastMonth = i === numberOfMonths - 1;

    return (
      <table
        className="DayPicker-Month"
        key={i}>
        <caption className="DayPicker-NavBar">
          { isFirstMonth && canChangeMonth && this.renderNavButton("prev") }
          <span className="DayPicker-MonthName">
            { LocaleUtils.formatMonthTitle(d, locale) }
          </span>
          { isLastMonth && canChangeMonth && this.renderNavButton("next") }
        </caption>
        <thead className="DayPicker-Weekdays">
          { this.renderWeekDays() }
        </thead>
        <tbody>
          { this.renderWeeksInMonth(d) }
        </tbody>
      </table>
    );
  }

  renderNavButton(position) {
    let handler;
    if (position === "prev") {
      handler = ::this.handlePrevMonthClick;
    }
    else {
      handler = ::this.handleNextMonthClick;
    }

    return (
      <span
        key={position}
        className={ `DayPicker-NavButton DayPicker-NavButton--${position}` }
        onKeyDown={ handler }
        onClick={ handler } />
    );
  }

  renderWeekDays() {
    const { locale } = this.props;
    let days = [];
    for (let i = 0; i < 7; i++) {
      days.push(
        <td key={i} className="DayPicker-Weekday">
          <attr title={LocaleUtils.formatWeekdayLong(i, locale)}>
            { LocaleUtils.formatWeekdayShort(i, locale) }
          </attr>
        </td>
      );
    }
    return (
      <tr>
        { days }
      </tr>
    );
  }

  renderWeeksInMonth(month) {
    const { locale } = this.props;
    return Utils.getWeekArray(month, locale).map((week, i) =>
      <tr key={i} className="DayPicker-Week" role="row">
        { week.map((day, j) => this.renderDay(month, day, j)) }
      </tr>
    );
  }

  renderDay(month, day, i) {
    const { currentMonth } = this.state;

    const { enableOutsideDays, modifiers: modifierFunctions } = this.props;

    let className = "DayPicker-Day";
    let modifiers = [];

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
      return <td key={`outside${i}`} className={className} />;
    }

    const { onDayMouseEnter, onDayMouseLeave, onDayTouchTap, onDayClick }
      = this.props;

    let tabIndex = null;
    if (onDayTouchTap || onDayClick) {
      // Focus on the first day of the month
      if (day.getDate() === 1 && !isOutside) {
        tabIndex = this.props.tabIndex;
      }
      else {
        tabIndex = -1;
      }
    }

    let handlers = {};
    if (onDayMouseEnter) {
      handlers.onMouseEnter = (e) => this.handleDayMouseEnter(e, day, modifiers);
    }
    if (onDayMouseLeave) {
      handlers.onMouseLeave = (e) => this.handleDayMouseLeave(e, day, modifiers);
    }
    if (onDayClick) {
      handlers.onClick = (e) => this.handleDayClick(e, day, modifiers);
    }
    else if (onDayTouchTap) {
      handlers.onTouchTap = (e) => this.handleDayTouchTap(e, day, modifiers);
    }

    return (
      <td key={ i } className={ className }
        tabIndex={ tabIndex }
        role="gridcell"
        onKeyDown={ (e) => this.handleDayKeyDown(e, day, modifiers) }
         {...handlers}>
        { day.getDate() }
      </td>
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

  showPrevMonth(callback) {
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

  focusPreviousDayNode(node) {
    const prevCell = node.previousSibling;
    if (prevCell && !prevCell.classList.contains("DayPicker-Day--outside")) {
      prevCell.focus();
      return;
    }
    const prevRow = node.parentNode.previousSibling;
    if (prevRow &&
      !prevRow.lastChild.classList.contains("DayPicker-Day--outside")) {
      prevRow.lastChild.focus();
      return;
    }
    const tbody = node.parentNode.parentNode;
    this.showPrevMonth(() => {
      const lastWeek = tbody.lastChild;
      const lastDays = lastWeek.querySelectorAll(".DayPicker-Day:not(.DayPicker-Day--outside)");
      lastDays[lastDays.length - 1].focus();
    });
  }

  focusNextDayNode(node) {
    const nextCell = node.nextSibling;
    if (nextCell && !nextCell.classList.contains("DayPicker-Day--outside")) {
      nextCell.focus();
      return;
    }
    const nextRow = node.parentNode.nextSibling;
    if (nextRow) {
      nextRow.firstChild.focus();
      return;
    }
    const tbody = node.parentNode.parentNode;
    this.showNextMonth(() => {
      const firstWeek = tbody.firstChild;
      const firstDays = firstWeek.querySelectorAll(".DayPicker-Day:not(.DayPicker-Day--outside)");
      firstDays[0].focus();
    });
  }


  // Event handlers

  handleKeyDown(e) {
    if (e.keyCode === keys.LEFT) {
      this.showPrevMonth();
    }
    else if (e.keyCode === keys.RIGHT) {
      this.showNextMonth();
    }
  }

  handleDayKeyDown(e, day, modifiers) {
    switch (e.keyCode) {

      case keys.LEFT:
        e.preventDefault();
        e.stopPropagation();
        this.focusPreviousDayNode(e.target);
        break;

      case keys.RIGHT:
        e.preventDefault();
        e.stopPropagation();
        this.focusNextDayNode(e.target);
        break;

      case keys.ENTER:
      case keys.SPACE:
        e.preventDefault();
        e.stopPropagation();
        if (this.props.onDayClick) {
          this.handleDayClick(e, day, modifiers);
        }
        else if (this.props.onDayTouchTap) {
          this.handleDayTouchTap(e, day, modifiers);
        }
        break;

      default:
      break;
    }
  }

  handleNextMonthClick(e) {
    e.stopPropagation();
    if (e.keyCode && e.keyCode !== keys.ENTER) {
      return;
    }
    this.showNextMonth();
  }

  handlePrevMonthClick(e) {
    e.stopPropagation();
    if (e.keyCode && e.keyCode !== keys.ENTER) {
      return;
    }
    this.showPrevMonth();
  }

  handleDayTouchTap(e, day, modifiers) {
    e.persist();
    if (this.props.onDayTouchTap) {
      this.props.onDayTouchTap(e, day, modifiers);
    }
  }

  handleDayClick(e, day, modifiers) {
    e.persist();
    if (this.props.onDayClick) {
      this.props.onDayClick(e, day, modifiers);
    }
  }

  handleDayMouseEnter(e, day, modifiers) {
    e.persist();
    if (this.props.onDayMouseEnter) {
      this.props.onDayMouseEnter(e, day, modifiers);
    }
  }

  handleDayMouseLeave(e, day, modifiers) {
    e.persist();
    if (this.props.onDayMouseLeave) {
      this.props.onDayMouseLeave(e, day, modifiers);
    }
  }

}

export default DayPicker;
