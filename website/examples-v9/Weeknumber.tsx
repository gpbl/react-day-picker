import { useState } from "react";

import { DayPicker } from "react-day-picker";

export function Weeknumber() {
  const [weekNumber, setWeekNumber] = useState<number>();

  const footer = weekNumber
    ? `You clicked the week n. ${weekNumber}.`
    : "Try clicking a week number.";

  return (
    <DayPicker
      showWeekNumber
      onWeekNumberClick={setWeekNumber}
      footer={footer}
    />
  );
}
