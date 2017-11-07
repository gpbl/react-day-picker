import * as React from 'react';
import { default as Picker , DayPicker } from '../';

interface Props {
  selected: Date;
  onCalendarSelect: (date: Date) => void;
}

export default class DayPickerComponentTest extends React.Component<Props, any> {
  render() {
    return (
      <DayPicker selectedDays={this.props.selected} onDayClick={this.props.onCalendarSelect} />
    );
  }
}
