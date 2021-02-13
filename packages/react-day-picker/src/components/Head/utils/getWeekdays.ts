import * as DateFns from 'date-fns';

/**
 * Generate a series of 7 days, starting from the week, to use for getting the
 * week day names.
 */
export function getWeekdays(locale: DateFns.Locale): Date[] {
  const start = DateFns.startOfWeek(new Date(), { locale });
  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = DateFns.addDays(start, i);
    days.push(day);
  }
  return days;
}
