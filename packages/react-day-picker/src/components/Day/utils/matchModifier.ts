import { differenceInDays, isSameDay } from 'date-fns';
import { Matcher } from 'types';

function isDayAfter(day1: Date, day2: Date, inclusive = false): boolean {
  if (inclusive) {
    return differenceInDays(day1, day2) >= 0;
  }
  return differenceInDays(day1, day2) > 0;
}

function isDayBefore(day1: Date, day2: Date, inclusive = false): boolean {
  if (inclusive) {
    return differenceInDays(day1, day2) <= 0;
  }
  return differenceInDays(day1, day2) < 0;
}

function matchDate(day: Date, matcher: Matcher): boolean {
  if (!(matcher instanceof Date)) return false;
  return isSameDay(day, matcher);
}

function matchDayBefore(day: Date, matcher: Matcher): boolean {
  if (!('before' in matcher)) return false;
  const matchDay = { before: matcher.before };
  return isDayBefore(day, matchDay.before);
}

function matchDayAfter(day: Date, matcher: Matcher): boolean {
  if (!('after' in matcher)) return false;
  const matchDay = { after: matcher.after };
  return isDayAfter(day, matchDay.after);
}

function matchDayBetween(day: Date, matcher: Matcher): boolean {
  if (!('from' in matcher)) return false;

  let { from, to } = matcher;

  // Matches { from: <Date> }
  if (!to && isSameDay(from, day)) return true;

  // Invert the case where "to" is before "from"
  if (differenceInDays(to, from) < 0) {
    from = matcher.to;
    to = matcher.from;
  }

  return isDayAfter(day, from, true) && isDayBefore(day, to, true);
}

function matchDayOfWeek(day: Date, matcher: Matcher): boolean {
  if (!('daysOfWeek' in matcher)) return false;
  return matcher.daysOfWeek.includes(day.getDay());
}

function matchFunction(day: Date, matcher: Matcher): boolean {
  if (!(matcher instanceof Function)) return false;
  return matcher(day);
}

export function matchDay(day: Date, matcher: Matcher): boolean {
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
      matchDayBefore(day, dayMatcher) ||
      matchDayAfter(day, dayMatcher) ||
      matchDayBetween(day, dayMatcher) ||
      matchDayOfWeek(day, dayMatcher) ||
      matchFunction(day, dayMatcher)
    );
  });
}
