import { isDate } from 'date-fns';

/** Returns true if `value` is an array of valid dates. */
export function isArrayOfDates(value: unknown): value is Date[] {
  return Array.isArray(value) && value.every(isDate);
}
