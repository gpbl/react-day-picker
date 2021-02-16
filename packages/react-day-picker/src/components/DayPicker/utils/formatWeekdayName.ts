import { format, Locale } from 'date-fns';

/**
 * The default function used to format the day. Use the [[formatWeekdayName]]
 * prop to use another function.
 */
export function formatWeekdayName(
  weekday: Date,
  options?: { locale?: Locale }
): string {
  return format(weekday, 'cccccc', options);
}
