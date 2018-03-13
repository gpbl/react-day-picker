import React from 'react';
import { DayPickerInput } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function Example() {
  return (
    <div>
      <p>Please type a day:</p>
      <DayPickerInput onDayChange={day => console.log(day)} />
    </div>
  );
}
