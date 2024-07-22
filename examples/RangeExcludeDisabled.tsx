import React from "react";

import { DayPicker } from "react-day-picker";

export function RangeExcludeDisabled() {
  return (
    <DayPicker mode="range" disabled={{ dayOfWeek: [0, 6] }} excludeDisabled />
  );
}
