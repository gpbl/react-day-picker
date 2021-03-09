import { DayOfWeek } from './DayOfWeekMatcher';

/** Returns true if `value` is a [[DayOfWeek]] type. */
export function isDayOfWeekType(value: unknown): value is DayOfWeek {
  return Boolean(value && typeof value === 'object' && 'dayOfWeek' in value);
}
