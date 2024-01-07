'use client';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

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
