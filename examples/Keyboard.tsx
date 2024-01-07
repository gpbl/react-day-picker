'use client';
import { DayPicker, DayPickerProps } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export function Keyboard(props: DayPickerProps) {
  return <DayPicker {...props} today={new Date(2022, 5, 10)} />;
}
