import addDays from 'date-fns/addDays';
import startOfWeek from 'date-fns/startOfWeek';

import type { Locale } from 'date-fns';

/**
 * Generate a series of 7 days, starting from the week, to use for formatting
 * the weekday names (Monday, Tuesday, etc.).
 */
export function getWeekdays(
  locale?: Locale,
  /** The index of the first day of the week (0 - Sunday) */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
): Date[] {
  const start = startOfWeek(new Date(), { locale, weekStartsOn });
  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = addDays(start, i);
    days.push(day);
  }
  return days;
}
