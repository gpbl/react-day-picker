import { DayPicker } from 'react-day-picker';

import { useState } from 'react';

export default function App() {
  const initialDays: Date[] = [];
  const [days, setDays] = useState<Date[]>(initialDays);

  return (
    <DayPicker
      mode="multi"
      selected={days}
      onSelect={(dates) => setDays(dates || [])}
    />
  );
}
