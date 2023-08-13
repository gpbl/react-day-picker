import React, { useState } from 'react';

import { DayPicker, DateRange } from 'react-day-picker';
import { addDays } from 'date-fns';

export default function App() {
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  const today = new Date();

  const disabledDays = [
    { from: addDays(today, -5), to: addDays(today, -3) },
    { from: addDays(today, 3), to: addDays(today, 5) },
    { from: addDays(today, 9), to: addDays(today, 12) }
  ];

  return (
    <DayPicker
      mode="range"
      disabled={disabledDays}
      selected={range}
      disableNonConsecutiveDates={true}
      onSelect={setRange}
    />
  );
}
