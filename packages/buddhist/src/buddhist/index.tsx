import type { Locale } from "date-fns";
import React from "react";
import {
  DateLib,
  type DateLibOptions,
  DayPicker as DayPickerComponent,
} from "react-day-picker";
import { enUS as enUSLocale } from "../locale/en-US.js";
import { th as thLocale } from "../locale/th.js";
import type { DayPickerProps } from "../types/props.js";

import { format as originalBuddhistFormat } from "./lib/format.js";

// Adapter to match DateLib's format signature without using `any`.
const buddhistFormat: typeof DateLib.prototype.format = (
  date,
  formatStr,
  options,
) => {
  return originalBuddhistFormat(date, formatStr, options as DateLibOptions);
};

export const th: typeof thLocale = thLocale;
export const enUS: typeof enUSLocale = enUSLocale;

/**
 * Render the Buddhist (Thai) calendar.
 *
 * Months/weeks are Gregorian; displayed year is Buddhist Era (BE = CE + 543).
 * Thai digits are used by default.
 *
 * Defaults:
 *
 * - `locale`: `th`
 * - `dir`: `ltr`
 * - `numerals`: `thai`
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
  const locale = props.locale ?? th;
  const dateLib = getDateLib({
    locale,
    weekStartsOn: props.broadcastCalendar ? 1 : props.weekStartsOn,
    firstWeekContainsDate: props.firstWeekContainsDate,
    useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
    useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens,
    timeZone: props.timeZone,
    overrides: dateLibProp,
  });
  return (
    <DayPickerComponent
      {...dayPickerProps}
      locale={locale}
      numerals={props.numerals ?? "thai"}
      dir={props.dir ?? "ltr"}
      dateLib={dateLib}
    />
  );
}

/** Returns the date library used in the Buddhist calendar. */
export const getDateLib = (
  options?: DateLibOptions & {
    overrides?: DayPickerProps["dateLib"];
  },
) => {
  const { overrides, ...dateLibOptions } = options ?? {};
  return new DateLib(dateLibOptions, {
    format: buddhistFormat,
    ...(overrides ?? {}),
  });
};
