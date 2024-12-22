import React from "react";

import * as jalaliDateLib from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";

import { DayPicker as DayPickerComponent } from "./index.js";
import type { DayPickerProps } from "./types/props.js";

export function DayPicker(
  props: Omit<DayPickerProps, "dateLib"> & {
    /**
     * The locale to use in the calendar.
     *
     * @default `faIR`
     */
    locale?: DayPickerProps["locale"];
    /**
     * The direction of the text in the calendar.
     *
     * @default `rtl`
     */
    dir?: DayPickerProps["dir"];
  }
) {
  return (
    <DayPickerComponent
      locale={faIR}
      dir="rtl"
      {...props}
      // @ts-expect-error The type definitions for the date-fns-jalali library
      //     are not compatible with the date-fns 4.0 types. The `addDays`
      //     function's return type is causing a type mismatch. (This casting should
      //     be not needed when date-fns-jalali upgrades to date-fns@4)
      dateLib={jalaliDateLib}
    />
  );
}
