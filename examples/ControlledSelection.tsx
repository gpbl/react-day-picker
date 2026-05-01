import { type DateRange, DayPicker } from "@daypicker/react";
import React, { useState } from "react";

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
