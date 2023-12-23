import { type FormatOptions, format } from 'date-fns';

/** The default formatter for the name of the weekday. */
export function formatWeekdayName(weekday: Date, options?: FormatOptions) {
  return format(weekday, 'cccccc', options);
}
