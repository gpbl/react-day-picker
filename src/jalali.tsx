import React from "react";

import * as jalaliDateLib from "date-fns-jalali";

import { DayPicker as DayPickerComponent, type DayPickerProps } from "./";

export function DayPicker(props: DayPickerProps) {
  return <DayPickerComponent dateLib={jalaliDateLib} {...props} />;
}
