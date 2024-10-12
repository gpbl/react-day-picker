import { TZDate } from "@date-fns/tz";

import { DateLib } from "../lib/dateLib.js";

/**
 * Generate a series of 7 days, starting from the week, to use for formatting
 * the weekday names (Monday, Tuesday, etc.).
 */
export function getWeekdays(
  /** The date library. */
  dateLib: DateLib,
  /** Use ISOWeek instead of locale/ */
  ISOWeek?: boolean | undefined,
  timeZone?: string | undefined
): Date[] {
  const date = timeZone
    ? TZDate.tz(timeZone)
    : dateLib.Date
      ? new dateLib.Date()
      : new Date();
  const start = ISOWeek
    ? dateLib.startOfISOWeek(date)
    : dateLib.startOfWeek(date);

  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = dateLib.addDays(start, i);
    days.push(day);
  }
  return days;
}
