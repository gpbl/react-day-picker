import { toHijriDate } from "../utils/calendar.js";

export function isSameMonth(
  dateLeft: Date,
  dateRight: Date,
  timeZone?: string,
): boolean {
  const left = toHijriDate(dateLeft, timeZone);
  const right = toHijriDate(dateRight, timeZone);
  return left.year === right.year && left.monthIndex === right.monthIndex;
}
