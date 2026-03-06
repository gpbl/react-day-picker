import { format } from "date-fns";
import React, { useState } from "react";
import { type DateRange, DayPicker } from "react-day-picker-v9";

export function RangeMinMax() {
  const [range, setRange] = useState<DateRange | undefined>();

  let footer = `Please pick the first day.`;
  if (range?.from) {
    if (!range.to) {
      footer = `${format(range.from, "PPP")}—`;
    } else if (range.to) {
      footer = `${format(range.from, "PPP")}—${format(range.to, "PPP")}`;
    }
  }

  return (
    <div>
      <p>Select up to 6 nights.</p>
      <DayPicker
        mode="range"
        min={1}
        max={6}
        selected={range}
        onSelect={setRange}
        footer={footer}
      />
    </div>
  );
}
