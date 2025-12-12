import React from "react";

import { DayPicker } from "react-day-picker";

export function TimeZoneNoonSafeSimple() {
  const timeZone = "Asia/Dubai";

  return (
    <DayPicker
      timeZone={timeZone}
      weekStartsOn={1}
      noonSafe
      fixedWeeks
      showOutsideDays
    />
  );
}
