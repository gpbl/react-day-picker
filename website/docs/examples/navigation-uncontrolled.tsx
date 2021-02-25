import React, { useState } from 'react';
import { DayPicker, MonthChangeEventHandler } from 'react-day-picker';

import { addMonths } from 'date-fns';

export default function App() {
  const nextMonth = addMonths(new Date(), 1);
  const [month, setMonth] = useState<Date>(nextMonth);

  const handleMonthChange: MonthChangeEventHandler = (newMonth) =>
    setMonth(newMonth);
  const handleTodayClick = () => setMonth(new Date());

  return (
    <>
      <DayPicker month={month} onMonthChange={handleMonthChange} />
      <p>
        <button onClick={handleTodayClick}>Go to Today</button>
      </p>
    </>
  );
}
