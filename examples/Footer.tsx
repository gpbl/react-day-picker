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
        selected ? (
          <p>You picked {selected.toLocaleDateString()}.</p>
        ) : (
          <p>Please pick a date.</p>
        )
      }
    />
  );
}
