import React from "react";

import { DayPicker } from "react-day-picker";

export function ModifiersDisabled() {
  return (
    <DayPicker
      defaultMonth={new Date(2024, 5, 10)}
      mode="range"
      disabled={{ dayOfWeek: [0, 6] }}
    />
  );
}
