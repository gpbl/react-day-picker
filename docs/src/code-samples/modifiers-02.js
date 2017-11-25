/* eslint-disable no-alert */
/* global window */

import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class EventHandlers extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
  }

  handleDayMouseEnter(day, { firstOfMonth }) {
    if (firstOfMonth) {
      // Do something when the first day of month has been mouse-entered
    }
  }

  handleDayClick(day, { sunday, disabled }) {
    if (sunday) {
      window.alert('Sunday has been clicked');
    }
    if (disabled) {
      window.alert('This day is disabled');
    }
  }

  render() {
    return (
      <DayPicker
        disabledDays={new Date()}
        modifiers={{
          sunday: day => day.getDay() === 0,
          firstOfMonth: day => day.getDate() === 1,
        }}
        onDayClick={this.handleDayClick}
        onDayMouseEnter={this.handleDayMouseEnter}
      />
    );
  }
}
