import { endOfMonth, startOfMonth } from "date-fns";
import React, { useState } from "react";

import { type DateRange, DayPicker } from "react-day-picker-v9";

/** Toggle selection of an entire month. */
export function CustomMonthSelection() {
  const [monthRange, setMonthRange] = useState<DateRange | undefined>();

  const toMonthRange = (day: Date): DateRange => ({
    from: startOfMonth(day),
    to: endOfMonth(day),
  });

  const isInRange = (day: Date) =>
    monthRange?.from && monthRange?.to
      ? day >= monthRange.from && day <= monthRange.to
      : false;

  return (
    <DayPicker
      showOutsideDays
      modifiers={{
        selected: monthRange,
        range_start: monthRange?.from,
        range_end: monthRange?.to,
        range_middle: monthRange,
      }}
      onDayClick={(day, modifiers) => {
        if (modifiers.disabled || modifiers.hidden) return;
        setMonthRange(isInRange(day) ? undefined : toMonthRange(day));
      }}
    />
  );
}
