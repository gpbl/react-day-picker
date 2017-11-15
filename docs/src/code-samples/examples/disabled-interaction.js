import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }
  handleDayClick(day, { disabled, selected }) {
    if (disabled) {
      return;
    }
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }
  render() {
    const disabledDays = {
      daysOfWeek: [0, 6],
    };
    return (
      <div>
        <DayPicker
          enableOutsideDays
          selectedDays={this.state.selectedDay}
          disabledDays={disabledDays}
          onDayClick={this.handleDayClick}
        />
        <div>
          {this.state.selectedDay
            ? this.state.selectedDay.toLocaleDateString()
            : 'Please select a day.'}
        </div>
      </div>
    );
  }
}
