import { addDays, format, startOfMonth } from "date-fns";
import React, { useState } from "react";
import { type DateRange, DayPicker } from "react-day-picker-v9";

export function RangeRequired() {
  const [range, setRange] = useState<DateRange>({
    from: startOfMonth(new Date()),
    to: addDays(startOfMonth(new Date()), 4),
  });

  let footer = `Please pick the first day.`;
  if (range?.from) {
    if (!range.to) {
      footer = `${format(range.from, "PPP")}—`;
    } else if (range.to) {
      footer = `${format(range.from, "PPP")}—${format(range.to, "PPP")}`;
    }
  }

  return (
    <DayPicker
      mode="range"
      required
      selected={range}
      onSelect={setRange}
      footer={footer}
    />
  );
}
