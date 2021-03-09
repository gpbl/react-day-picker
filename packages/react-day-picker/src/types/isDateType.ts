import { isDate } from 'date-fns';

/** Returns true if `value` is a Date type. */
export function isDateType(value: unknown): value is Date {
  return isDate(value);
}
