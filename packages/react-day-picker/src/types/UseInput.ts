import * as React from 'react';
import { DayPickerProps } from 'types';

export type UseInput = {
  setMonth: React.Dispatch<React.SetStateAction<Date>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  dayPickerProps: Pick<
    DayPickerProps,
    'onMonthChange' | 'onDayClick' | 'month' | 'selected'
  >;
  inputProps: Pick<
    JSX.IntrinsicElements['input'],
    'onFocus' | 'onBlur' | 'onChange' | 'value'
  >;
};
