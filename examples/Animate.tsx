import React, { useState } from "react";

import { DayPicker } from "react-day-picker";

export function Animate() {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      mode="single"
      animate
      selected={selected}
      onSelect={setSelected}
      fixedWeeks
    />
  );
}
