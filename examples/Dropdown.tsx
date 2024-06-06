import React from "react";

import { DayPicker } from "react-day-picker";

export function Dropdown() {
  return (
    <DayPicker
      captionLayout="dropdown"
      fromMonth={new Date(2015, 6)}
      toMonth={new Date(2025, 9)}
    />
  );
}
