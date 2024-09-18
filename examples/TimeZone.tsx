import React, { useState } from "react";

import { TZDate } from "@date-fns/tz";
import { DayPicker } from "react-day-picker";

export function TimeZone() {
  const [selected, setSelected] = useState<Date | undefined>(
    TZDate.tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
  );
  console.log(
    "selected",
    selected?.toISOString(),
    selected?.toString(),
    selected?.toJSON()
  );
  return (
    <DayPicker
      mode="single"
      required
      timeZone="Europe/Athens"
      selected={selected}
      onSelect={setSelected}
      footer={selected ? `Selected: ${selected}` : "Pick a day."}
    />
  );
}
