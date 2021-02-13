import * as dateFns from 'date-fns';

/**
 * The default function used to format the day. Use the [[formatWeekdayName]]
 * prop to use another function.
 */
export function formatWeekdayName(
  weekday: Date,
  formatOptions?: { locale?: dateFns.Locale },
  format = 'cccccc'
): string {
  return dateFns.format(weekday, format, formatOptions);
}
