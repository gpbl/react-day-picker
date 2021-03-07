import { differenceInCalendarDays, isSameDay } from 'date-fns';
import { DateRange } from 'types';

export function isDateInRange(day: Date, range: DateRange): boolean {
  let { from, to } = range;
  if (!from) {
    return false;
  }
  if (!to && isSameDay(from, day)) {
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
    differenceInCalendarDays(day, from) >= 0 &&
    differenceInCalendarDays(to, day) >= 0
  );
}
