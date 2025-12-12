import React from "react";

import { DayPicker, TZDate } from "react-day-picker";
import { createNoonDateLibOverrides } from "react-day-picker/noon-date-lib";

export function AsiaSaigonTimezone() {
  const timeZone = "Asia/Saigon";
  const dateLib = createNoonDateLibOverrides({ timeZone });

  return (
    <DayPicker
      defaultMonth={new TZDate(1900, 11, 1, timeZone)}
      timeZone={timeZone}
      showOutsideDays
      fixedWeeks
      dateLib={dateLib}
    />
  );
}
