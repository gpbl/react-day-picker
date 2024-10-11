import React, { useState } from "react";

import { DayPicker, TZDate } from "react-day-picker";

export function Utc() {
  const [selected, setSelected] = useState<Date>(TZDate.tz("UTC"));
  return (
    <DayPicker
      mode="single"
      required
      selected={selected}
      onSelect={(date: Date) => {
        setSelected(date);
      }}
      footer={selected ? `${selected.toUTCString()}` : null}
    />
  );
}
