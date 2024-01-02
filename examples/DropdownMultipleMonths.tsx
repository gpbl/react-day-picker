'use client';
import { DayPicker } from 'react-day-picker';

export function DropdownMultipleMonths() {
  return (
    <DayPicker
      numberOfMonths={5}
      captionLayout="dropdown-buttons"
      fromYear={2015}
      toYear={2025}
    />
  );
}
