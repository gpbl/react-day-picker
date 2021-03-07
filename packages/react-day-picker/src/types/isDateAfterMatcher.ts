import { DateAfter } from './DateAfter';

/** Returns true if `matcher` is of type [[DateAfterMatcher]]. */
export function isDateAfterMatcher(matcher: unknown): matcher is DateAfter {
  return Boolean(matcher && typeof matcher === 'object' && 'after' in matcher);
}
