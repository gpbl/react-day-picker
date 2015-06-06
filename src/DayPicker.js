import React, { Component, PropTypes } from "react";
import Utils from "./Utils";
import LocaleUtils from "./LocaleUtils";

class DayPicker extends Component {

  static propTypes = {
    initialMonth: PropTypes.instanceOf(Date), // default is current month
    modifiers: PropTypes.object,

    locale: PropTypes.string, // default is `en`
    numberOfMonths: PropTypes.number, // default is 1

    enableOutsideDays: PropTypes.bool, // default is false


    onDayClick: PropTypes.func,
    onDayTouchTap: PropTypes.func,  // requires react-tap-event-plugin

    onDayMouseEnter: PropTypes.func,
    onDayMouseLeave: PropTypes.func,

    onNextMonthClick: PropTypes.func,
    onPrevMonthClick: PropTypes.func

  }

  static defaultProps = {
    locale: "en",
    initialMonth: new Date(),
    numberOfMonths: 1,
    enableOutsideDays: false
  }

  constructor(props) {
    super(props);
    let { initialMonth } = this.props;
    this.state = {
      currentMonth: Utils.startOfMonth(initialMonth)
    };
  }

  // Render

  render() {
    const { numberOfMonths } = this.props;
    const { currentMonth } = this.state;
    let months = [];
    for (let i = 0; i < numberOfMonths; i++) {
      months.push(this.renderMonth(Utils.addMonths(currentMonth, i), i));
    }
    return (
      <div className="DayPicker">
        { months }
      </div>
    );
  }

  renderMonth(d, i) {
    const { locale, numberOfMonths } = this.props;

    const isFirstMonth = i === 0;
    const isLastMonth = i === numberOfMonths - 1;

    return (
      <div className="DayPicker-Month" key={d.getMonth()}>
        <div className="DayPicker-NavBar">
          { isFirstMonth && this.renderNavButton("prev") }
          <span className="DayPicker-Caption">
            { LocaleUtils.formatMonthTitle(d, locale) }
          </span>
          { isLastMonth && this.renderNavButton("next") }
        </div>
        { this.renderWeekDays() }
        { this.renderWeeksInMonth(d) }
      </div>
    );
  }

  renderNavButton(position) {
    let clickHandler = position === "prev" ?
      ::this.handlePrevMonthClick :
      ::this.handleNextMonthClick;

    return (
      <span
        className={`DayPicker-NavButton DayPicker-NavButton--${position}`}
        onClick={clickHandler} />
    );
  }

  renderWeekDays() {
    const { locale } = this.props;
    let days = [];
    for (let i = 0; i < 7; i++) {
      days.push(
        <span key={i} className="DayPicker-Weekday">
          { LocaleUtils.formatWeekday(i, locale) }
        </span>
      );
    }
    return (
      <div className="DayPicker-Weekdays">
        { days }
      </div>
    );
  }

  renderWeeksInMonth(month) {
    return Utils.getWeekArray(month).map((week, i) =>
      <div key={i} className="DayPicker-Week">
        { week.map(::this.renderDay) }
      </div>
    );
  }

  renderDay(d, i) {
    const { currentMonth } = this.state;
    const { enableOutsideDays, modifiers: modifierFunctions } = this.props;

    let className = "DayPicker-Day";
    let modifiers = [];

    const outsideModifier = "outside";
    const todayModifier = "today";

    const isToday = Utils.isSameDay(d, new Date());
    if (isToday) {
      modifiers.push(todayModifier);
    }

    const isOutside = Utils.isDayOutsideMonth(d, currentMonth);
    if (isOutside) {
      modifiers.push(outsideModifier);
    }

    if (modifierFunctions) {
      const customModifiers = Utils.getModifiersForDay(d, modifierFunctions);
      modifiers = [...modifiers, ...customModifiers];
    }

    className += modifiers.map(modifier => ` ${className}--${modifier}`).join("");

    if (isOutside && !enableOutsideDays) {
      return <span key={i} className={className} />;
    }

    const eventsHandlers = {
      onClick: this.handleDayClick.bind(this, d, modifiers),
      onMouseEnter: this.handleDayMouseEnter.bind(this, d, modifiers),
      onMouseLeave: this.handleDayMouseLeave.bind(this, d, modifiers),
      onTouchTap: this.handleDayTouchTap.bind(this, d, modifiers)
    };

    return (
      <span key={i} className={className} {...eventsHandlers}>
        { d.getDate() }
      </span>
    );
  }

  // Event handlers

  handleNextMonthClick(e) {
    e.persist();
    const { currentMonth } = this.state;
    const nextMonth = Utils.addMonths(currentMonth, 1);
    this.setState({ currentMonth: nextMonth }, () => {
      if (this.props.onNextMonthClick) {
        this.props.onNextMonthClick(this.state.currentMonth, e);
      }
    });
  }

  handlePrevMonthClick(e) {
    e.persist();
    const { currentMonth } = this.state;
    const prevMonth = Utils.addMonths(currentMonth, -1);
    this.setState({ currentMonth: prevMonth }, () => {
      if (this.props.onPrevMonthClick) {
        this.props.onPrevMonthClick(this.state.currentMonth, e);
      }
    });
  }

  handleDayTouchTap(d, modifiers, e) {
    e.persist();
    if (this.props.onDayTouchTap) {
      this.props.onDayTouchTap(d, modifiers, e);
    }
  }

  handleDayClick(d, modifiers, e) {
    e.persist();
    if (this.props.onDayClick) {
      this.props.onDayClick(d, modifiers, e);
    }
  }

  handleDayMouseEnter(d, modifiers, e) {
    e.persist();
    if (this.props.onDayMouseEnter) {
      this.props.onDayMouseEnter(d, modifiers, e);
    }
  }

  handleDayMouseLeave(d, modifiers, e) {
    e.persist();
    if (this.props.onDayMouseLeave) {
      this.props.onDayMouseLeave(d, modifiers, e);
    }
  }

}

export default DayPicker;
