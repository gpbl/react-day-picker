import React from "react";

import { DayPicker } from "react-day-picker";

export function MultipleMonthsWithDropdown() {
  return <DayPicker numberOfMonths={4} captionLayout="dropdown" />;
}
