import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
export function Multiple() {
  const initialDays = [];
  const [days, setDays] = useState(initialDays);
  return (
    <DayPicker
      mode="multi"
      selected={days}
      onSelect={(dates) => setDays(dates || [])}
    />
  );
}
