import React from 'react';
import moment from 'moment';
import { weeks } from './utils';

const tableStyle = {display: 'table'};
const captionStyle = {display: 'table-caption', textAlign: 'center'};
const rowStyle = {display: 'table-row'};
const cellStyle = {display: 'table-cell', textAlign: 'center'};

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
    this.setState({month: nextProps.initialMonth});
  },
  
  componentDidUpdate(prevProps, prevState) {
    if(this.state.focus)
      this.refs['d'+this.state.focus].getDOMNode().focus();  
  },

  getInitialState() {
    return { month: this.props.initialMonth.clone(), focus: null };
  },

  handleDayTouchTap(day, modifiers, e) {
    this.props.onDayTouchTap && this.props.onDayTouchTap(day, modifiers, e);
  },

  handleDayKeyUp(day, modifiers, e) {
    if (e.keyCode === 13 || e.keyCode === 32)
      this.props.onDayTouchTap && this.props.onDayTouchTap(day, modifiers, e);
  },

  handleDayMouseEnter(day, modifiers, e) {
    this.props.onDayMouseEnter && this.props.onDayMouseEnter(day, modifiers, e);
  },

  handleDayMouseLeave(day, modifiers, e) {
    this.props.onDayMouseLeave && this.props.onDayMouseLeave(day, modifiers, e);
  },

  handleDayFocus(day, modifiers, e){
    this.setState({focus: day.dayOfYear()}, () => {
      this.props.onDayFocus && this.props.onDayFocus(e);
    });
  },
  
  handleDayBlur(day, modifiers, e){
    this.setState({focus: null});
  },

  handleNextTouchTap(e) {
    const nextMonth = this.state.month.add(1, 'month');
    this.setState({month: nextMonth});
  },

  handlePrevTouchTap(e) {
    const prevMonth = this.state.month.subtract(1, 'month');
    this.setState({month: prevMonth});
  },

  getDayModifiers(day) {
    if (!this.props.modifiers) return '';
    const modifiers = this.props.modifiers;
    var dayModifiers = [];
    for (let modifier in modifiers) {
      var func = modifiers[modifier];
      if (func(day)) dayModifiers.push(modifier);
    }
    return dayModifiers;
  },

  render() {
    return (
      <div className="daypicker" style={tableStyle}>
        { this.renderToolbar() }
        { this.renderWeekHeader() }
        { this.renderWeeks() }
      </div>
    );
  },

  renderToolbar() {
    return (
      <div className="daypicker__toolbar" style={captionStyle}>
        { this.renderToolbarButton('left') }
        { this.state.month.format('MMMM YYYY') }
        { this.renderToolbarButton('right') }
      </div>
    );
  },

  renderToolbarButton(position) {
    const className = `daypicker__toolbar-button daypicker__toolbar-button--${position}`;
    const handler = position === 'left' ?  this.handlePrevTouchTap :  this.handleNextTouchTap;

    return <button ref={"btn-"+position} className={className} style={{float: position}} onTouchTap={handler} />;
  },

  renderWeeks() {
    return weeks(this.state.month).map((week, i) => {
      return (
        <div key={"w" + i} className="daypicker__week" style={rowStyle}>
          { this.renderDays(week) }
        </div>
      );
    });
  },

  renderWeekHeader() {
    var header = [];
    for (let i = 0; i < 7; i++) {
      header.push(
        <div key={"wh_" + i} className="daypicker__header--day" style={cellStyle}>
          { moment().weekday(i).format('dd') }
        </div>
      )
    }
    return <div className="daypicker__header" style={rowStyle}>{ header }</div>;
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
    const modifiers = this.getDayModifiers(day);
    
    var className = 'daypicker__day';
    if (otherMonth) className += ' daypicker__day--other-month';
    className += modifiers.map((mod) => { return ' daypicker__day--' + mod }).join('');

    return (
      <div tabIndex="0" 
        ref={"d" + day.dayOfYear()} 
        key={"d" + day.dayOfYear()} 
        className={className} 
        style={cellStyle}
        onMouseEnter={this.handleDayMouseEnter.bind(this, day, modifiers)}
        onMouseLeave={this.handleDayMouseLeave.bind(this, day, modifiers)}
        onKeyUp={this.handleDayKeyUp.bind(this, day, modifiers)}
        onTouchTap={this.handleDayTouchTap.bind(this, day, modifiers)}
        onBlur={this.handleDayBlur.bind(this, day, modifiers)}
        onFocus={this.handleDayFocus.bind(this, day, modifiers)}>
        { day.format('D') }
      </div>
    );
  }

});

export default DayPicker;