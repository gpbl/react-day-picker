import React from 'react';
import { DateRange, DayPicker } from 'react-day-picker';

import { addDays, format, isSameDay } from 'date-fns';

const pastMonth = new Date(2020, 10, 15);

export default function App() {
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4)
  };
  const [range, setRange] = React.useState<
    DateRange | undefined
  >(defaultSelected);

  let footer = 'Please pick the first day.';
  if (
    range &&
    range.from &&
    (!range.to || isSameDay(range.from, range.to))
  ) {
    footer = format(range.from, 'PPP');
  } else if (range && range.from && range.to) {
    footer = `${format(range.from, 'PPP')}–${format(
      range.to,
      'PPP'
    )}`;
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
