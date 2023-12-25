import { DayPicker } from 'react-day-picker';
import { addDays } from 'date-fns';
import { useState } from 'react';
export function Range() {
  const defaultSelected = {
    from: new Date(),
    to: addDays(new Date(), 4)
  };
  const [range, setRange] = useState(defaultSelected);
  return <DayPicker mode="range" selected={range} onSelect={setRange} />;
}
