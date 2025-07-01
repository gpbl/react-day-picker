import React from "react";

import { DayPicker } from "react-day-picker";

export function MultipleWithEndMonth() {
  return (
    <DayPicker
      numberOfMonths={3}
      endMonth={new Date()}
      pagedNavigation={false}
    />
  );
}
