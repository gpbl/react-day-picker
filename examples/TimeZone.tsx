import React, { useState } from "react";

import { DayPicker, TZDate } from "react-day-picker";

export function TimeZone() {
  const [selected, setSelected] = useState<TZDate>();

  return (
    <DayPicker
      mode="single"
      timeZone="Europe/Athens"
      selected={selected}
      // @ts-expect-error Testing tzdate
      onSelect={setSelected}
      footer={selected ? `Selected: ${selected.withTimeZone()}` : "Pick a day."}
    />
  );
}
