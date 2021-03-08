import { differenceInCalendarDays, isSameDay } from 'date-fns';
import {
  isArrayOfDates,
  isDateAfterMatcher,
  isDateBeforeMatcher,
  isDateInterval,
  isDateRange,
  isDayOfWeekMatcher,
  isSameDateMatcher,
  Matcher
} from 'types';

import { isDateInRange } from './isDateInRange';

/**
 * Returns true whether the day matches against the given matchers.
 */
export function isMatch(day: Date, matchers: Matcher[]): boolean {
  return matchers.some((matcher: Matcher) => {
    if (typeof matcher === 'boolean') {
      return matcher;
    }
    if (isSameDateMatcher(matcher)) {
      return isSameDay(day, matcher);
    }
    if (isArrayOfDates(matcher)) {
      return matcher.includes(day);
    }
    if (isDateRange(matcher)) {
      return isDateInRange(day, matcher);
    }
    if (isDayOfWeekMatcher(matcher)) {
      return matcher.dayOfWeek.includes(day.getDay());
    }
    if (isDateInterval(matcher)) {
      const isBefore = differenceInCalendarDays(matcher.before, day) > 0;
      const isAfter = differenceInCalendarDays(day, matcher.after) > 0;
      return isBefore && isAfter;
    }
    if (isDateAfterMatcher(matcher)) {
      return differenceInCalendarDays(day, matcher.after) > 0;
    }
    if (isDateBeforeMatcher(matcher)) {
      return differenceInCalendarDays(matcher.before, day) > 0;
    }
    if (typeof matcher === 'function') {
      return matcher(day);
    }
    return false;
  });
}
