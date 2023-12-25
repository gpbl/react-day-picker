import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
export function SingleRequired() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  return (
    <DayPicker
      mode="single"
      required
      selected={selectedDay}
      onSelect={(date) => date && setSelectedDay(date)}
    />
  );
}
