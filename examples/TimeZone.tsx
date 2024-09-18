import React, { useState } from "react";

import { DayPicker, TZDate } from "react-day-picker";

export function TimeZone() {
  const [selected, setSelected] = useState<TZDate>();

  return (
    <DayPicker
      mode="single"
      timeZone="Europe/Athens"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
}
