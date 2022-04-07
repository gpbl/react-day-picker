import React, { useState } from 'react';

import { DayPicker } from 'react-day-picker';

export default function App() {
  const [selectedDay, setSelectedDay] = useState<Date>();
  const handleDayClick = (day: Date) => setSelectedDay(day);

  const footer = selectedDay ? (
    <p>You selected {selectedDay.toDateString()}</p>
  ) : (
    <p>Please pick a day.</p>
  );

  return (
    <DayPicker
      selected={selectedDay}
      onDayClick={handleDayClick}
      footer={footer}
    />
  );
}
