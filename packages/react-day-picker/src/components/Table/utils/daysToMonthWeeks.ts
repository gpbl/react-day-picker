import { getWeek, Locale } from 'date-fns';

import { MonthWeek } from './getMonthWeeks';
import { getOutsideEndDays } from './getOutsideEndDays';
import { getOutsideStartDays } from './getOutsideStartDays';

/** Return the weeks including the given days.  */
export function daysToMonthWeeks(days: Date[], locale: Locale): MonthWeek[] {
  const weeks = days.reduce((result: MonthWeek[], date) => {
    const weekNumber = getWeek(date, { locale });
    const existingWeek = result.find(
      (value) => value.weekNumber === weekNumber
    );
    if (existingWeek) {
      existingWeek.dates.push(date);
      return result;
    }
    // Add start days to the first week
    const startDays = getOutsideStartDays(date, { locale });
    result.push({
      weekNumber,
      dates: [...startDays, date]
    });
    return result;
  }, []);

  // Add outside days to the last week
  const lastWeek = weeks[weeks.length - 1];
  const lastDay = lastWeek.dates[lastWeek.dates.length - 1];
  const endDays = getOutsideEndDays(lastDay, { locale });
  lastWeek.dates = lastWeek.dates.concat(endDays);

  return weeks;
}
