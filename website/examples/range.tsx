import React, { useState } from 'react';

import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';

const pastMonth = new Date(2020, 10, 15);

export default function App() {
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4)
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  let footer = 'Please pick the first day.';
  if (range?.from) {
    if (!range.to) {
      footer = format(range.from, 'PPP');
    } else if (range.to) {
      footer = `${format(range.from, 'PPP')}–${format(range.to, 'PPP')}`;
    }
  }

  return (
    <DayPicker
      mode="range"
      defaultMonth={pastMonth}
      selected={range}
      footer={footer}
      onSelect={setRange}
    />
  );
}
