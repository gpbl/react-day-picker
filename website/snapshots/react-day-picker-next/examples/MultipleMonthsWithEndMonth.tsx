import React from "react";

import { DayPicker } from "react-day-picker-next";

export function MultipleMonthsWithEndMonth() {
  return (
    <DayPicker
      numberOfMonths={3}
      endMonth={new Date()}
      pagedNavigation={false}
    />
  );
}
