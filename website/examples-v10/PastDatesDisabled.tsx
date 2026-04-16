// @ts-nocheck
import React from "react";

import { DayPicker } from "react-day-picker-v10";

export function PastDatesDisabled() {
  return <DayPicker mode="single" disabled={{ before: new Date() }} />;
}
