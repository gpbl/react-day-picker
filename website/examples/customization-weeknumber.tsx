import React from "react";
import { DayPicker } from "react-day-picker";

export function Example() {
  const [weekNumber, setWeekNumber] = React.useState<number>();

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
