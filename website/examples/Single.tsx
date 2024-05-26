import { useState } from "react";

import { DayPicker } from "react-day-picker";

export function Single() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  return (
    <DayPicker
      mode="single"
      // selected={selectedDate}
      // onSelect={setSelectedDate}
    />
  );
}
