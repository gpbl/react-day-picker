import {
  addDays,
  differenceInCalendarDays,
  differenceInMonths,
  endOfISOWeek,
  endOfMonth,
  endOfWeek,
  startOfISOWeek,
  startOfWeek
} from 'date-fns';

import type { FormatOptions } from '../../../types/FormatOptions';

const NrOfDaysWithFixedWeeks = 42;

/** Return all the dates to display in the calendar. */
export function getDates(
  firstMonth: Date,
  lastMonth: Date,
  toDate: Date | undefined,
  options: {
    ISOWeek?: boolean;
    fixedWeeks?: boolean;
    locale: FormatOptions['locale'];
    weekStartsOn?: FormatOptions['weekStartsOn'];
  }
): Date[] {
  const { ISOWeek, fixedWeeks, locale, weekStartsOn } = options;
  const firstDateOfFirstWeek = ISOWeek
    ? startOfISOWeek(firstMonth)
    : startOfWeek(firstMonth, {
        weekStartsOn,
        locale
      });

  const lastDateOfLastWeek = ISOWeek
    ? endOfISOWeek(endOfMonth(lastMonth))
    : endOfWeek(endOfMonth(lastMonth), {
        weekStartsOn,
        locale
      });

  const daysDiff = differenceInCalendarDays(
    lastDateOfLastWeek,
    firstDateOfFirstWeek
  );

  const dates: Date[] = [];

  for (let i = 0; i <= daysDiff; i++) {
    const date = addDays(firstDateOfFirstWeek, i);
    if (toDate && date > toDate) break;
    dates.push(new Date(date));
  }
  const nOfMonths = differenceInMonths(firstMonth, lastMonth) + 1;
  if (fixedWeeks && dates.length < NrOfDaysWithFixedWeeks * nOfMonths) {
    for (let i = 0; i < 7; i++) {
      const date = addDays(dates[dates.length - 1], 1);
      dates.push(new Date(date));
    }
  }
  return dates;
}
