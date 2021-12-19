import React from 'react';
import { DayPicker, DayPickerProps } from 'react-day-picker';

export default function Example(props: DayPickerProps) {
  return <DayPicker mode="single" {...props} />;
}
