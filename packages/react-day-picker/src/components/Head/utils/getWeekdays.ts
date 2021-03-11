import { addDays, Locale, startOfWeek } from 'date-fns';

/**
 * Generate a series of 7 days, starting from the week, to use for formatting
 * the weekday names (Monday, Tuesday, etc.).
 */
export function getWeekdays(locale?: Locale): Date[] {
  const start = startOfWeek(new Date(), { locale });
  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = addDays(start, i);
    days.push(day);
  }
  return days;
}
