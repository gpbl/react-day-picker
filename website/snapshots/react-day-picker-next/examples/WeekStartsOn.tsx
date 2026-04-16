import React from "react";

import { DayPicker } from "react-day-picker-next";

export function WeekStartsOn() {
  return <DayPicker weekStartsOn={0} />;
}
