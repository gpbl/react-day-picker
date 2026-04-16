// @ts-nocheck
import React from "react";

import { DayPicker, TZDate } from "react-day-picker-v9";

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
