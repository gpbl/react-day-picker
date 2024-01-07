'use client';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export function MultipleMonthsId() {
  return <DayPicker numberOfMonths={2} id="calendar_example" />;
}
