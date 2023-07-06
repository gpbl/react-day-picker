import { differenceInCalendarDays, isSameDay } from 'date-fns';

import { DateRange } from 'types/Matchers';

/** Return `true` whether `date` is inside `range`. */
export function isDateInRange(date: Date, range: DateRange): boolean {
  let { from, to } = range;
  if (!from) {
    return false;
  }
  if (!to && isSameDay(from, date)) {
    return true;
  }
  if (!to) {
    return false;
  }
  const isRangeInverted = differenceInCalendarDays(to, from) < 0;
  if (isRangeInverted) {
    [from, to] = [to, from];
  }
  const isInRange =
    differenceInCalendarDays(date, from) >= 0 &&
    differenceInCalendarDays(to, date) >= 0;
  return isInRange;
}
