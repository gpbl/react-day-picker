import React from "react";

import { DayPicker } from "react-day-picker";

export function TestCase2047() {
  return (
    <DayPicker
      defaultMonth={new Date(2024, 5, 10)}
      mode="single"
      selected={new Date(2024, 5, 10)}
      disabled={new Date(2024, 5, 10)}
    />
  );
}
