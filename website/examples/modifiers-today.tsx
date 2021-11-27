import React from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';

export default function App() {
  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    if (modifiers.today) {
      alert('You clicked the today’s date!');
    } else {
      alert(`You clicked ${day.toLocaleDateString()}.`);
    }
  };
  return (
    <DayPicker
      onDayClick={handleDayClick}
      footer="Try clicking the today’s date."
    />
  );
}
