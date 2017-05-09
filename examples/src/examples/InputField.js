import React from 'react';
import moment from 'moment';

import DayPickerInput from '../../../src/DayPickerInput';

import '../../../src/style.css';

const DAY_FORMAT = 'LL';

export default class InputField extends React.Component {
  state = {
    selectedDay: undefined,
    isMonday: false,
  };

  handleDayChange = (selectedDay, modifiers) => {
    if (modifiers.disabled) {
      this.setState({
        selectedDay: undefined,
      });
      return;
    }
    this.setState({ selectedDay, isMonday: modifiers.monday });
  };

  render() {
    const { selectedDay, isMonday } = this.state;
    const formattedDay = selectedDay
      ? moment(selectedDay).format(DAY_FORMAT)
      : '';
    return (
      <div>
        <p>
          {!selectedDay
            ? '🤔 Type or pick a valid day'
            : `😄 You chose ${formattedDay}${isMonday ? ' (a Monday)' : ''}`}
        </p>
        <DayPickerInput
          value={formattedDay}
          onDayChange={this.handleDayChange}
          format={DAY_FORMAT}
          placeholder={`E.g. ${moment().locale('en').format(DAY_FORMAT)}`}
          dayPickerProps={{
            disabledDays: {
              daysOfWeek: [0, 6],
            },
            enableOutsideDays: true,
            modifiers: {
              monday: { daysOfWeek: [1] },
            },
          }}
        />
      </div>
    );
  }
}
