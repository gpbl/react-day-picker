import { isDate } from 'date-fns';

/** Returns true if `matcher` is an array of valid dates. */
export function isArrayOfDates(matcher: unknown): matcher is Date[] {
  return Array.isArray(matcher) && matcher.every(isDate);
}
