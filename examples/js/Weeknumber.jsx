import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
export function Weeknumber() {
  const [weekNumber, setWeekNumber] = useState();
  const footer = weekNumber
    ? `You clicked the week n. ${weekNumber}.`
    : 'Try clicking a week number.';
  return (
    <DayPicker
      showWeekNumber
      onWeekNumberClick={setWeekNumber}
      footer={footer}
    />
  );
}
