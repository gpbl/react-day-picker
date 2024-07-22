import React from "react";

import { DayPicker } from "react-day-picker";

export function ModifiersDisabled() {
  return <DayPicker mode="range" disabled={{ dayOfWeek: [0, 6] }} />;
}
