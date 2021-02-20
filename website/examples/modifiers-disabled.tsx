import React from 'react';
import { DayPicker } from 'react-day-picker';

export default function App() {
  const disabledDays = [
    new Date(2022, 4, 12),
    new Date(2022, 5, 10),
    new Date(2022, 5, 20),
    { before: new Date(2022, 1) },
    { from: new Date(2022, 4, 18), to: new Date(2022, 4, 29) }
  ];

  return (
    <DayPicker
      numberOfMonths={2}
      defaultMonth={new Date(2022, 4)}
      disabled={disabledDays}
    />
  );
}
