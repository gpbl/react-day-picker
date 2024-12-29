import React from "react";

import { DayPicker } from "react-day-picker";

export function DropdownMonths() {
  const decemberDate = new Date();
  decemberDate.setMonth(11);

  return (
    <DayPicker defaultMonth={decemberDate} captionLayout="dropdown-months" />
  );
}
