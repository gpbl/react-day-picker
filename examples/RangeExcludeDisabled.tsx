import { DayPicker } from "@daypicker/react";
import React from "react";

export function RangeExcludeDisabled() {
  return (
    <DayPicker mode="range" disabled={{ dayOfWeek: [0, 6] }} excludeDisabled />
  );
}
