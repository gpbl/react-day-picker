import { useState } from "react";

import { DayPicker } from "./react-day-picker-v8";

export function SingleRequired() {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());

  return (
    <DayPicker
      mode="single"
      required
      selected={selectedDay}
      onSelect={(date) => date && setSelectedDay(date)}
    />
  );
}
