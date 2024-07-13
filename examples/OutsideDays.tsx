import React from "react";

import { DayPicker } from "react-day-picker";

export function OutsideDays() {
  return <DayPicker showOutsideDays today={new Date(2021, 10, 25)} />;
}
