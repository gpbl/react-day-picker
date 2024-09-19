import React from "react";

import {
  DayPicker as DayPickerComponent,
  type DayPickerProps
} from "./index.js";

export function DayPicker(props: DayPickerProps) {
  return <DayPickerComponent timeZone="utc" {...props} />;
}
