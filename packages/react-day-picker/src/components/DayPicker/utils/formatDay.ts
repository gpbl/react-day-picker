import * as dateFns from 'date-fns';

/**
 * The default function used to format the day date. Use the [[formatDay]] prop
 * to use another function.
 */
export function formatDay(
  day: Date,
  formatOptions?: { locale?: dateFns.Locale }
): string {
  return dateFns.format(day, 'd', formatOptions);
}
