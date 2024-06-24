import React from "react";

import { addDays } from "date-fns";
import { DayPicker } from "react-day-picker";

export function MultipleMinMax() {
  const selected = [new Date(), addDays(new Date(), 1)];
  return <DayPicker selected={selected} mode="multiple" min={2} max={5} />;
}
