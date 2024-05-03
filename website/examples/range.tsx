import { useState } from "react";

import { addDays } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";

export function Range() {
  const initialRange: DateRange = {
    from: new Date(),
    to: addDays(new Date(), 4),
  };

  const [range, setRange] = useState<DateRange | undefined>(initialRange);

  return <DayPicker mode="range" selected={range} onSelect={setRange} />;
}
