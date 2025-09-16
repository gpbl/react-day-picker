import type { Locale } from "date-fns";
import * as locales from "date-fns/locale";
import React from "react";

import {
  DateLib,
  type DateLibOptions,
  DayPicker as DayPickerComponent,
} from "../index.js";
import type { DayPickerProps } from "../types/props.js";

import * as hebrewDateLib from "./lib/index.js";

export const he = locales.he;
export const enUS = locales.enUS;

/**
 * Render the Hebrew (lunisolar) calendar.
 *
 * Months follow the Hebrew lunisolar cycle with leap years containing Adar I
 * and Adar II. Weeks remain Sunday–Saturday.
 *
 * Defaults:
 *
 * - `locale`: `he`
 * - `dir`: `rtl`
 * - `numerals`: `latn`
 */
export function DayPicker(
  props: DayPickerProps & {
    locale?: Locale;
    dir?: DayPickerProps["dir"];
    numerals?: DayPickerProps["numerals"];
    dateLib?: DayPickerProps["dateLib"];
  },
) {
  const dateLib = getDateLib({
    locale: props.locale,
    weekStartsOn: props.broadcastCalendar ? 1 : props.weekStartsOn,
    firstWeekContainsDate: props.firstWeekContainsDate,
    useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
    useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens,
    timeZone: props.timeZone,
  });
  return (
    <DayPickerComponent
      {...props}
      locale={props.locale ?? he}
      numerals={props.numerals ?? "latn"}
      dir={props.dir ?? "rtl"}
      dateLib={dateLib}
    />
  );
}

/** Returns the date library used in the Hebrew calendar. */
export const getDateLib = (options?: DateLibOptions) => {
  return new DateLib(options, hebrewDateLib);
};
