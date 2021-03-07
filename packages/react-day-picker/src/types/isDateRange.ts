import { DateRange } from './DateRange';

/** Returns true if `matcher` is a [[DateRange]] matcher. */
export function isDateRange(matcher: unknown): matcher is DateRange {
  // TODO: Check if dates?!
  return Boolean(matcher && typeof matcher === 'object' && 'from' in matcher);
}
