import type { Locale } from 'date-fns';
import format from 'date-fns/format';

/**
 * The default formatter for the Day button.
 */
export function formatDay(day: Date, options?: { locale?: Locale }): string {
  return format(day, 'd', options);
}
