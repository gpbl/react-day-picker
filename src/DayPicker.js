import React from 'react';
import moment from 'moment';
import { weeks } from './utils';

const DayPicker = React.createClass({

  propTypes: {

    enableOutsideDays: React.PropTypes.bool,

    initialMonth: React.PropTypes.object, // default is current month
    modifiers: React.PropTypes.object,

    onDayClick: React.PropTypes.func,
    onDayTouchTap: React.PropTypes.func, // requires react-tap-event-plugin
    onDayMouseEnter: React.PropTypes.func,
    onDayMouseLeave: React.PropTypes.func,

    onNextMonthClick: React.PropTypes.func,
    onPrevMonthClick: React.PropTypes.func

  },

  getDefaultProps() {
    return { initialMonth: moment(), enableOutsideDays: false };
  },

  getInitialState() {
    return { month: this.props.initialMonth.clone() };
  },

  handleDayTouchTap(day, modifiers, e) {
    if (this.props.onDayTouchTap) {
      this.props.onDayTouchTap(day, modifiers, e);
    }
  },

  handleDayClick(day, modifiers, e) {
    if (this.props.onDayClick) {
      this.props.onDayClick(day, modifiers, e);
    }
  },

  handleDayMouseEnter(day, modifiers, e) {
    if (this.props.onDayMouseEnter) {
      this.props.onDayMouseEnter(day, modifiers, e);
    }
  },

  handleDayMouseLeave(day, modifiers, e) {
    if (this.props.onDayMouseLeave) {
      this.props.onDayMouseLeave(day, modifiers, e);
    }
  },

  handleNextMonthClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const { month } = this.state;
    const nextMonth = month.clone().add(1, 'month');
    this.setState({ month: nextMonth }, () => {
      if (this.props.onNextMonthClick) {
        this.props.onNextMonthClick(this.state.month);
      }
    });
  },

  handlePrevMonthClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const { month } = this.state;
    const prevMonth = month.clone().subtract(1, 'month');
    this.setState({ month: prevMonth }, () => {
      if (this.props.onPrevMonthClick) {
        this.props.onPrevMonthClick(this.state.month);
      }
    });
  },

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
  },

  showMonth(month) {
    this.setState({month: month});
  },

  render() {
    const { month } = this.state;
    return (
      <table className="DayPicker">
        <caption className="DayPicker-caption">
          { this.renderNavButton('left') }
          { month.format('MMMM YYYY') }
          { this.renderNavButton('right') }
        </caption>
        <thead>
          { this.renderWeekHeader() }
        </thead>
        <tbody>
          { this.renderWeeks() }
        </tbody>
      </table>
    );
  },

  renderNavButton(position) {
    const className = `DayPicker-nav DayPicker-nav--${position}`;
    const handler = position === 'left'
      ? this.handlePrevMonthClick
      : this.handleNextMonthClick;

    return <span ref={"btn-"+position} className={className}
      style={{float: position}} onClick={handler} />;
  },

  renderWeeks() {
    return weeks(this.state.month).map((week, i) =>
      <tr key={i} className="DayPicker-week">
        { this.renderDays(week) }
      </tr>
    );
  },

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
  },

  renderDays(week) {
    const firstDay = week[0];
    const lastDay = week[week.length-1];

    let days = week.map(day => this.renderDay(day));

    // days belonging to the previous month
    for (let i = 0; i < firstDay.weekday(); i++) {
      const prevDay = firstDay.clone().subtract(i+1, 'day');
      days.unshift(this.renderDay(prevDay, true));
    }

    // days belonging to the next month
    for (let j = lastDay.weekday() + 1, count = 1; j < 7; j++, count++) {
      const nextDay = lastDay.clone().add(count, 'day');
      days.push(this.renderDay(nextDay, true));
    }

    return days;
  },

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
      const modifiers = this.getModifiersForDay(day);
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

});

export default DayPicker;
