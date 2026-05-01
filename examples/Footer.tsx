import { DayPicker } from "@daypicker/react";
import React from "react";

export function Footer() {
  const [selected, setSelected] = React.useState<Date>();
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected
          ? `You picked ${selected.toLocaleDateString()}.`
          : "Please pick a date."
      }
    />
  );
}
