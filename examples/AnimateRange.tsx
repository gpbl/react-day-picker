import React, { useState } from "react";

import { DateRange, DayPicker } from "react-day-picker";

export function AnimateRange() {
  const [selected, setSelected] = useState<DateRange>();

  return (
    <DayPicker
      mode="range"
      animate
      selected={selected}
      onSelect={setSelected}
      numberOfMonths={6}
    />
  );
}
