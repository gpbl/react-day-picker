import React from "react";

import * as jalaliDateLib from "date-fns-jalali";
import { faIR } from "date-fns-jalali/locale";

import { DayPicker as DayPickerComponent } from "./index.js";
import type { DayPickerProps } from "./types/props.js";

export function DayPicker(
  props: DayPickerProps & {
    /**
     * The locale to use in the calendar.
     *
     * @default `faIR` from `date-fns-jalali`
     */
    locale?: DayPickerProps["locale"];
    /**
     * The direction of the text in the calendar.
     *
     * @default `rtl`
     */
    dir?: DayPickerProps["dir"];
    /**
     * The date library to use in the calendar.
     *
     * @default `jalaliDateLib` from `date-fns-jalali`
     */
    dateLib?: DayPickerProps["dateLib"];
  }
) {
  return (
    <DayPickerComponent
      {...props}
      locale={props.locale ?? faIR}
      dir={props.dir ?? "rtl"}
      dateLib={props.dateLib ?? jalaliDateLib}
    />
  );
}
