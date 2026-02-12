import React from "react";

import { DayPicker } from "react-day-picker-v9";

export function MultipleMonthsPaged() {
  return <DayPicker numberOfMonths={2} pagedNavigation />;
}
