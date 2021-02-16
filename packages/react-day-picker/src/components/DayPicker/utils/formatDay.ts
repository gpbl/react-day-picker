import { format, Locale } from 'date-fns';

export function formatDay(day: Date, options?: { locale?: Locale }): string {
  return format(day, 'd', options);
}
