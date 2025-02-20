import React, { useState } from "react";

import { DayPicker } from "react-day-picker";

export function AnimateRtl() {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      mode="single"
      animate
      dir="rtl"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
}
