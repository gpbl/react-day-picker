import { DayPickerContextValue, Matcher } from '../../../types';
import { matchAfter } from './matchAfter';
import { matchBefore } from './matchBefore';
import { matchBeforeAndAfter } from './matchBeforeAndAfter';
import { matchDate } from './matchDate';
import { matchDaysOfWeek } from './matchDaysOfWeek';
import { matchFunction } from './matchFunction';
import { matchRange } from './matchRange';

/**
 * Returns true when the day matches against the given matcher. Supports few
 * basic matchers.
 */
export function isMatch(
  day: Date,
  matcher: Matcher,
  displayMonth: Date,
  props: DayPickerContextValue
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
      matchFunction(day, dayMatcher, displayMonth, props)
    );
  });
}
