import { isDate } from 'date-fns';

/** Returns true if `matcher` is the same date. */
export function isSameDateMatcher(matcher: unknown): matcher is Date {
  return isDate(matcher);
}
