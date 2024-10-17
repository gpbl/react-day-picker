import { TZDate } from "@date-fns/tz";

import type { Locale, DateLib } from "../lib/dateLib.js";
import { dateLib as defaultDateLib } from "../lib/index.js";

/**
 * Generate a series of 7 days, starting from the week, to use for formatting
 * the weekday names (Monday, Tuesday, etc.).
 */
export function getWeekdays(
  locale?: Locale | undefined,
  /** The index of the first day of the week (0 - Sunday). */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined,
  /** Use ISOWeek instead of locale/ */
  ISOWeek?: boolean | undefined,
  timeZone?: string | undefined,
  /** @ignore */
  dateLib: DateLib = defaultDateLib
): Date[] {
  const date = timeZone
    ? TZDate.tz(timeZone)
    : dateLib.Date
      ? new dateLib.Date()
      : new Date();
  const start = ISOWeek
    ? dateLib.startOfISOWeek(date)
    : dateLib.startOfWeek(date, { locale, weekStartsOn });

  const days: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const day = dateLib.addDays(start, i);
    days.push(day);
  }
  return days;
}
