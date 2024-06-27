import React from "react"

import { UTCDate } from "@date-fns/utc"

import { DayPicker as DayPickerComponent, type DayPickerProps } from "./index.js"

export function DayPicker(props: DayPickerProps) {
  return <DayPickerComponent dateLib={{ Date: UTCDate }} {...props} />;
}
