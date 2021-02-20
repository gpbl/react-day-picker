import React, { useState } from 'react';
import { DayPicker, MonthChangeEventHandler } from 'react-day-picker';

export default function App() {
  const [month, setMonth] = useState<Date>();
  const handleMonthChange: MonthChangeEventHandler = (newMonth) =>
    setMonth(newMonth);
  return (
    <>
      <DayPicker month={month} onMonthChange={handleMonthChange} />
      <p>
        <button onClick={() => setMonth(new Date())}>Go to Today</button>
      </p>
    </>
  );
}
