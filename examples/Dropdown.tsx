import React from "react";

import { DayPicker } from "react-day-picker";

export function Dropdown() {
  return (
    <DayPicker
      defaultMonth={new Date(2024, 6)}
      captionLayout="dropdown"
      startMonth={new Date(2024, 6)}
      endMonth={new Date(2025, 9)}
    />
  );
}
