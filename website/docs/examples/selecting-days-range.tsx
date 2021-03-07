import React, { useState } from 'react';
import {
  DateRange,
  DayPicker,
  SelectRangeEventHandler
} from 'react-day-picker';

import { addDays, format } from 'date-fns';

export default function App() {
  const defaultSelected: DateRange = {
    from: new Date(),
    to: addDays(new Date(), 4)
  };
  const [range, setRange] = useState(defaultSelected);

  let footer = 'Please pick the first day.';
  if (range.from && !range.to) footer = 'Please pick the last day.';
  if (range.from && range.to)
    footer = `${format(range.from, 'PPP')}–${format(range.to, 'PPP')}`;

  return (
    <DayPicker
      mode="range"
      defaultSelected={defaultSelected}
      footer={footer}
      onSelectRange={setRange}
    />
  );
}
