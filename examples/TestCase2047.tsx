import React from "react";

import { DayPicker } from "react-day-picker";

const defaultMonth = new Date(2024, 5);
const defaultSelected = new Date(2024, 5, 10);
const disabledDate = new Date(2024, 5, 10);

export function TestCase2047() {
  const [selected, setSelected] = React.useState<Date>(defaultSelected);
  return (
    <DayPicker
      defaultMonth={new Date(2024, 5, 10)}
      mode="single"
      required
      selected={selected}
      onSelect={setSelected}
      disabled={disabledDate}
    />
  );
}
