import React from "react";

import { DayPicker } from "react-day-picker-v9";

export function OutsideDays() {
  return <DayPicker showOutsideDays today={new Date(2021, 10, 25)} />;
}
