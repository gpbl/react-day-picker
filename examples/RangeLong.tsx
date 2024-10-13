import React, { useState } from "react";

import { type DateRange, DayPicker } from "react-day-picker";

export function RangeLong() {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date("0001-01-01"),
    to: new Date(2024, 9, 10)
  });

  return (
    <DayPicker
      id="test"
      mode="range"
      defaultMonth={new Date(2024, 9)}
      selected={range}
      onSelect={setRange}
      excludeDisabled
      disabled={new Date("2000-01-01")}
    />
  );
}
