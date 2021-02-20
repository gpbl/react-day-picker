import React from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';

export default function App() {
  const handleDayClick: DayClickEventHandler = (day, { today }) => {
    if (today) {
      alert('You clicked the today’s date!');
    } else {
      alert(`You clicked ${day.toLocaleDateString()}.`);
    }
  };
  return <DayPicker onDayClick={handleDayClick} />;
}
