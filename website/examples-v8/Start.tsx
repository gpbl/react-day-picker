import { useState } from "react";

import { DayPicker } from "./react-day-picker-v8";

export function Start() {
  const [selected, setSelected] = useState<Date>();

  return (
    <div role="application" aria-label="Date Picker">
      <DayPicker mode="single" selected={selected} onSelect={setSelected} />
    </div>
  );
}
