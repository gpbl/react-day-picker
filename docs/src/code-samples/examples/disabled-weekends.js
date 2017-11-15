import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function Example() {
  return (
    <DayPicker
      initialMonth={new Date(2017, 3)}
      disabledDays={[new Date(2017, 3, 12), { daysOfWeek: [0, 6] }]}
    />
  );
}
