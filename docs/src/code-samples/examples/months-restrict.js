import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function Example() {
  return (
    <DayPicker
      month={new Date(2018, 8)}
      fromMonth={new Date(2018, 8)}
      toMonth={new Date(2018, 11)}
      fixedWeeks
    />
  );
}
