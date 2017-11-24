import React from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
      isDisabled: false,
    };
  }
  handleDayChange(selectedDay, modifiers) {
    this.setState({
      selectedDay,
      isDisabled: modifiers.disabled,
    });
  }
  render() {
    const { selectedDay, isDisabled } = this.state;
    const formattedDay = selectedDay
      ? moment(selectedDay).format('DD/MM/YYYY')
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
          format="DD/MM/YYYY"
          placeholder={`E.g. ${moment()
            .locale('en')
            .format('DD/MM/YYYY')}`}
          dayPickerProps={{
            disabledDays: {
              daysOfWeek: [0, 6],
            },
          }}
        />
      </div>
    );
  }
}
