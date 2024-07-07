import React from "react";

import { DayPicker } from "react-day-picker";

export function Footer() {
  const [selected, setSelected] = React.useState<Date>();
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected
          ? "You picked {selected.toLocaleDateString()}."
          : "Please pick a date."
      }
    />
  );
}
