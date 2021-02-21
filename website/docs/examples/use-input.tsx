import * as React from 'react';
import { DayPicker, useInput } from 'react-day-picker';

export default function App() {
  const { dayPickerProps, inputProps } = useInput(new Date(), 'yyyy-MM-dd');
  return (
    <>
      <p>Type a day or pick one from the calendar.</p>
      <form>
        <label>
          <input {...inputProps} placeholder="YYYY-MM-DD" />
        </label>
      </form>
      <DayPicker {...dayPickerProps} />
    </>
  );
}
