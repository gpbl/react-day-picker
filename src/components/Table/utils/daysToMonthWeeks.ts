import {
  addDays,
  differenceInCalendarDays,
  endOfISOWeek,
  endOfWeek,
  getISOWeek,
  getWeek,
  GetWeekOptions,
  isThisISOWeek,
  startOfISOWeek,
  startOfWeek
} from 'date-fns';

import { MonthWeek } from './getMonthWeeks';

/** Return the weeks between two dates.  */
export function daysToMonthWeeks(
  fromDate: Date,
  toDate: Date,
  options?: GetWeekOptions
): MonthWeek[] {
  const toWeek = isThisISOWeek(toDate)
    ? endOfISOWeek(toDate)
    : endOfWeek(toDate, options);
  const fromWeek = isThisISOWeek(fromDate)
    ? startOfISOWeek(fromDate)
    : startOfWeek(fromDate, options);

  const nOfDays = differenceInCalendarDays(toWeek, fromWeek);
  const days: Date[] = [];

  for (let i = 0; i <= nOfDays; i++) {
    days.push(addDays(fromWeek, i));
  }

  const weeksInMonth = days.reduce((result: MonthWeek[], date) => {
    const weekNumber = isThisISOWeek(date)
      ? getISOWeek(date)
      : getWeek(date, options);

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
