import { DayPicker } from "@daypicker/react";
import React, { useState } from "react";

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
