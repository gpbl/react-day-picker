import type { Locale } from "date-fns";
import React from "react";
import {
  DateLib,
  type DateLibOptions,
  DayPicker as DayPickerComponent,
} from "../index.js";
import { arSA } from "../locale/ar-SA.js";
import type { DayPickerProps } from "../types/props.js";
import * as hijriDateLib from "./lib/index.js";

/**
 * Render the Hijri (Umm al-Qura) calendar.
 *
 * Defaults:
 *
 * - `locale`: `ar-SA`
 * - `dir`: `rtl`
 * - `numerals`: `arab`
 */
export function DayPicker(
  props: DayPickerProps & {
    locale?: Locale;
    dir?: DayPickerProps["dir"];
    numerals?: DayPickerProps["numerals"];
    dateLib?: DayPickerProps["dateLib"];
  },
) {
  const { dateLib: dateLibProp, ...dayPickerProps } = props;

  return (
    <DayPickerComponent
      {...dayPickerProps}
      locale={props.locale ?? arSA}
      numerals={props.numerals ?? "arab"}
      dir={props.dir ?? "rtl"}
      dateLib={{ ...hijriDateLib, ...dateLibProp }}
    />
  );
}

/** Returns the date library used in the Hijri calendar. */
export const getDateLib = (options?: DateLibOptions) => {
  return new DateLib(options, hijriDateLib);
};

export { arSA } from "../locale/ar-SA.js";
export { enUS } from "../locale/en-US.js";
