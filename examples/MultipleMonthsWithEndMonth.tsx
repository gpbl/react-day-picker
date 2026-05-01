import { DayPicker } from "@daypicker/react";
import React from "react";

export function MultipleMonthsWithEndMonth() {
  return (
    <DayPicker
      numberOfMonths={3}
      endMonth={new Date()}
      pagedNavigation={false}
    />
  );
}
