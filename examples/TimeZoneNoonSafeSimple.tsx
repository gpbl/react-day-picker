import React, { useState } from "react";

import { DayPicker, TZDate } from "react-day-picker";

export function TimeZoneNoonSafeSimple() {
  const timeZone = "Asia/Dubai";
  const [selected, setSelected] = useState<Date | undefined>(
    new TZDate(1900, 11, 1, timeZone),
  );

  return (
    <DayPicker
      mode="single"
      timeZone={timeZone}
      weekStartsOn={1}
      noonSafe
      fixedWeeks
      showOutsideDays
      selected={selected}
      onSelect={setSelected}
      footer={
        selected
          ? `Selected: ${selected.toString()}`
          : "Pick a day to see the time zone-aware date"
      }
    />
  );
}
