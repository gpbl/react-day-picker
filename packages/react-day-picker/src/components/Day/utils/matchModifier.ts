import { differenceInDays, isSameDay } from 'date-fns';

import { PropsValues } from '../../../components';
import { Matcher } from '../../../types';

function matchDate(day: Date, matcher: Matcher): boolean {
  if (!(matcher instanceof Date)) return false;
  return isSameDay(day, matcher);
}

function matchBeforeAndAfter(day: Date, matcher: Matcher): boolean {
  if (!('before' in matcher) || !('after' in matcher)) return false;
  return (
    differenceInDays(day, matcher.before) < 0 &&
    differenceInDays(day, matcher.after) > 0
  );
}

function matchBefore(day: Date, matcher: Matcher): boolean {
  if (!('before' in matcher) || 'after' in matcher) return false;
  return differenceInDays(day, matcher.before) < 0;
}

function matchAfter(day: Date, matcher: Matcher): boolean {
  if (!('after' in matcher) || 'before' in matcher) return false;
  return differenceInDays(day, matcher.after) > 0;
}

function matchRange(day: Date, matcher: Matcher): boolean {
  if (!('from' in matcher)) return false;
  if (!matcher.from) return false;
  let { from, to } = matcher;

  // Matches { from: <Date> }
  if (!to && from && isSameDay(from, day)) return true;
  if (!to) return false;
  // Invert the case where "to" is before "from"
  if (matcher.to && differenceInDays(from, matcher.to) < 0) {
    from = matcher.to;
    to = matcher.from;
  }
  return differenceInDays(from, day) >= 0 && differenceInDays(to, day) <= 0;
}

function matchDaysOfWeek(day: Date, matcher: Matcher): boolean {
  if (!('daysOfWeek' in matcher)) return false;
  return matcher.daysOfWeek.includes(day.getDay());
}

function matchFunction(
  day: Date,
  matcher: Matcher,
  currentMonth: Date,
  props: PropsValues
): boolean {
  if (!(matcher instanceof Function)) return false;
  return matcher(day, currentMonth, props);
}

export function matchDay(
  day: Date,
  matcher: Matcher,
  currentMonth: Date,
  props: PropsValues
): boolean {
  if (!matcher) return false;
  let matchers: Matcher[];

  if (Array.isArray(matcher)) {
    matchers = matcher;
  } else {
    matchers = [matcher];
  }

  return matchers.some((dayMatcher: Matcher) => {
    if (!dayMatcher) return false;
    return (
      // Precedence shouldn't be important here
      matchDate(day, dayMatcher) ||
      matchBeforeAndAfter(day, dayMatcher) ||
      matchBefore(day, dayMatcher) ||
      matchAfter(day, dayMatcher) ||
      matchRange(day, dayMatcher) ||
      matchDaysOfWeek(day, dayMatcher) ||
      matchFunction(day, dayMatcher, currentMonth, props)
    );
  });
}
