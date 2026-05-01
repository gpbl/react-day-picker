import { DayPicker } from "@daypicker/react";
import { addMonths } from "date-fns";
import React from "react";

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
