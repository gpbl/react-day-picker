import React from 'react';
import { DayPicker } from 'react-day-picker';

export function Example() {
  return <DayPicker today={new Date(2022, 2, 18)} />;
}
