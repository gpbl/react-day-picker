import { DateAfter } from './DateAfter';

/** Returns true if `value` is of type [[DateAfter]]. */
export function isDateAfterType(value: unknown): value is DateAfter {
  return Boolean(value && typeof value === 'object' && 'after' in value);
}
