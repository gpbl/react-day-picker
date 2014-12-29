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

  getInitialState() {
    return { month: this.props.initialMonth.clone() };
  },

  handleTouchTapDay(day, modifiers, e) {
    this.props.onDayTouchTap && this.props.onDayTouchTap(day, modifiers, e);
  },

  handleMouseEnter(day, modifiers, e) {
    this.props.onDayMouseEnter && this.props.onDayMouseEnter(day, modifiers, e);
  },

  handleMouseLeave(day, modifiers, e) {
    this.props.onDayMouseLeave && this.props.onDayMouseLeave(day, modifiers, e);
  },

  handleNextTouchTap() {
    this.setState({month: this.state.month.add(1, 'month')});
  },

  handlePrevTouchTap() {
    this.setState({month: this.state.month.subtract(1, 'month')});
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
        <button className="daypicker__toolbar-button daypicker__toolbar-button--left" style={{float: "left"}} onTouchTap={this.handlePrevTouchTap}/>
        { this.state.month.format('MMMM YYYY') }
        <button className="daypicker__toolbar-button daypicker__toolbar-button--right" style={{float: "right"}} onTouchTap={this.handleNextTouchTap}/>
      </div>
    );
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
    var days = week.map((day, i) => {
      const modifiers = this.getDayModifiers(day);
      const className = 'daypicker__day ' + 
        modifiers.map((mod) => { return 'daypicker__day--' + mod }).join(' '); 
      return (
        <div key={"d" + i} className={className} style={cellStyle}
          onMouseEnter={this.handleMouseEnter.bind(this, day, modifiers)}
          onMouseLeave={this.handleMouseLeave.bind(this, day, modifiers)}
          onTouchTap={this.handleTouchTapDay.bind(this, day, modifiers)}>
          { day.format('D') }
        </div>
      );
    });

    for (let i = 0; i < week[0].weekday(); i++)
      days.unshift(<div key={"dpre" + i} className="daypicker__day daypicker__day--empty" style={cellStyle}>&nbsp;</div>);

    for (let j = week[week.length-1].weekday() + 1; j < 7; j++)
      days.push(<div key={"dpost_" + j} className="daypicker__day daypicker__day--empty" style={cellStyle}>&nbsp;</div>);

    return days;
  }

});

export default DayPicker;