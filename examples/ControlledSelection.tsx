import React from "react";
import { useState } from "react";

import { DateRange, DayPicker } from "react-day-picker";

export function ControlledSelection() {
  const [selected, setSelected] = useState<DateRange | undefined>();

  function handleOnSelect(range: DateRange, triggerDate: Date) {
    if (selected?.from && selected?.to) {
      setSelected({
        from: triggerDate,
        to: undefined
      });
      return;
    }
    setSelected(range);
  }

  return (
    <DayPicker
      mode="range"
      required
      selected={selected}
      onSelect={handleOnSelect}
    />
  );
}
