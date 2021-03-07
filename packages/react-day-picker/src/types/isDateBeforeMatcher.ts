import { DateBefore } from './DateBefore';

/** Returns true if `matcher` is of type [[DateBeforeMatcher]]. */
export function isDateBeforeMatcher(matcher: unknown): matcher is DateBefore {
  return Boolean(matcher && typeof matcher === 'object' && 'before' in matcher);
}
