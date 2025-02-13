import React from "react";

import { DayPicker } from "react-day-picker";

export function DropdownMultipleMonths() {
  return (
    <DayPicker
      numberOfMonths={5}
      defaultMonth={new Date(2024, 6)}
      captionLayout="dropdown"
      startMonth={new Date(2023, 6)}
      endMonth={new Date(2025, 9)}
    />
  );
}
