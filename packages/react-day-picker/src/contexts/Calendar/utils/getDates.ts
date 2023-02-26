import {
  addDays,
  endOfMonth,
  endOfWeek,
  startOfWeek,
  startOfISOWeek,
  endOfISOWeek,
  differenceInCalendarDays
} from 'date-fns';
import { DayPickerCalendarOptions } from '../types';

export function getDates(
  firstMonth: Date,
  lastMonth: Date,
  toDate?: Date,
  options: DayPickerCalendarOptions = {}
): Date[] {
  const firstDateOfFirstWeek = options.ISOWeek
    ? startOfISOWeek(firstMonth)
    : startOfWeek(firstMonth, options);

  const lastDateOfLastWeek = options.ISOWeek
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
