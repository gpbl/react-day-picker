import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
export function Single() {
  const [selectedDay, setSelectedDay] = useState();
  return (
    <DayPicker mode="single" selected={selectedDay} onSelect={setSelectedDay} />
  );
}
