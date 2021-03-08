import { DateInterval } from './DateInterval';

/** Returns true if `matcher` is of type [[DateInterval]]. */
export function isDateInterval(matcher: unknown): matcher is DateInterval {
  return Boolean(
    matcher &&
      typeof matcher === 'object' &&
      'before' in matcher &&
      'after' in matcher
  );
}
