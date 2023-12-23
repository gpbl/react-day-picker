import { type FormatOptions, format } from 'date-fns';

/** Return he default ARIA label for the Weekday element. */
export function labelWeekday(date: Date, options?: FormatOptions): string {
  return format(date, 'cccc', options);
}
