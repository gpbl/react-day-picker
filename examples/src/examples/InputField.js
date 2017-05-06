import React from 'react';
import moment from 'moment';

import DayInput from '../../../src/DayInput';

import '../../../src/style.css';

const weekends = day => day.getDay() === 0 || day.getDay() === 6;
const monday = day => day.getDay() === 1;

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
        <DayInput
          value={formattedDay}
          onDayChange={this.handleDayChange}
          format={DAY_FORMAT}
          placeholder={`E.g. ${moment().locale('en').format(DAY_FORMAT)}`}
          dayPickerProps={{
            disabledDays: weekends,
            enableOutsideDays: true,
            modifiers: { monday },
          }}
        />
      </div>
    );
  }
}
