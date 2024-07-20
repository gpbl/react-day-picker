import { dateLib as defaultDateLib } from "../lib/index.js";
import type { DateRange, DateLib } from "../types/index.js";

/**
 * Determines whether a given date is inside a specified date range.
 *
 * @since 9.0.0
 * @group Utilities
 */
export function rangeIncludesDate(
  range: DateRange,
  date: Date,
  /** If `true`, the ends of the range are excluded. */
  excludeEnds = false,
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
      differenceInCalendarDays(date, from) >= (excludeEnds ? 1 : 0) &&
      differenceInCalendarDays(to, date) >= (excludeEnds ? 1 : 0);
    return isInRange;
  }
  if (!excludeEnds && to) {
    return isSameDay(to, date);
  }
  if (!excludeEnds && from) {
    return isSameDay(from, date);
  }
  return false;
}
