import React from 'react';
import moment from 'moment';
import DayPicker, { DateUtils } from '../../../src';

import '../../../src/style.css';
import '../styles/range.css';

const initialState = {
  from: null,
  to: null,
  enteredTo: null, // Keep track of the last day for mouseEnter.
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
    this.reset = this.reset.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
  }

  handleDayClick(day) {
    const { from, to } = this.state;

    if (DateUtils.isSameDay(day, from)) {
      this.reset();
      return;
    }

    if (isSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day,
        to: null,
        enteredTo: null,
      });
    } else {
      this.setState({
        to: day,
        enteredTo: day,
      });
    }
  }

  handleDayMouseEnter(day) {
    const { from, to } = this.state;

    if (!isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day,
      });
    }
  }

  reset() {
    this.setState(initialState);
  }

  render() {
    const { from, to, enteredTo } = this.state;

    return (
      <div>
        { !from && !to &&
          <p>Please select the <strong>first day</strong>.</p>
        }
        { from && !to &&
          <p>Please select the <strong>last day</strong>.</p>
        }
        { from && to &&
          <p>
            You chose from { moment(from).format('L') } to { moment(enteredTo).format('L') }.
            { ' ' }
            <a onClick={ this.reset }>Reset</a>
          </p>
        }
        <DayPicker
          className="Range"
          numberOfMonths={ 2 }
          fromMonth={ from }
          selectedDays={ [from, { from, to: enteredTo }] }
          disabledDays={ { before: this.state.from } }
          modifiers={ { start: from, end: enteredTo } }
          onDayClick={ this.handleDayClick }
          onDayMouseEnter={ this.handleDayMouseEnter }
        />
      </div>
    );
  }
}
