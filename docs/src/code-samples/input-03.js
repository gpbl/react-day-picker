import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

// Make sure moment.js has the required locale
import 'moment/locale/it';

export default class MyForm extends React.Component {
  state = {
    selectedDay: undefined,
  };
  handleDayChange = selectedDay => {
    this.setState({ selectedDay });
  };
  render() {
    const format = 'LL';
    const locale = 'it';
    let value = '';
    if (this.state.selectedDay) {
      // Format the value of the input field
      value = this.state.selectedDay.locale(locale).format(format);
    }
    return (
      <DayPickerInput
        name="birthday"
        placeholder="E.g. 15 ottobre 2017"
        format={format}
        value={value}
        onDayChange={this.handleDayChange}
        dayPickerProps={{
          locale,
        }}
      />
    );
  }
}
