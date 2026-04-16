// @ts-nocheck
import React, { useState } from "react";

import { DayPicker } from "react-day-picker-v9";

export function StartEndMonthsShowOutsideDays() {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      showOutsideDays={true}
      defaultMonth={new Date(2024, 2)}
      startMonth={new Date(2024, 2, 30)}
      endMonth={new Date(2024, 2, 1)}
      disabled={new Date(2024, 2, 10)}
    />
  );
}
