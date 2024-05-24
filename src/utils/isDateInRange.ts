import { differenceInCalendarDays } from "date-fns/differenceInCalendarDays";
import { isSameDay } from "date-fns/isSameDay";

import { DateRange } from "../types/Matchers";

/** Return `true` whether `date` is inside `range`. */
export function isDateInRange(date: Date, range: DateRange): boolean {
  let { from, to } = range;
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
