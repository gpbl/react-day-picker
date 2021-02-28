import { differenceInCalendarDays, isSameDay } from 'date-fns';

import { Matcher } from '../../../types';

export function matchRange(day: Date, matcher: Matcher): boolean {
  if (typeof matcher === 'boolean') return matcher;
  if (!('from' in matcher)) return false;
  if (!matcher.from) return false;
  let { from, to } = matcher;

  // Matches { from: <Date> }
  if (!to && from && isSameDay(from, day)) return true;
  if (!to) return false;
  // Invert the case where "to" is before "from"
  if (matcher.to && differenceInCalendarDays(matcher.to, matcher.from) < 0) {
    [from, to] = [matcher.to, matcher.from];
  }
  return (
    differenceInCalendarDays(day, from) >= 0 &&
    differenceInCalendarDays(to, day) >= 0
  );
}
