import React from "react";

import { DayPicker } from "react-day-picker";

export function FromToYear() {
  return (
    <DayPicker
      defaultMonth={new Date(2024, 0)}
      startMonth={new Date(2024, 0)}
      endMonth={new Date(2026, 11)}
    />
  );
}
