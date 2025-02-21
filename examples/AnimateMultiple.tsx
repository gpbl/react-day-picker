import React, { useState } from "react";

import { DateRange, DayPicker } from "react-day-picker";
import classNames from "react-day-picker/style.module.css";

export function AnimateMultiple() {
  const [selected, setSelected] = useState<DateRange>();

  return (
    <DayPicker
      mode="range"
      animate
      selected={selected}
      onSelect={setSelected}
      numberOfMonths={6}
      classNames={classNames}
    />
  );
}
