import {
  addDays,
  differenceInCalendarDays,
  endOfWeek,
  getWeek,
  Locale,
  startOfWeek
} from 'date-fns';

import { MonthWeek } from './getMonthWeeks';

/** Return the weeks including the given days.  */
export function daysToMonthWeeks(
  earlierDate: Date,
  laterDate: Date,
  options?: {
    locale?: Locale;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  }
): MonthWeek[] {
  const dateLeft = endOfWeek(laterDate, options);
  const dateRight = startOfWeek(earlierDate, options);
  const nOfDays = differenceInCalendarDays(dateLeft, dateRight);
  const days: Date[] = [];
  for (let i = 0; i <= nOfDays; i++) {
    days.push(addDays(dateRight, i));
  }

  const weeksInMonth = days.reduce((result: MonthWeek[], date) => {
    const weekNumber = getWeek(date, options);
    const existingWeek = result.find(
      (value) => value.weekNumber === weekNumber
    );
    if (existingWeek) {
      existingWeek.dates.push(date);
      return result;
    }
    // Add start days to the first week
    // const startDays = getOutsideStartDays(date, options);
    result.push({
      weekNumber,
      dates: [date]
    });
    return result;
  }, []);

  // Add outside days to the last week
  if (weeksInMonth.length === 0) {
    throw new Error('No weeks found between the given dates');
  }

  // const lastWeek = weeksInMonth[weeksInMonth.length - 1];
  // const lastDay = lastWeek.dates[lastWeek.dates.length - 1];
  // const endDays = getOutsideEndDays(lastDay, options);
  // lastWeek.dates = [...lastWeek.dates, ...endDays];

  return weeksInMonth;
}
