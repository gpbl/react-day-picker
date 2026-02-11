import React from "react";

import { DayPicker } from "react-day-picker-v9";

export function RangeExcludeDisabled() {
  return (
    <DayPicker mode="range" disabled={{ dayOfWeek: [0, 6] }} excludeDisabled />
  );
}
