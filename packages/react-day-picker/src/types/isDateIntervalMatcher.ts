import { DateInterval } from './DateInterval';

/** Returns true if `matcher` is of type [[DateIntervalMatcher]]. */
export function isDateIntervalMatcher(
  matcher: unknown
): matcher is DateInterval {
  return Boolean(
    matcher &&
      typeof matcher === 'object' &&
      'before' in matcher &&
      'after' in matcher
  );
}
