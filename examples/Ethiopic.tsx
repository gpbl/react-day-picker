import React from "react";
import { DayPicker } from "@daypicker/ethiopic";

export function Ethiopic(props: React.ComponentProps<typeof DayPicker>) {
  return <DayPicker {...props} />;
}
