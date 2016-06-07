import React from 'react';
import DayPicker, { DateUtils } from '../../../src';

import '../../../src/style.css';;

export default class DisabledDays extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
  }
  state = {
    selectedDay: null,
  };
  handleDayClick(e, day, { disabled, selected }) {
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
          selectedDays={day => DateUtils.isSameDay(selectedDay, day)}
          disabledDays={DateUtils.isPastDay}
          enableOutsideDays
          onDayClick={this.handleDayClick}
        />
        <p>
          {selectedDay ? selectedDay.toLocaleDateString() : 'Please select a day 👻'}
        </p>
      </div>
    );
  }
}
