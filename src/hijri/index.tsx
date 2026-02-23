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
import {
  clampGregorianDate,
  GREGORIAN_MAX_DATE,
  GREGORIAN_MIN_DATE,
} from "./utils/range.js";

function clampDateProp(date: Date | undefined) {
  if (!date) {
    return undefined;
  }
  return clampGregorianDate(date);
}

/**
 * Render the Hijri (Umm al-Qura) calendar.
 *
 * Defaults:
 *
 * - `locale`: `ar-SA`
 * - `dir`: `rtl`
 * - `numerals`: `arab`
 * - `startMonth`: `1924-08-01`
 * - `endMonth`: `2077-11-16`
 *
 * Out-of-range date props are clamped to the supported Umm al-Qura conversion
 * range, preventing runtime conversion errors.
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
  const hasStartBound =
    props.startMonth !== undefined ||
    props.fromMonth !== undefined ||
    props.fromYear !== undefined;
  const hasEndBound =
    props.endMonth !== undefined ||
    props.toMonth !== undefined ||
    props.toYear !== undefined;

  const clampedProps: typeof dayPickerProps = {
    ...dayPickerProps,
    month: clampDateProp(props.month),
    defaultMonth: clampDateProp(props.defaultMonth),
    today: clampDateProp(props.today),
    startMonth: hasStartBound
      ? clampDateProp(props.startMonth)
      : new Date(GREGORIAN_MIN_DATE),
    endMonth: hasEndBound
      ? clampDateProp(props.endMonth)
      : new Date(GREGORIAN_MAX_DATE),
    fromMonth: clampDateProp(props.fromMonth),
    toMonth: clampDateProp(props.toMonth),
  };

  return (
    <DayPickerComponent
      {...clampedProps}
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
