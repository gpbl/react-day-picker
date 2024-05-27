import { useState } from "react";

import { DayPicker } from "./DayPicker";

export function Single() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(today);
  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
    />
  );
}
