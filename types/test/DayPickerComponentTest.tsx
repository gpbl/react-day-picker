import * as React from 'react';
import Picker from '../index';
import { DayPicker } from '../index';
import 'react-day-picker/lib/style.css';

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
