import * as React from 'react';

import { UseInputDayPickerProps } from './UseInputDayPickerProps';
import { UseInputInputProps } from './UseInputInputProps';

export type UseInput = {
  setMonth: React.Dispatch<React.SetStateAction<Date>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  dayPickerProps: UseInputDayPickerProps;
  inputProps: UseInputInputProps;
};
