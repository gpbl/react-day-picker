import React from 'react';
import { DateRange, DayPicker } from 'react-day-picker';

import { addDays, format, isSameDay } from 'date-fns';


export function Example() {
  const [range, setRange] = React.useState<DateRange | null>({
    from: new Date(),
    to: addDays(new Date(), 4)
  });

  let footer = 'Please pick the first day.';
  if (range && range.from && (!range.to || isSameDay(range.from, range.to))) {
    footer = format(range.from, 'PPP');
  } else if (range && range.from && range.to) {
    footer = `${format(range.from, 'PPP')}–${format(range.to, 'PPP')}`;
  }

  const clearSelection = () => {
    setRange(null)
  }

  return (
    <div>
      <DayPicker
        mode="range"
        selected={range}
        footer={footer}
        onSelect={setRange}
      />
      <button disabled={range === null} onClick={clearSelection}>Clear selection</button>
    </div>
  );
}
