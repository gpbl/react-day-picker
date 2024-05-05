import { useState } from "react";

import { addDays } from "date-fns";
import { DayPicker } from "react-day-picker";

export function MultipleMinMax() {
  const initiallySelectedDates = [new Date(), addDays(new Date(), 1)];
  const [selected, setSelected] = useState(initiallySelectedDates);

  return (
    <DayPicker
      mode="multiple"
      min={2}
      max={5}
      selected={selected}
      onSelect={(dates) => setSelected(dates ?? [])}
    />
  );
}
