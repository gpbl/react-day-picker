import React from 'react';
import moment from 'moment';
import DayPicker, { DateUtils } from '../../../src';

import '../../../src/style.css';
import '../styles/range.css';

export default class RangeAdvanced extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
    this.reset = this.reset.bind(this);
  }
  state = {
    isSelectingLastDay: false,
    from: null,
    to: null,
  };

  handleDayClick(e, day) {
    const { from, isSelectingLastDay } = this.state;
    // Enable day selection on mouse enter
    if (!isSelectingLastDay) {
      this.setState({
        isSelectingLastDay: true,
        from: day,
        to: null,
      });
    }
    if (isSelectingLastDay && from && day < from) {
      // Reset the from-day if the clicked day is before the current from-day
      this.setState({
        from: day,
        to: null,
      });
    }
    if (isSelectingLastDay && DateUtils.isSameDay(day, from)) {
      // Reset everything if the clicked day is the same as the current from-day
      this.reset();
    }
    if (isSelectingLastDay) {
      // Unset the day selection on mouse enter
      this.setState({
        isSelectingLastDay: false,
      });
    }
  }

  handleDayMouseEnter(e, day) {
    const { isSelectingLastDay, from } = this.state;
    if (!isSelectingLastDay || (from && day < from) || DateUtils.isSameDay(day, from)) {
      return;
    }
    this.setState({
      to: day,
    });
  }

  reset() {
    this.setState({
      from: null,
      to: null,
      isSelectingLastDay: false,
    });
  }

  render() {
    const { from, to } = this.state;
    return (
      <div>
        { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
        { from && !to && <p>Please select the <strong>last day</strong>.</p> }
        { from && to &&
          <p>
            You chose from { moment(from).format('L') } to { moment(to).format('L') }.
            { ' ' }<a onClick={ this.reset }>Reset</a>
          </p>
        }
        <DayPicker
          className="Range"
          numberOfMonths={ 2 }
          fromMonth={ from }
          selectedDays={ [from, { from, to }] }
          disabledDays={ { before: this.state.from } }
          modifiers={ {
            start: from,
            end: to,
          } }
          onDayClick={ this.handleDayClick }
          onDayMouseEnter={ this.handleDayMouseEnter }
        />
      </div>
    );
  }

}
