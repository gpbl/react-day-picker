import React, { useState } from "react";

import { DayPicker } from "react-day-picker-v9";

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
