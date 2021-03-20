import * as React from 'react';

import { DayClickEventHandler, DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function Example() {
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
