import { differenceInCalendarDays } from 'date-fns';

import { Matcher } from '../../../types';

export function matchBeforeAndAfter(day: Date, matcher: Matcher): boolean {
  if (!('before' in matcher) || !('after' in matcher)) return false;
  return (
    differenceInCalendarDays(day, matcher.before) < 0 &&
    differenceInCalendarDays(day, matcher.after) > 0
  );
}
