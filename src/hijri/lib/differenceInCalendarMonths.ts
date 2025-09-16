import { toHijriDate } from "../utils/calendar.js";

export function differenceInCalendarMonths(
  dateLeft: Date,
  dateRight: Date,
  timeZone?: string,
): number {
  const left = toHijriDate(dateLeft, timeZone);
  const right = toHijriDate(dateRight, timeZone);
  return (
    (left.year - right.year) * 12 +
    (left.monthIndex - right.monthIndex)
  );
}
