import {
  addDays,
  differenceInCalendarDays,
  endOfWeek,
  getWeek,
  Locale,
  startOfWeek
} from 'date-fns';

import { MonthWeek } from './getMonthWeeks';

/** Return the weeks between two dates.  */
export function daysToMonthWeeks(
  fromDate: Date,
  toDate: Date,
  options?: {
    locale?: Locale;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  }
): MonthWeek[] {
  const toWeek = endOfWeek(toDate, options);
  const fromWeek = startOfWeek(fromDate, options);
  const nOfDays = differenceInCalendarDays(toWeek, fromWeek);
  const days: Date[] = [];

  for (let i = 0; i <= nOfDays; i++) {
    days.push(addDays(fromWeek, i));
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
    result.push({
      weekNumber,
      dates: [date]
    });
    return result;
  }, []);

  return weeksInMonth;
}
