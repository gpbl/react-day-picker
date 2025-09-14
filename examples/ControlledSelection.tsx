import React, { useState } from "react";

import { type DateRange, DayPicker } from "react-day-picker";

export function ControlledSelection() {
  const [selected, setSelected] = useState<DateRange | undefined>();

  function handleOnSelect(range: DateRange | undefined, triggerDate: Date) {
    // Change the behavior of the selection when a range is already selected
    if (selected?.from && selected?.to) {
      console.log("reset range");
      setSelected({
        from: triggerDate,
        to: undefined,
      });
    } else {
      setSelected(range);
    }
  }

  return (
    <DayPicker
      mode="range"
      min={1}
      selected={selected}
      onSelect={handleOnSelect}
    />
  );
}
