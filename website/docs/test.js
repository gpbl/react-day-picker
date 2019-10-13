import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format, parse } from 'date-fns';

function App() {
  const [selected, setSelected] = useState();
  const [value, setValue] = useState();

  const handleChange = e => {
    setValue(e.target.value);

    // Set the selected day, if the typed value is a valid date.
    const day = parse(e.target.value, 'YYYY-MM-DD');
    if (isNaN(day.getTime())) {
      // Not a valid date
      return;
    }
    setSelected(day);
  };

  const handleDayClick = day => {
    setSelected(day);
    setValue(format(day, 'YYYY-MM-DD'));
  };

  return (
    <form>
      <label>
        <input value={value} onChange={handleChange} />
      </label>
      <DayPicker selected={selected} onDayClick={handleDayClick} />
    </form>
  );
}
