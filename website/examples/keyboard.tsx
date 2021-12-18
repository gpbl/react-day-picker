import React from 'react';
import { DayPicker, DayPickerProps } from 'react-day-picker';

export default function Example({
  dir = 'ltr',
  mode = 'single',
  ...props
}: DayPickerProps) {
  return <DayPicker dir={dir} mode={mode} {...props} />;
}
