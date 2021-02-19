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
      <p>
        Please pick a day.
        {selectedDay && <>You selected {selectedDay.toLocaleDateString()}.</>}
      </p>
    </>
  );
}
