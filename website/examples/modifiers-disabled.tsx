import * as React from 'react';

import { DayPicker } from 'react-day-picker';

export default function App() {
  const disabledDays = [
    new Date(2022, 5, 10),
    new Date(2022, 5, 12),
    new Date(2022, 5, 20),
    { from: new Date(2022, 4, 18), to: new Date(2022, 4, 29) }
  ];

  return (
    <DayPicker
      defaultMonth={new Date(2022, 5, 10)}
      mode="single"
      disabled={disabledDays}
    />
  );
}
