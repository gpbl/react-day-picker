import { type DateRange, DayPicker } from "@daypicker/react";
import React, { useState } from "react";

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
