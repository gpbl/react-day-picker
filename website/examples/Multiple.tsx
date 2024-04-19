import { addDays } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

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
