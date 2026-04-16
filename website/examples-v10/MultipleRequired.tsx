// @ts-nocheck
import React from "react";

import { DayPicker } from "react-day-picker-v10";

export function MultipleRequired() {
  return <DayPicker mode="multiple" required selected={[new Date()]} />;
}
