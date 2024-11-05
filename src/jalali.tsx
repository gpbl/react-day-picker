import React from "react";

import { DateLibHijri } from "./classes/DateLibHijri.js";
import {
  DayPicker as DayPickerComponent,
  type DayPickerProps
} from "./index.js";

export function DayPicker(props: DayPickerProps) {
  return (
    <DayPickerComponent
      // @ts-expect-error The type definitions for the date-fns-jalali library
      //     are not compatible with the date-fns 4.0 types. The `addDays`
      //     function's return type is causing a type mismatch. (This casting should
      //     be not needed when date-fns-jalali upgrades to date-fns@4)
      dateLib={DateLibHijri}
      {...props}
    />
  );
}
