import { addDays } from "date-fns";
import React, { useState } from "react";

import { type DateRange, DayPicker } from "react-day-picker";

/** Select a fixed-length range starting from the clicked day. */
export function CustomRollingWindow() {
  const [range, setRange] = useState<DateRange | undefined>();
  const windowLength = 7;

  const applyRange = (start: Date): DateRange => ({
    from: start,
    to: addDays(start, windowLength - 1),
  });

  return (
    <DayPicker
      modifiers={{
        selected: range,
        range_start: range?.from,
        range_end: range?.to,
        range_middle: range,
      }}
      onDayClick={(day, modifiers) => {
        if (modifiers.disabled || modifiers.hidden) return;
        setRange(modifiers.selected ? undefined : applyRange(day));
      }}
      onDayKeyDown={(day, modifiers, e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          if (modifiers.disabled || modifiers.hidden) return;
          setRange(modifiers.selected ? undefined : applyRange(day));
        }
      }}
    />
  );
}
