import React from 'react';
import DayPicker from '../../../src';

import '../../../src/style.css';

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
          disabledDays={{ daysOfWeek: [0, 6] }}
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
