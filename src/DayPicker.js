import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { weeks } from './CalendarUtils';

class DayPicker extends Component {

  static propTypes = {

    enableOutsideDays: PropTypes.bool,

    // default is current month
    initialMonth: PropTypes.object,

    // default is 1
    numberOfMonths: PropTypes.number,

    modifiers: PropTypes.object,

    onDayClick: PropTypes.func,

    // requires react-tap-event-plugin
    onDayTouchTap: PropTypes.func,

    onDayMouseEnter: PropTypes.func,
    onDayMouseLeave: PropTypes.func,

    onNextMonthClick: PropTypes.func,
    onPrevMonthClick: PropTypes.func

  }

  static defaultProps = {
    initialMonth: moment(),
    numberOfMonths: 1,
    enableOutsideDays: false
  }

  constructor(props) {
    super(props);
    this.state = {
      month: this.props.initialMonth.clone()
    };
  }

  handleDayTouchTap(day, modifiers, e) {
    if (this.props.onDayTouchTap) {
      this.props.onDayTouchTap(day, modifiers, e);
    }
  }

  handleDayClick(day, modifiers, e) {
    if (this.props.onDayClick) {
      this.props.onDayClick(day, modifiers, e);
    }
  }

  handleDayMouseEnter(day, modifiers, e) {
    if (this.props.onDayMouseEnter) {
      this.props.onDayMouseEnter(day, modifiers, e);
    }
  }

  handleDayMouseLeave(day, modifiers, e) {
    if (this.props.onDayMouseLeave) {
      this.props.onDayMouseLeave(day, modifiers, e);
    }
  }

  handleNextMonthClick(e) {
    e.persist();
    const { month } = this.state;
    const nextMonth = month.clone().add(1, 'month');
    this.setState({ month: nextMonth }, () => {
      if (this.props.onNextMonthClick) {
        this.props.onNextMonthClick(this.state.month, e);
      }
    });
  }

  handlePrevMonthClick(e) {
    e.persist();
    const { month } = this.state;
    const prevMonth = month.clone().subtract(1, 'month');
    this.setState({ month: prevMonth }, () => {
      if (this.props.onPrevMonthClick) {
        this.props.onPrevMonthClick(this.state.month, e);
      }
    });
  }

  getModifiersForDay(day) {
    const { modifiers } = this.props;
    let dayModifiers = [];

    if (modifiers) {
      for (let modifier in modifiers) {
        let func = modifiers[modifier];

        if (func(day)) {
          dayModifiers.push(modifier);
        }
      }
    }

    return dayModifiers;
  }

  showMonth(month) {
    this.setState({month: month});
  }

  render() {
    let { month } = this.state;

    let months = [];
    for (let i = 0; i < this.props.numberOfMonths; i++) {
      months.push(this.renderMonth(month, i));
      month = month.clone().add(1, 'month');
    }

    return (
      <div>
        {months}
      </div>
    );
  }

  renderMonth(month, monthIndex) {
    const isFirstMonth = (month === this.state.month);
    const isLastMonth = (monthIndex === this.props.numberOfMonths - 1);
    return (
      <table key={monthIndex} className="DayPicker">
        <caption className="DayPicker-caption">
          { isFirstMonth && this.renderNavButton('left') }
          { month.format('MMMM YYYY') }
          { isLastMonth && this.renderNavButton('right') }
        </caption>
        <thead>
          { this.renderWeekHeader() }
        </thead>
        <tbody>
          { this.renderWeeks(month) }
        </tbody>
      </table>
    );
  }

  renderNavButton(position) {
    const className = `DayPicker-nav DayPicker-nav--${position}`;
    const handler = position === 'left'
      ? this.handlePrevMonthClick
      : this.handleNextMonthClick;

    return <span ref={"btn-" + position} className={className}
      style={{float: position}} onClick={handler.bind(this)} />;
  }

  renderWeeks(month) {
    return weeks(month).map((week, i) =>
      <tr key={i} className="DayPicker-week">
        { this.renderDays(week) }
      </tr>
    );
  }

  renderWeekHeader() {
    let header = [];
    for (let i = 0; i < 7; i++) {
      header.push(
        <th key={i} className="DayPicker-weekday">
          { moment().weekday(i).format('dd') }
        </th>
      );
    }

    return header;
  }

  renderDays(week) {
    const firstDay = week[0];
    const lastDay = week[week.length - 1];

    let days = week.map(day => this.renderDay(day));

    // days belonging to the previous month
    for (let i = 0; i < firstDay.weekday(); i++) {
      const prevDay = firstDay.clone().subtract(i + 1, 'day');
      days.unshift(this.renderDay(prevDay, true));
    }

    // days belonging to the next month
    for (let j = lastDay.weekday() + 1, count = 1; j < 7; j++, count++) {
      const nextDay = lastDay.clone().add(count, 'day');
      days.push(this.renderDay(nextDay, true));
    }

    return days;
  }

  renderDay(day, outside) {
    const key = `${day.dayOfYear()}`;
    let className = 'DayPicker-day';

    if (outside) {
      className += ' DayPicker-day--outside';
    }

    if (outside && !this.props.enableOutsideDays) {
      return <td className={className} ref={key} key={key} />;
    }
    else {
      let modifiers = this.getModifiersForDay(day);
      if (outside) {
        modifiers.push('outside');
      }
      className += modifiers.map(mod => ` DayPicker-day--${mod}`).join('');
      return (
        <td ref={key} key={key}
          className={className}
          onMouseEnter={this.handleDayMouseEnter.bind(this, day, modifiers)}
          onMouseLeave={this.handleDayMouseLeave.bind(this, day, modifiers)}
          onTouchTap={this.handleDayTouchTap.bind(this, day, modifiers)}
          onClick={this.handleDayClick.bind(this, day, modifiers)}>
          { day.format('D') }
        </td>
      );
    }
  }

}

export default DayPicker;
