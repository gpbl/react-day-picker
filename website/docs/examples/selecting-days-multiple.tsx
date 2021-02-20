import React, { useState } from 'react';
import { DayPicker, SelectMultipleEventHandler } from 'react-day-picker';

export default function App() {
  const defaultSelected = [new Date()];
  const [days, setDays] = useState(defaultSelected);

  const handleSelect: SelectMultipleEventHandler = (days: Date[]) => {
    setDays(days);
  };

  return (
    <>
      <DayPicker mode="multiple" onSelectMultiple={handleSelect} required />
      <p>You picked {days.map((day) => day.toLocaleDateString()).join(', ')}</p>
    </>
  );
}
