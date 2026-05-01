import { DayPicker } from "@daypicker/react";
import React, { useState } from "react";

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
