import { DayPicker } from "@daypicker/react";
import { addDays } from "date-fns";
import React from "react";

export function MultipleMinMax() {
  const selected = [new Date(), addDays(new Date(), 1)];
  return <DayPicker selected={selected} mode="multiple" min={2} max={5} />;
}
