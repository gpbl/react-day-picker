import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import isSameDay from 'date-fns/isSameDay';

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
  const isToBeforeFrom = differenceInCalendarDays(to, from) < 0;
  if (to && isToBeforeFrom) {
    [from, to] = [to, from];
  }

  return (
    differenceInCalendarDays(date, from) >= 0 &&
    differenceInCalendarDays(to, date) >= 0
  );
}
