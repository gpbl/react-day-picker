import {
  addDays,
  addWeeks,
  differenceInCalendarDays,
  endOfMonth,
  getWeek,
  getWeeksInMonth,
  Locale,
  startOfMonth
} from 'date-fns';

import { getOutsideEndDays } from './getOutsideEndDays';
import { getOutsideStartDays } from './getOutsideStartDays';

/**
 * The date-fns week and the dates for that week
 */
export type MonthWeek = { weekNumber: number; dates: Date[] };
/**
 * Return the weeks belonging to the given month.
 */
export function getWeeks(
  month: Date,
  { locale, fixedWeeks }: { locale: Locale; fixedWeeks?: boolean }
): MonthWeek[] {
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);

  const diff = differenceInCalendarDays(monthEnd, monthStart);

  const weeks: MonthWeek[] = [];
  let lastWeek: MonthWeek = { weekNumber: 0, dates: [] };
  for (let i = 0; i <= diff; i++) {
    const date = addDays(monthStart, i);
    const week = getWeek(date, { locale });

    if (lastWeek.weekNumber !== week) {
      // Create a new week by adding outside start days
      const startDays = getOutsideStartDays(date, { locale });
      lastWeek = { weekNumber: week, dates: startDays };
      weeks.push(lastWeek);
    }
    lastWeek.dates.push(date);
  }

  const lastDay = lastWeek.dates[lastWeek.dates.length - 1];
  const endDays = getOutsideEndDays(lastDay, { locale });
  lastWeek.dates = lastWeek.dates.concat(endDays);

  // Add extra weeks to the month, up to 6 weeks
  if (fixedWeeks) {
    const lastWeekDate = lastWeek.dates[lastWeek.dates.length - 1];
    const weeksInMonth = getWeeksInMonth(month, { locale });
    if (weeksInMonth < 6) {
      const diffDays = differenceInCalendarDays(
        addWeeks(lastWeekDate, 6 - weeksInMonth),
        lastWeekDate
      );
      for (let i = 0; i < diffDays; i++) {
        const date = addDays(lastWeekDate, i + 1);
        const week = getWeek(date, { locale });

        if (lastWeek.weekNumber !== week) {
          lastWeek = { weekNumber: week, dates: [] };
          weeks.push(lastWeek);
        }
        lastWeek.dates.push(date);
      }
    }
  }
  return weeks;
}
