import { DayPicker } from "@daypicker/ethiopic";
import React from "react";

export function Ethiopic(props: React.ComponentProps<typeof DayPicker>) {
  return <DayPicker {...props} />;
}
