import { DayOfWeekMatcher } from './DayOfWeekMatcher';

/** Returns true if `matcher` is a [[DayOfWeekMatcher]] matcher. */
export function isDayOfWeekMatcher(value: unknown): value is DayOfWeekMatcher {
  return Boolean(value && typeof value === 'object' && 'dayOfWeek' in value);
}
