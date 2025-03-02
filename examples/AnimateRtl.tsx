import React, { useState } from "react";

import { DayPicker } from "react-day-picker";
import classNames from "react-day-picker/style.module.css";

export function AnimateRtl() {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      mode="single"
      animate
      dir="rtl"
      selected={selected}
      onSelect={setSelected}
      classNames={classNames}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
}
