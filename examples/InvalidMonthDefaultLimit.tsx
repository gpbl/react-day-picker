import React, { useState } from "react";

import { DayPicker } from "react-day-picker";

export function InvalidMonthDefaultLimit() {
  const [month, setMonth] = useState(() => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    return date;
  });

  return (
    <DayPicker
      month={month}
      onMonthChange={setMonth}
      captionLayout="dropdown"
    />
  );
}
