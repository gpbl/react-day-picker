import { isSameDay, differenceInDays } from 'date-fns';
import {
  DayMatcher,
  MatchDayBetween,
  MatchDayBefore,
  MatchDayInRange,
  MatchDayAfter
} from '../../components/DayPicker/types';

/**
 * Return true if `day1` is after `day2`.
 */
function isDayAfter(day1: Date, day2: Date): boolean {
  return differenceInDays(day1, day2) > 0;
}

/**
 * Return true if `day1` is before `day2`.
 */
function isDayBefore(day1: Date, day2: Date): boolean {
  return differenceInDays(day1, day2) < 0;
}

/**
 * Return true if `day` matches the given [[DayMatcher]].
 */
function matchDate(day: Date, matcher: DayMatcher): boolean {
  if (!(matcher instanceof Date)) return false;
  return isSameDay(day, matcher);
}

/**
 * Returns true if the day is in the range specified by the [[DayMatcher]].
 */
function matchDayInRange(day: Date, matcher: DayMatcher): boolean {
  if (!('from' in matcher) || !('to' in matcher)) return false;
  const matchDayT: MatchDayInRange = {
    from: matcher.from,
    to: matcher.to
  };
  if (differenceInDays(matchDayT.from, matchDayT.to) <= 0) return false;
  return isDayBefore(day, matcher.to) && isDayAfter(day, matcher.from);
}

/**
 * TODO: write docs
 */
function matchDayBefore(day: Date, matcher: DayMatcher): boolean {
  if ('after' in matcher || !('before' in matcher)) return false;
  const matchDayT: MatchDayBefore = { before: matcher.before };
  return isDayBefore(day, matchDayT.before);
}

/**
 * TODO: write docs
 */
function matchDayAfter(day: Date, matcher: DayMatcher): boolean {
  if ('before' in matcher || !('after' in matcher)) return false;
  const matchDayT: MatchDayAfter = { after: matcher.after };
  return isDayAfter(day, matchDayT.after);
}

/**
 * TODO: write docs
 */
function matchDayBetween(day: Date, matcher: DayMatcher): boolean {
  if (!('after' in matcher) || !('before' in matcher)) return false;
  const matchDayT: MatchDayBetween = {
    before: matcher.before,
    after: matcher.after
  };
  if (differenceInDays(matchDayT.before, matchDayT.after) <= 0) return false;
  return isDayAfter(day, matcher.after) && isDayBefore(day, matcher.before);
}

/**
 * TODO: write docs
 */
function matchDayOfWeek(day: Date, matcher: DayMatcher): boolean {
  if (!('daysOfWeek' in matcher)) return false;
  return matcher.daysOfWeek.includes(day.getDay());
}

/**
 * TODO: write docs
 */
function matchFunction(day: Date, matcher: DayMatcher): boolean {
  if (!(matcher instanceof Function)) return false;
  return matcher(day);
}

/**
 * Return `true` if a day matches a day matcher.
 */
export function matchDay(day: Date, matcher: DayMatcher): boolean {
  if (!matcher) return false;
  let matchers: DayMatcher[];

  if (Array.isArray(matcher)) {
    matchers = matcher;
  } else {
    matchers = [matcher];
  }

  return matchers.some((dayMatcher: DayMatcher) => {
    if (!dayMatcher) return false;
    return (
      matchDate(day, dayMatcher) ||
      matchDayInRange(day, dayMatcher) ||
      matchDayBefore(day, dayMatcher) ||
      matchDayAfter(day, dayMatcher) ||
      matchDayBetween(day, dayMatcher) ||
      matchDayOfWeek(day, dayMatcher) ||
      matchFunction(day, dayMatcher)
    );
  });
}
