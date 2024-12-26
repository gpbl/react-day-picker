import React from "react";

import { DayPicker } from "react-day-picker";

const decemberDate = new Date();

decemberDate.setMonth(11);

export function DropdownMonths() {
  return (
    <DayPicker defaultMonth={decemberDate} captionLayout="dropdown-months" />
  );
}
