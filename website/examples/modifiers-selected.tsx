import React, { useState } from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';

export default function App() {
  const [selectedDay, setSelectedDay] = useState<Date>();
  const handleDayClick: DayClickEventHandler = (day) => setSelectedDay(day);
  return (
    <>
      <DayPicker onDayClick={handleDayClick} selected={selectedDay} />
      <p>
        Please pick a day.
        {selectedDay && <> You selected {selectedDay?.toLocaleDateString()}.</>}
      </p>
    </>
  );
}
