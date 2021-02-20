import React from 'react';
import { DayPicker } from 'react-day-picker';

export default function App() {
  return <DayPicker defaultMonth={new Date(2022, 8)} />;
}
