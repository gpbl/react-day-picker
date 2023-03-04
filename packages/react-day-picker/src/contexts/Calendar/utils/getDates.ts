import {
  addDays,
  endOfMonth,
  endOfWeek,
  startOfWeek,
  startOfISOWeek,
  endOfISOWeek,
  differenceInCalendarDays
} from 'date-fns';

/** Return all the dates to display in the calendar. */
export function getDates(
  firstMonth: Date,
  lastMonth: Date,
  toDate?: Date,
  options?: {
    ISOWeek?: boolean;
    locale?: Locale;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  }
): Date[] {
  const firstDateOfFirstWeek = options?.ISOWeek
    ? startOfISOWeek(firstMonth)
    : startOfWeek(firstMonth, options);

  const lastDateOfLastWeek = options?.ISOWeek
    ? endOfISOWeek(endOfMonth(lastMonth))
    : endOfWeek(endOfMonth(lastMonth), options);

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

  return dates;
}
