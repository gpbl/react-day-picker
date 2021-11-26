import React from "react";
import { DayPicker } from "react-day-picker";

export default function Example() {
  const [selected, setSelected] = React.useState<Date>();

  let footer = "Please pick a day.";
  if (selected) {
    footer = `You picked ${selected.toLocaleDateString()}.`;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}
