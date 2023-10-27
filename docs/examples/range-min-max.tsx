import { DateRange, DayPicker } from 'react-day-picker';

import { useState } from 'react';

export default function App() {
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <DayPicker
      defaultMonth={new Date(2022, 8)}
      mode="range"
      min={3}
      max={6}
      selected={range}
      onSelect={setRange}
    />
  );
}
