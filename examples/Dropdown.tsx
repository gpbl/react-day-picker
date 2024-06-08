import React from "react";

import { DayPicker } from "react-day-picker";

export function Dropdown() {
  return (
    <DayPicker
      captionLayout="dropdown"
      startMonth={new Date(2015, 6)}
      endMonth={new Date(2025, 9)}
    />
  );
}
