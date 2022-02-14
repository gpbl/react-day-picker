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
  const weeksInMonth: MonthWeek[] = daysToMonthWeeks(
    startOfMonth(month),
    endOfMonth(month),
    locale
  );

  // Add extra weeks to the month, up to 6 weeks
  if (fixedWeeks) {
    const nrOfMonthWeeks = getWeeksInMonth(month, { locale });
    if (nrOfMonthWeeks < 6) {
      const lastWeek = weeksInMonth[weeksInMonth.length - 1];
      const lastDate = lastWeek.dates[lastWeek.dates.length - 1];
      const toDate = addWeeks(lastDate, 6 - nrOfMonthWeeks);
      const extraWeeks = daysToMonthWeeks(
        addWeeks(lastDate, 1),
        toDate,
        locale
      );
      weeksInMonth.push(...extraWeeks);
    }
  }
  return weeksInMonth;
}
