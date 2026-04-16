// @ts-nocheck
import React, { useState } from "react";

import { DayPicker } from "react-day-picker-v10";

export function SingleRequired() {
  const [selectedDay, setSelectedDay] = useState<Date>();

  return (
    <DayPicker
      mode="single"
      required
      selected={selectedDay}
      onSelect={(date) => date && setSelectedDay(date)}
    />
  );
}
