import { toHijriDate } from "../utils/calendar.js";

export function isSameYear(
  dateLeft: Date,
  dateRight: Date,
  timeZone?: string,
): boolean {
  return toHijriDate(dateLeft, timeZone).year === toHijriDate(dateRight, timeZone).year;
}
