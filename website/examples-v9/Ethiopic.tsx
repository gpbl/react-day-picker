import React from "react";
import { DayPicker } from "react-day-picker-v9/ethiopic";

export function Ethiopic(props: React.ComponentProps<typeof DayPicker>) {
  return <DayPicker {...props} />;
}
