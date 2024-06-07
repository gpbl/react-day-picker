import React from "react";

import { DayPicker } from "react-day-picker";

export function FromToMonth() {
  const defaultMonth = new Date(2015, 5);
  return (
    <DayPicker
      defaultMonth={defaultMonth}
      fromMonth={defaultMonth}
      toMonth={new Date(2015, 10, 20)}
    />
  );
}
