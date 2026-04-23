import { useState } from "react";

import { addDays } from "date-fns";

import { DayPicker } from "./react-day-picker-v8";

export function Multiple() {
  const initiallySelectedDates = [new Date(), addDays(new Date(), 1)];
  const [selectedDates, setSelectedDates] = useState(initiallySelectedDates);
  return (
    <DayPicker
      mode="multiple"
      selected={selectedDates}
      onSelect={(dates) => setSelectedDates(dates || [])}
    />
  );
}
