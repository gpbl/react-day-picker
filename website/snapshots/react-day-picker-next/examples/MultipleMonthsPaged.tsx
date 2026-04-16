import React from "react";

import { DayPicker } from "react-day-picker-next";

export function MultipleMonthsPaged() {
  return <DayPicker numberOfMonths={2} pagedNavigation />;
}
