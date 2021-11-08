import React from 'react';
import { DayClickEventHandler, DayPicker } from 'react-day-picker';

export function Example() {
  const handleDayClick: DayClickEventHandler = (day, { today }) => {
    if (today) {
      alert('You clicked the today’s date!');
    } else {
      alert(`You clicked ${day.toLocaleDateString()}.`);
    }
  };
  return (
    <DayPicker
      mode="single"
      onDayClick={handleDayClick}
      footer="Try clicking the today’s date."
    />
  );
}
