import React, { useState } from "react";

import { DayPicker, TZDate } from "react-day-picker";

export function TimeZone() {
  const timezone = "Pacific/Kiritimati";
  const [selected, setSelected] = useState<Date | undefined>(
    TZDate.tz(timezone)
  );
  return (
    <DayPicker
      mode="single"
      timeZone={timezone}
      selected={selected}
      onSelect={setSelected}
      footer={selected ? `Selected: ${selected}` : "Pick a day."}
    />
  );
}
