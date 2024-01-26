import React, { useState } from 'react';

import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';

const defaultMonth = new Date(2022, 8);

export default function App() {
  const [range, setRange] = useState<DateRange | undefined>();

  const disabledDays = [
    addDays(defaultMonth, 6),
    addDays(defaultMonth, 20),
    { dayOfWeek: [0] },
    { from: addDays(defaultMonth, 12), to: addDays(defaultMonth, 13) }
  ];

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
        </p>
      );
    }
  }

  return (
    <DayPicker
      defaultMonth={defaultMonth}
      mode="range"
      min={2}
      disabled={disabledDays}
      excludeDisabledDays
      selected={range}
      onSelect={setRange}
      footer={footer}
    />
  );
}
