import React from "react";
import { DayPicker } from "react-day-picker/ethiopic";

export function Ethiopic(props: React.ComponentProps<typeof DayPicker>) {
  return <DayPicker {...props} />;
}
