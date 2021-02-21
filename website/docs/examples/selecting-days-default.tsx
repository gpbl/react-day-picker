import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

export default function App() {
  const defaultSelected = new Date();
  const [selectedDay, setSelectedDay] = useState(defaultSelected);
  return (
    <>
      <DayPicker
        required
        defaultSelected={defaultSelected}
        onSelect={setSelectedDay}
      />
      {selectedDay ? (
        <p>You selected {selectedDay.toLocaleDateString()}.</p>
      ) : (
        <p>Please pick a day.</p>
      )}
    </>
  );
}
