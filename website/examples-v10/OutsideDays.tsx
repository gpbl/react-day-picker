// @ts-nocheck
import React from "react";

import { DayPicker } from "react-day-picker-v10";

export function OutsideDays() {
  return <DayPicker showOutsideDays today={new Date(2021, 10, 25)} />;
}
