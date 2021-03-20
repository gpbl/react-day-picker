import * as React from 'react';

import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function App() {
  const defaultSelected: DateRange = {
    from: new Date(),
    to: addDays(new Date(), 4)
  };
  const [range, setRange] = React.useState(defaultSelected);

  let footer = 'Please pick the first day.';
  if (range.from && !range.to) footer = 'Please pick the last day.';
  if (range.from && range.to)
    footer = `${format(range.from, 'PPP')}–${format(range.to, 'PPP')}`;

  return (
    <DayPicker
      mode="range"
      defaultSelected={defaultSelected}
      footer={footer}
      onSelect={setRange}
    />
  );
}
