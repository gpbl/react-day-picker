import { useState } from "react";

import { format } from "date-fns";

import { DateRange, DayPicker } from "./react-day-picker-v8";

export function Range() {
  const [range, setRange] = useState<DateRange | undefined>();

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
      defaultMonth={new Date(2022, 8)}
      mode="range"
      selected={range}
      onSelect={setRange}
      footer={footer}
    />
  );
}
