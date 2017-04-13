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
  }
  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        <DayPicker
          enableOutsideDays
          selectedDays={ selectedDay }
          disabledDays={ day => day.getDay() === 0 || day.getDay() === 6 }
          onDayClick={ this.handleDayClick }
        />
        <p>
          { selectedDay ? selectedDay.toLocaleDateString() : 'Please select a day 👻' }
        </p>
      </div>
    );
  }
}
