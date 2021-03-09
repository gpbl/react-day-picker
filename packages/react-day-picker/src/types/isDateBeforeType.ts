import { DateBefore } from './DateBefore';

/** Returns true if `value` is of type [[DateBefore]]. */
export function isDateBeforeType(value: unknown): value is DateBefore {
  return Boolean(value && typeof value === 'object' && 'before' in value);
}
