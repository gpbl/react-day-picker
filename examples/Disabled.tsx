'use client';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export function Disabled() {
  return <DayPicker disableNavigation hideNavigation />;
}
