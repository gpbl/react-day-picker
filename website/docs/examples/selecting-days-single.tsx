import React, { useState } from 'react';
import { DayPicker, SelectEventHandler } from 'react-day-picker';

export default function App() {
  const [selectedDay, setSelectedDay] = useState<Date>();
  const handleSelect: SelectEventHandler = (day) => setSelectedDay(day);
  return (
    <>
      <DayPicker onSelect={handleSelect} />
      {selectedDay ? (
        <p>You selected {selectedDay.toLocaleDateString()}.</p>
      ) : (
        <p>Please pick a day.</p>
      )}
    </>
  );
}
