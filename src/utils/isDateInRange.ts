import { dateLib as defaultDateLib } from "../lib/index.js";
import type { DateRange, DateLib } from "../types/index.js";

/**
 * Determines whether a given date is inside a specified date range.
 *
 * @group Utilities
 */
export function isDateInRange(
  date: Date,
  range: DateRange,
  /** @ignore */
  dateLib: DateLib = defaultDateLib
): boolean {
  let { from, to } = range;
  const { differenceInCalendarDays, isSameDay } = dateLib;
  if (from && to) {
    const isRangeInverted = differenceInCalendarDays(to, from) < 0;
    if (isRangeInverted) {
      [from, to] = [to, from];
    }
    const isInRange =
      differenceInCalendarDays(date, from) >= 0 &&
      differenceInCalendarDays(to, date) >= 0;
    return isInRange;
  }
  if (to) {
    return isSameDay(to, date);
  }
  if (from) {
    return isSameDay(from, date);
  }
  return false;
}
