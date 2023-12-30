import { differenceInCalendarDays } from 'date-fns/differenceInCalendarDays';
import { isAfter } from 'date-fns/isAfter';
import { isDate } from 'date-fns/isDate';
import { isSameDay } from 'date-fns/isSameDay';

import type { Matcher } from '../../../types/matchers';
import { isDateInRange } from '../../../utils/isDateInRange';
import {
  isDateAfterType,
  isDateBeforeType,
  isDateInterval,
  isDateRange,
  isDayOfWeekType
} from '../../../utils/typeguards';

/** Returns true if `value` is a Date type. */
function isDateType(value: unknown): value is Date {
  return isDate(value);
}

/** Returns true if `value` is an array of valid dates. */
function isArrayOfDates(value: unknown): value is Date[] {
  return Array.isArray(value) && value.every(isDate);
}

/**
 * Returns whether a day matches against at least one of the given Matchers.
 *
 * ```
 * const day = new Date(2022, 5, 19);
 * const matcher1: DateRange = {
 *    from: new Date(2021, 12, 21),
 *    to: new Date(2021, 12, 30)
 * }
 * const matcher2: DateRange = {
 *    from: new Date(2022, 5, 1),
 *    to: new Date(2022, 5, 23)
 * }
 *
 * const isMatch(day, [matcher1, matcher2]); // true, since day is in the matcher1 range.
 * ```
 * */
export function dateMatchModifiers(
  date: Date,
  matchers: Matcher | Matcher[]
): boolean {
  const matchersArr = !Array.isArray(matchers) ? [matchers] : matchers;
  return matchersArr.some((matcher: Matcher) => {
    if (typeof matcher === 'boolean') {
      return matcher;
    }
    if (isDateType(matcher)) {
      return isSameDay(date, matcher);
    }
    if (isArrayOfDates(matcher)) {
      return matcher.includes(date);
    }
    if (isDateRange(matcher)) {
      return isDateInRange(date, matcher);
    }
    if (isDayOfWeekType(matcher)) {
      return matcher.dayOfWeek.includes(date.getDay());
    }
    if (isDateInterval(matcher)) {
      const diffBefore = differenceInCalendarDays(matcher.before, date);
      const diffAfter = differenceInCalendarDays(matcher.after, date);
      const isDayBefore = diffBefore > 0;
      const isDayAfter = diffAfter < 0;
      const isClosedInterval = isAfter(matcher.before, matcher.after);
      if (isClosedInterval) {
        return isDayAfter && isDayBefore;
      } else {
        return isDayBefore || isDayAfter;
      }
    }
    if (isDateAfterType(matcher)) {
      return differenceInCalendarDays(date, matcher.after) > 0;
    }
    if (isDateBeforeType(matcher)) {
      return differenceInCalendarDays(matcher.before, date) > 0;
    }
    if (typeof matcher === 'function') {
      return matcher(date);
    }
    return false;
  });
}
