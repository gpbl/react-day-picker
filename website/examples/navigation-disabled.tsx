import React from 'react';
import { DayPicker } from 'react-day-picker';

export function Example() {
  return (
    <DayPicker fromYear={2015} toYear={2025} disableNavigation mode="single" />
  );
}
