import React, { useState } from "react";

import { UTCDate } from "@date-fns/utc";
import { DayPicker } from "react-day-picker/utc";

export function Utc() {
  const [selected, setSelected] = useState<Date>(new UTCDate());
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
