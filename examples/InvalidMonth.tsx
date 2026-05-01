import { DayPicker } from "@daypicker/react";
import React, { useState } from "react";

export function InvalidMonth() {
  const [month, setMonth] = useState(new Date(2024, 5));
  return (
    <DayPicker
      month={month}
      onMonthChange={setMonth}
      captionLayout="dropdown"
      startMonth={new Date(2024, 6)}
      endMonth={new Date(2024, 9)}
    />
  );
}
