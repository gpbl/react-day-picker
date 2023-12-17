import type {
  DateAfter,
  DateBefore,
  DateInterval,
  DateRange,
  DayOfWeek
} from '../types/matchers';

/** Returns true if `matcher` is of type `DateInterval`. */
export function isDateInterval(matcher: unknown): matcher is DateInterval {
  return Boolean(
    matcher &&
      typeof matcher === 'object' &&
      'before' in matcher &&
      'after' in matcher
  );
}

/** Returns true if `value` is a `DateRange` type. */
export function isDateRange(value: unknown): value is DateRange {
  return Boolean(value && typeof value === 'object' && 'from' in value);
}

/** Returns true if `value` is of type `DateAfter`. */
export function isDateAfterType(value: unknown): value is DateAfter {
  return Boolean(value && typeof value === 'object' && 'after' in value);
}

/** Returns true if `value` is of type `DateBefore`. */
export function isDateBeforeType(value: unknown): value is DateBefore {
  return Boolean(value && typeof value === 'object' && 'before' in value);
}

/** Returns true if `value` is a `DayOfWeek` type. */
export function isDayOfWeekType(value: unknown): value is DayOfWeek {
  return Boolean(value && typeof value === 'object' && 'dayOfWeek' in value);
}
