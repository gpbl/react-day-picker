import { DayPicker } from "@daypicker/react";
import React from "react";

export function DefaultMonth() {
  return <DayPicker defaultMonth={new Date(1979, 8)} />;
}
