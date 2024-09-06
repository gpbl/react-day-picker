import React, { useState } from "react";

import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/style.css";

export function TestCase2389() {
  const [selectedPeriod, setSelectedPeriod] = useState<DateRange | undefined>();

  return (
    <DayPicker
      mode="range"
      startMonth={new Date("2024-07-01")}
      endMonth={new Date("2025-07-31")}
      onSelect={setSelectedPeriod}
      selected={selectedPeriod}
    />
  );
}
