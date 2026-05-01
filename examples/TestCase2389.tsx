import { type DateRange, DayPicker } from "@daypicker/react";
import React, { useState } from "react";

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
