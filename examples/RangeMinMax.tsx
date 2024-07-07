import React, { useState } from "react";

import { format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";

export function RangeMinMax() {
  const [range, setRange] = useState<DateRange | undefined>();

  let footer = `Please pick the first day.`;
  if (range?.from) {
    if (!range.to) {
      footer = format(range.from, "PPP");
    } else if (range.to) {
      footer = `${format(range.from, "PPP")}–${format(range.to, "PPP")}`;
    }
  }

  return (
    <div>
      <p>Select a range between 3 and 9 days.</p>
      <DayPicker
        defaultMonth={new Date(2022, 8)}
        mode="range"
        min={3}
        max={9}
        selected={range}
        onSelect={setRange}
        footer={footer}
      />
    </div>
  );
}
