import React, { useState } from 'react';
import { DayPicker, MonthChangeEventHandler } from 'react-day-picker';

import { addMonths, isSameMonth, isToday } from 'date-fns';

export default function App() {
  const nextMonth = addMonths(new Date(), 1);
  const [month, setMonth] = useState<Date>(nextMonth);

  const handleMonthChange: MonthChangeEventHandler = (newMonth) =>
    setMonth(newMonth);

  const handleTodayClick = () => setMonth(new Date());

  const footer = (
    <button
      disabled={isSameMonth(new Date(), month)}
      onClick={handleTodayClick}
    >
      Go to Today
    </button>
  );

  return (
    <DayPicker
      month={month}
      onMonthChange={handleMonthChange}
      footer={footer}
    />
  );
}
