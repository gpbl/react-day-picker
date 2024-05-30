import React from "react";

import { DayPicker } from "react-day-picker";

export function FixedWeeks() {
  return (
    <DayPicker
      defaultMonth={new Date(2025, 8)}
      showWeekNumber
      showOutsideDays
      fixedWeeks
    />
  );
}
