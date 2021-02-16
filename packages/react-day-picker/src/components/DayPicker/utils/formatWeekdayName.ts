import { format, Locale } from 'date-fns';

export function formatWeekdayName(
  weekday: Date,
  options?: { locale?: Locale }
): string {
  return format(weekday, 'cccccc', options);
}
