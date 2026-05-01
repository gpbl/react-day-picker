import { DayPicker } from "@daypicker/react";
import React from "react";

export function ModifiersDisabled() {
  return <DayPicker mode="range" disabled={{ dayOfWeek: [0, 6] }} />;
}
