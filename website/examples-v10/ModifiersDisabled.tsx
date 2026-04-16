// @ts-nocheck
import React from "react";

import { DayPicker } from "react-day-picker-v10";

export function ModifiersDisabled() {
  return <DayPicker mode="range" disabled={{ dayOfWeek: [0, 6] }} />;
}
