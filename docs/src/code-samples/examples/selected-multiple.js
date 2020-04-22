import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDays: [],
    };
  }

  handleDayClick(day, { selected }) {
    const { selectedDays } = this.state;
    const _selectedDays = selectedDays.concat();
    if (selected) {
      const selectedIndex = _selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      _selectedDays.splice(selectedIndex, 1);
    } else {
      _selectedDays.push(day);
    }
    this.setState({ selectedDays: _selectedDays });
  }

  render() {
    return (
      <div>
        <DayPicker
          selectedDays={this.state.selectedDays}
          onDayClick={this.handleDayClick}
        />
      </div>
    );
  }
}
