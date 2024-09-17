import React from "react";
import { useState } from "react";

import { DateRange, DayPicker } from "react-day-picker";

export function ControlledSelection() {
  const [selected, setSelected] = useState<DateRange | undefined>();

  function handleOnSelect(range: DateRange | undefined, triggerDate: Date) {
    // Change the behavior of the selection when a range is already selected
    if (selected?.from && selected?.to) {
      // eslint-disable-next-line no-console
      console.log("reset range");
      setSelected({
        from: triggerDate,
        to: undefined
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
