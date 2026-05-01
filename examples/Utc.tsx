import { DayPicker, TZDate } from "@daypicker/react";
import React, { useState } from "react";

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
