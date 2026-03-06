import React from "react";

import { DayPicker } from "react-day-picker-v9";

export function ModifiersDisabled() {
  return <DayPicker mode="range" disabled={{ dayOfWeek: [0, 6] }} />;
}
