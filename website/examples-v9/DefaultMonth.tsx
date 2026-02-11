import React from "react";

import { DayPicker } from "react-day-picker-v9";

export function DefaultMonth() {
  return <DayPicker defaultMonth={new Date(1979, 8)} />;
}
