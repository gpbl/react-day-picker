import { DayPicker } from 'react-day-picker';
import { useState } from 'react';

export default function App() {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>();

  return (
    <DayPicker mode="single" selected={selectedDay} onSelect={setSelectedDay} />
  );
}
