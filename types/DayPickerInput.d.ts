// TypeScript Version: 3.1

import * as React from 'react';
import { DayPickerInputProps } from './props';
import DayPicker from './DayPicker';

export class DayPickerInput extends React.Component<DayPickerInputProps, any> {
  showDayPicker(): void;
  hideDayPicker(): void;
  getDayPicker(): DayPicker;
  getInput(): any;
}
