import {
  addDays,
  addWeeks,
  differenceInCalendarDays,
  endOfMonth,
  getWeeksInMonth,
  Locale,
  startOfMonth
} from 'date-fns';

import { daysToMonthWeeks } from './daysToMonthWeeks';

/** Represents a week in the month.*/
export type MonthWeek = {
  /** The week number from the start of the year. */
  weekNumber: number;
  /** The dates in the week. */
  dates: Date[];
};

/**
 * Return the weeks belonging to the given month, adding the "outside days" to
 * the first and last week.
 */
export function getMonthWeeks(
  /** The month to get the weeks from */
  month: Date,
  /** Whether add extra weeks up to 6 weeks */
  fixedWeeks: boolean,
  locale: Locale
): MonthWeek[] {
  const monthStart = startOfMonth(month);
  const nrOfDaysInMonth = differenceInCalendarDays(
    endOfMonth(month),
    monthStart
  );
  const daysInMonth: Date[] = [];
  for (let i = 0; i <= nrOfDaysInMonth; i++) {
    daysInMonth.push(addDays(monthStart, i));
  }

  const weeksInMonth: MonthWeek[] = daysToMonthWeeks(daysInMonth, locale);

  // Add extra weeks to the month, up to 6 weeks
  if (fixedWeeks) {
    const nrOfMonthWeeks = getWeeksInMonth(month, { locale });
    if (nrOfMonthWeeks < 6) {
      const lastWeek = weeksInMonth[weeksInMonth.length - 1];
      const lastDay = lastWeek.dates[lastWeek.dates.length - 1];
      const nrOfExtraDays = differenceInCalendarDays(
        addWeeks(lastDay, 6 - nrOfMonthWeeks),
        lastDay
      );
      const extraDays: Date[] = [];
      for (let i = 0; i <= nrOfExtraDays; i++) {
        extraDays.push(addDays(lastDay, i));
      }
      const extraWeeks = daysToMonthWeeks(extraDays, locale);
      weeksInMonth.concat(extraWeeks);
    }
  }
  return weeksInMonth;
}
