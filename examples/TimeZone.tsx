import React, { useState } from "react";

import { DayPicker, TZDate } from "react-day-picker";

export function TimeZone() {
  const timeZone = "Pacific/Kiritimati";
  const [selected, setSelected] = useState<Date | undefined>(
    TZDate.tz(timeZone)
  );
  return (
    <DayPicker
      mode="single"
      timeZone={timeZone}
      selected={selected}
      onSelect={setSelected}
      footer={
        selected
          ? selected.toString()
          : `Pick a day to see it is in ${timeZone} time zone.`
      }
    />
  );
}
