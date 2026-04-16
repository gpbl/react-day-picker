// @ts-nocheck
import { addMonths } from "date-fns";
import React from "react";
import { DayPicker } from "../dist/esm/index.js";

/** Example for bug #2630. */
export function FocusedDisabledNav() {
  return (
    <DayPicker
      mode="single"
      startMonth={addMonths(new Date(), -2)}
      endMonth={new Date()}
    />
  );
}
