import * as React from 'react';
import { DayPickerInputProps } from './Props';
import DayPicker from './DayPicker';

export default class DayPickerInput extends React.Component<
  DayPickerInputProps,
  any
> {
  showDayPicker: () => void;
  hideDayPicker: () => void;
  getDayPicker: () => DayPicker;
  getInput: () => any;
}
