import { DayPicker, TZDate } from "@daypicker/react";
import React from "react";

export function AsiaSaigonTimezone() {
  const timeZone = "Asia/Saigon";

  return (
    <DayPicker
      defaultMonth={new TZDate(1900, 11, 1, timeZone)}
      timeZone={timeZone}
      showOutsideDays
      fixedWeeks
      noonSafe
    />
  );
}
