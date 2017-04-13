import React from 'react';
import DayPicker from '../../../src';
import '../../../src/style.css';

export default class SelectableDay extends React.Component {
  state = {
    selectedDay: null,
  };
  handleDayClick = (day, { selected }) => {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }
  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        <DayPicker
          selectedDays={ selectedDay }
          onDayClick={ this.handleDayClick }
        />
        <p>
          { selectedDay ? selectedDay.toLocaleDateString() : 'Please select a day 👻' }
        </p>
      </div>
    );
  }
}
