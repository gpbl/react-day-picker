import { type FormatOptions, format } from 'date-fns';

/** The default formatter for the day grid cell element. */
export function formatDay(date: Date, options?: FormatOptions) {
  return format(date, 'd', options);
}
