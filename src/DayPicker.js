import React from 'react';
import moment from 'moment';
import { weeks } from './utils';

const DayPicker = React.createClass({

  propTypes: {
    
    initialMonth: React.PropTypes.object, // default is current month
    modifiers: React.PropTypes.object,

    onDayTouchTap: React.PropTypes.func, // requires react-tap-event-plugin enabled
    onDayMouseEnter: React.PropTypes.func, 
    onDayMouseLeave: React.PropTypes.func
  
  },

  getDefaultProps() {
    return { initialMonth: moment() };
  },

  componentWillReceiveProps(nextProps) {
    this.setState({ month: nextProps.initialMonth });
  },
  
  getInitialState() {
    return { month: this.props.initialMonth.clone() };
  },

  handleDayTouchTap(day, modifiers, e) {
    this.props.onDayTouchTap && this.props.onDayTouchTap(day, modifiers, e);
  },

  handleDayMouseEnter(day, modifiers, e) {
    this.props.onDayMouseEnter && this.props.onDayMouseEnter(day, modifiers, e);
  },

  handleDayMouseLeave(day, modifiers, e) {
    this.props.onDayMouseLeave && this.props.onDayMouseLeave(day, modifiers, e);
  },

  handleNextTouchTap(e) {
    this.setState({ month: this.state.month.add(1, 'month') });
  },

  handlePrevTouchTap(e) {
    this.setState({ month: this.state.month.subtract(1, 'month') });
  },

  getModifiersForDay(day) {
    var dayModifiers = [];
    if (this.props.modifiers) {
      const modifiers = this.props.modifiers;
      for (let modifier in modifiers) {
        var func = modifiers[modifier];
        if (func(day)) dayModifiers.push(modifier);
      }
    }
    return dayModifiers;
  },

  render() {
    return (
      <table className="daypicker">
        <caption className="daypicker__caption">
          { this.renderNavButton('left') }
          { this.state.month.format('MMMM YYYY') }
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
    const className = `daypicker__nav daypicker__nav--${position}`;
    const handler = position === 'left' ?  this.handlePrevTouchTap :  this.handleNextTouchTap;

    return <span ref={"btn-"+position} className={className} style={{float: position}} onTouchTap={handler} />;
  },

  renderWeeks() {
    return weeks(this.state.month).map((week, i) => {
      return (
        <tr key={"w" + i} className="daypicker__week">
          { this.renderDays(week) }
        </tr>
      );
    });
  },

  renderWeekHeader() {
    var header = [];
    for (let i = 0; i < 7; i++) {
      header.push(
        <th key={"wh_" + i} className="daypicker__weekday">
          { moment().weekday(i).format('dd') }
        </th>
      )
    }
    return header;
  },

  renderDays(week) {
    const firstDay = week[0];
    const lastDay = week[week.length-1];
   
    var days = week.map(day => this.renderDay(day));

    // days belonging to the previous month
    for (let i = 0; i < firstDay.weekday(); i++) {
      var prevDay = firstDay.clone().subtract(i+1, 'day');
      days.unshift(this.renderDay(prevDay, true));
    }

    // days belonging to the next month
    for (let j = lastDay.weekday() + 1, count = 1; j < 7; j++, count++) {
      var nextDay = lastDay.clone().add(count, 'day');
      days.push(this.renderDay(nextDay, true));
    }

    return days;
  },

  renderDay(day, otherMonth) {
    const modifiers = this.getModifiersForDay(day);
    
    var className = 'daypicker__day';
    if (otherMonth) className += ' daypicker__day--other-month';
    className += modifiers.map((mod) => { return ' daypicker__day--' + mod }).join('');

    return (
      <td ref={"d" + day.dayOfYear()} key={"d" + day.dayOfYear()} 
        className={className} 
        onMouseEnter={this.handleDayMouseEnter.bind(this, day, modifiers)}
        onMouseLeave={this.handleDayMouseLeave.bind(this, day, modifiers)}
        onTouchTap={this.handleDayTouchTap.bind(this, day, modifiers)}>
        { day.format('D') }
      </td>
    );
  }

});

export default DayPicker;