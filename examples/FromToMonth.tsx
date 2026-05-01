import { DayPicker } from "@daypicker/react";
import React from "react";

export function FromToMonth() {
  const defaultMonth = new Date(2015, 5);
  return (
    <DayPicker
      defaultMonth={defaultMonth}
      startMonth={defaultMonth}
      endMonth={new Date(2015, 10, 20)}
    />
  );
}
