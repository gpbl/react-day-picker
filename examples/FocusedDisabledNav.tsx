import React from "react";

import { addMonths } from "date-fns";
import { DayPicker } from "react-day-picker";

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
