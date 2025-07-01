import React, { useState } from "react";

import { DateRange, DayPicker } from "react-day-picker";

export function Start() {
  const [dates, setDates] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date()
  });
  const [monthFocused, setMonthFocused] = useState(dates?.from);

  return (
    <DayPicker
      endMonth={new Date()}
      disabled={{ after: new Date() }}
      min={2}
      numberOfMonths={2}
      pagedNavigation={false}
      mode="range"
      selected={dates}
      onSelect={setDates}
      month={monthFocused}
      onMonthChange={(start) => setMonthFocused(start)}
    />
  );
}
