import type { Locale } from "date-fns";
import * as locales from "date-fns/locale";
import { arSA as arSALocale } from "date-fns/locale/ar-SA";
import React from "react";

import {
  DateLib,
  type DateLibOptions,
  DayPicker as DayPickerComponent,
} from "../index.js";
import type { DayPickerProps } from "../types/props.js";

import { format } from "./lib/format.js";
import { addMonths } from "./lib/addMonths.js";
import { addYears } from "./lib/addYears.js";
import { differenceInCalendarMonths } from "./lib/differenceInCalendarMonths.js";
import { eachMonthOfInterval } from "./lib/eachMonthOfInterval.js";
import { endOfMonth } from "./lib/endOfMonth.js";
import { endOfYear } from "./lib/endOfYear.js";
import { getMonth } from "./lib/getMonth.js";
import { getYear } from "./lib/getYear.js";
import { isSameMonth } from "./lib/isSameMonth.js";
import { isSameYear } from "./lib/isSameYear.js";
import { newDate } from "./lib/newDate.js";
import { setMonth } from "./lib/setMonth.js";
import { setYear } from "./lib/setYear.js";
import { startOfMonth } from "./lib/startOfMonth.js";
import { startOfYear } from "./lib/startOfYear.js";
import { toHijriDate, toGregorianDate } from "./utils/calendar.js";

const defaultLocale = arSALocale as Locale;

export const ar = locales.ar;
export const arSA = arSALocale as Locale;
export const enUS = locales.enUS;

/**
 * Render the Islamic (Umm al-Qura) calendar.
 *
 * Defaults:
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
  const dateLib = getDateLib({
    locale: props.locale ?? defaultLocale,
    weekStartsOn: props.broadcastCalendar ? 1 : props.weekStartsOn,
    firstWeekContainsDate: props.firstWeekContainsDate,
    useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
    useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens,
    timeZone: props.timeZone,
  });

  return (
    <DayPickerComponent
      {...props}
      locale={props.locale ?? defaultLocale}
      numerals={props.numerals ?? "arab"}
      dir={props.dir ?? "rtl"}
      dateLib={dateLib}
    />
  );
}

/** Returns the date library used in the Hijri calendar. */
export const getDateLib = (options?: DateLibOptions) => {
  const timeZone = options?.timeZone;
  return new DateLib(options, {
    format: (date, formatStr, opts) => format(date, formatStr, opts),
    newDate: (year: number, monthIndex: number, day: number) =>
      newDate(year, monthIndex, day, timeZone),
    addMonths: (date: Date, amount: number) => addMonths(date, amount, timeZone),
    addYears: (date: Date, amount: number) => addYears(date, amount, timeZone),
    differenceInCalendarMonths: (dateLeft: Date, dateRight: Date) =>
      differenceInCalendarMonths(dateLeft, dateRight, timeZone),
    eachMonthOfInterval: (interval) => eachMonthOfInterval(interval, timeZone),
    endOfMonth: (date) => endOfMonth(date, timeZone),
    endOfYear: (date) => endOfYear(date, timeZone),
    getMonth: (date) => getMonth(date, timeZone),
    getYear: (date) => getYear(date, timeZone),
    isSameMonth: (left, right) => isSameMonth(left, right, timeZone),
    isSameYear: (left, right) => isSameYear(left, right, timeZone),
    setMonth: (date, month) => setMonth(date, month, timeZone),
    setYear: (date, year) => setYear(date, year, timeZone),
    startOfMonth: (date) => startOfMonth(date, timeZone),
    startOfYear: (date) => startOfYear(date, timeZone),
  });
};

export { toHijriDate, toGregorianDate };
