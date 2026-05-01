import { DayPicker } from "@daypicker/react";
import React from "react";

export function MultipleMonthsPaged() {
  return <DayPicker numberOfMonths={2} pagedNavigation />;
}
