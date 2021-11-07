import React from 'react';
import { DayPicker, WeekNumberClickEventHandler } from 'react-day-picker';

export function Example() {
  const [weekNumber, setWeekNumber] = React.useState<number>();
  const handleWeekNumberClick: WeekNumberClickEventHandler = (n) =>
    setWeekNumber(n);

  const footer = weekNumber
    ? `You clicked the week n. ${weekNumber}.`
    : 'Try clicking a week number.';

  return (
    <>
      <DayPicker
        showWeekNumber
        onWeekNumberClick={handleWeekNumberClick}
        footer={footer}
      />
    </>
  );
}
