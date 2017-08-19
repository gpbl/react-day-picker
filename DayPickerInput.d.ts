// TypeScript Version: 2.2
import * as React from 'react';

import { DayPickerProps, ClassNames } from './index';

export class DayPickerInput extends React.Component<DayPickerInputProps> {
  showDayPicker(): void;

  hideDayPicker(): void;
}

export interface DayPickerInputProps {
  value?: string,
  format: string | string[];

  dayPickerProps?: DayPickerProps;
  hideOnDayClick?: boolean;
  clickUnselectsDay?: boolean;
  // Not sure React.ComponentClass<any> is the right type for _propTypes2.default.any 
  component?: any;

  classNames?: ClassNames;

  onDayChange?(e: React.FocusEvent<HTMLDivElement>): void;
  onChange?(e: React.FocusEvent<HTMLDivElement>): void;
  onClick?(e: React.FocusEvent<HTMLDivElement>): void;
  onFocus?(e: React.FocusEvent<HTMLDivElement>): void;
  onBlur?(e: React.FocusEvent<HTMLDivElement>): void;
  onKeyUp?(e: React.FocusEvent<HTMLDivElement>): void;
}
