import React from 'react';
import moment from 'moment';

import DayPickerInput from '../../../src/DayPickerInput';

import '../../../src/style.css';

const DAY_FORMAT = 'DD/MM/YYYY';

export default class InputField extends React.Component {
  state = {
    selectedDay: undefined,
    isDisabled: false,
  };

  handleDayChange = (selectedDay, modifiers) => {
    this.setState({
      selectedDay,
      isDisabled: modifiers.disabled,
    });
  };

  render() {
    const { selectedDay, isDisabled } = this.state;
    const formattedDay = selectedDay
      ? moment(selectedDay).format(DAY_FORMAT)
      : '';
    return (
      <div>
        <p>
          {!selectedDay && '🤔 Type or pick a valid day'}
          {selectedDay && isDisabled && '😡 This day is disabled'}
          {selectedDay && !isDisabled && `😄 You chose ${formattedDay}`}
        </p>
        <DayPickerInput
          value={formattedDay}
          onDayChange={this.handleDayChange}
          format={DAY_FORMAT}
          placeholder={`E.g. ${moment().locale('en').format(DAY_FORMAT)}`}
          dayPickerProps={{
            todayButton: 'Go to Today',
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
