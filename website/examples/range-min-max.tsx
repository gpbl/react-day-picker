import React, { useState } from 'react';

import { format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';

export default function App() {
  const [range, setRange] = useState<DateRange | undefined>();

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
      min={1}
      max={5}
      selected={range}
      onSelect={setRange}
      footer={footer}
    />
  );
}
