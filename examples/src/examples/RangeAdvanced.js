import React from 'react';
import moment from 'moment';
import DayPicker, { DateUtils } from '../../../src';

import '../../../src/style.css';
import '../styles/range.css';

const initialState = {
  from: null,
  to: null,
  tempTo: null, // Keep track of the last day for mouseenter.
};

function isSelectingFirstDay(from, to, day) {
  const firstDayIsNotSelected = !from;
  const selectedDayIsBeforeFirstDay = day < from;
  const rangeIsSelected = from && to;
  return firstDayIsNotSelected || selectedDayIsBeforeFirstDay || rangeIsSelected;
}

export default class RangeAdvanced extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleDayClick(day) {
    const { from, to } = this.state;

    if (DateUtils.isSameDay(day, from)) {
      // Reset everything if the clicked day is the same as the current from-day.
      // Remove it if you want to allow the first and last day to be the same.
      this.reset();
      return;
    }

    const newState = isSelectingFirstDay(from, to, day)
      ? { from: day, to: null, tempTo: null }
      : { to: day, tempTo: day };

    this.setState(() => newState);
  }

  handleDayMouseEnter(day) {
    const { from, to } = this.state;

    if (!isSelectingFirstDay(from, to, day)) {
      this.setState(() => ({ tempTo: day }));
    }
  }

  reset() {
    this.setState(() => initialState);
  }

  render() {
    const { from, to, tempTo } = this.state;
    return (
      <div>
        { !from && !tempTo && <p>Please select the <strong>first day</strong>.</p> }
        { from && !tempTo && <p>Please select the <strong>last day</strong>.</p> }
        { from && tempTo &&
          <p>
            You chose from { moment(from).format('L') } to { moment(tempTo).format('L') }.
            { ' ' }<a onClick={ this.reset.bind(this) }>Reset</a>
          </p>
        }
        <DayPicker
          className="Range"
          numberOfMonths={ 2 }
          fromMonth={ from }
          selectedDays={ [from, { from, to: tempTo }] }
          disabledDays={ { before: this.state.from } }
          modifiers={ { start: from, end: tempTo } }
          onDayClick={ this.handleDayClick.bind(this) }
          onDayMouseEnter={ this.handleDayMouseEnter.bind(this) }
        />
      </div>
    );
  }
}
