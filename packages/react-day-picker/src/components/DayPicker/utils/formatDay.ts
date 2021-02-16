import { format, Locale } from 'date-fns';

/**
 * The default function used to format the day date. Use the [[formatDay]] prop
 * to use another function.
 */
export function formatDay(day: Date, options?: { locale?: Locale }): string {
  return format(day, 'd', options);
}
