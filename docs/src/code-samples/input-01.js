import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }
  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }
  render() {
    return (
      <div>
        <DayPickerInput
          name="birthday"
          placeholder="DD/MM/YYYY"
          format="DD/MM/YYYY"
          onDayChange={this.handleDayChange}
        />
        Selected:{' '}
        {this.state.selectedDay && (
          <p>{this.state.selectedDay.format('LLL')}</p>
        )}
      </div>
    );
  }
}
