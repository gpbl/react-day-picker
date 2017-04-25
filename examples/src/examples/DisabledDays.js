import React from 'react';
import DayPicker from '../../../src';

import '../../../src/style.css';

function sundays(day) {
  return day.getDay() === 0;
}

function saturdays(day) {
  return day.getDay() === 6;
}

export default class DisabledDays extends React.Component {
  state = {
    selectedDay: null,
  };
  handleDayClick = (day, { disabled, selected }) => {
    if (disabled) {
      return;
    }
    this.setState({
      selectedDay: selected ? null : day,
    });
  };
  render() {
    return (
      <div>
        <DayPicker
          enableOutsideDays
          selectedDays={this.state.selectedDay}
          disabledDays={[sundays, saturdays]}
          onDayClick={this.handleDayClick}
        />
        <p>
          {this.state.selectedDay
            ? this.state.selectedDay.toLocaleDateString()
            : 'Please select a day 👻'}
        </p>
      </div>
    );
  }
}
