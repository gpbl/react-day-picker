import React, { useState } from "react";

import { addDays, format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";

export function Range() {
  const defaultMonth = new Date(2020, 5, 15);

  const defaultSelected: DateRange = {
    from: defaultMonth,
    to: addDays(defaultMonth, 4)
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      );
    }
  }

  return (
    <DayPicker
      id="test"
      mode="range"
      defaultMonth={defaultMonth}
      selected={range}
      footer={footer}
      onSelect={setRange}
    />
  );
}
