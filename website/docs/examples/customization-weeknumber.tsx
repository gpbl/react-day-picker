import React, { useState } from 'react';
import { DayPicker, WeekNumberClickEventHandler } from 'react-day-picker';

export default function App() {
  const [weekNumber, setWeekNumber] = useState<number>();
  const handleWeekNumberClick: WeekNumberClickEventHandler = (n) =>
    setWeekNumber(n);
  return (
    <>
      <DayPicker showWeekNumber onWeekNumberClick={handleWeekNumberClick} />
      <p>You clicked the week n. {weekNumber}</p>
    </>
  );
}
