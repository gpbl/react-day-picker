import { DayPicker } from "@daypicker/react";
import React from "react";

export function OutsideDays() {
  return <DayPicker showOutsideDays today={new Date(2021, 10, 25)} />;
}
