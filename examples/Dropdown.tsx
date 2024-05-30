import React from "react";

import { DayPicker } from "react-day-picker";

export function Dropdown() {
  return <DayPicker dropdownNavigation fromYear={2015} toYear={2025} />;
}
