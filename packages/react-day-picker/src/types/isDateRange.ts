import { DateRange } from './DateRange';

/** Returns true if `value` is a [[DateRange]] type. */
export function isDateRange(value: unknown): value is DateRange {
  // TODO: Check if dates?!
  return Boolean(value && typeof value === 'object' && 'from' in value);
}
