import React from "react";
import { DateRange, DayPicker } from "react-day-picker";

import { format, isSameDay } from "date-fns";

export function Example() {
  const [range, setRange] = React.useState<DateRange | undefined>();

  let footer = "Please pick the first day.";
  if (
    range &&
    range.from &&
    (!range.to || isSameDay(range.from, range.to))
  ) {
    footer = format(range.from, "PPP");
  } else if (range && range.from && range.to) {
    footer = `${format(range.from, "PPP")}–${format(
      range.to,
      "PPP"
    )}`;
  }

  return (
    <DayPicker
      mode="range"
      min={1}
      max={5}
      selected={range}
      onSelect={setRange}
      footer={footer}
    />
  );
}
