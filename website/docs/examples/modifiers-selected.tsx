import React, { useState } from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';

export default function App() {
  const [selectedDay, setSelectedDay] = useState<Date>();
  const handleDayClick: DayClickEventHandler = (day) => setSelectedDay(day);
  return (
    <>
      <DayPicker onDayClick={handleDayClick} selected={selectedDay} />
      {selectedDay ? (
        <p>You selected {selectedDay.toLocaleDateString()}.</p>
      ) : (
        <p>Please pick a day.</p>
      )}
    </>
  );
}
