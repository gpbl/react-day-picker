import React from "react";

import { DayPicker } from "react-day-picker-next";

export function MultipleRequired() {
  return <DayPicker mode="multiple" required selected={[new Date()]} />;
}
