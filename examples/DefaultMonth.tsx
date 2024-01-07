'use client';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export function DefaultMonth() {
  return <DayPicker defaultMonth={new Date(1979, 8)} />;
}
