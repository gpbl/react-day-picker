import { getDates } from './getDates';
import { getDayPickerMonths } from './getDayPickerMonths';
import { getDisplayMonths } from './getDisplayMonths';
import { startOfDay, startOfMonth } from 'date-fns';

import type { FormatOptions } from '../../../types/FormatOptions';
import type { DayPickerCalendar } from '../types';

/**
 * Return the months and dates for a given date range.
 *
 * @param firstMonth The first month of the range.
 * @param toDate The last month of the range.
 * @param options Options for formatting the output.
 * @returns An object containing the dates and months for the given range.
 */
export function getCalendar(
  firstMonth: Date,
  toDate: Date | undefined,
  options: {
    numberOfMonths: number;
    reverseMonths?: boolean;
    ISOWeek?: boolean;
    fixedWeeks?: boolean;
    locale: FormatOptions['locale'];
    weekStartsOn?: FormatOptions['weekStartsOn'];
    firstWeekContainsDate?: FormatOptions['firstWeekContainsDate'];
  }
): Pick<DayPickerCalendar, 'dates' | 'dayPickerMonths'> {
  const { numberOfMonths, reverseMonths, ISOWeek, fixedWeeks } = options;

  const firstDayOfFirstMonth = startOfMonth(startOfDay(firstMonth));

  const displayMonths = getDisplayMonths(
    firstDayOfFirstMonth,
    numberOfMonths,
    toDate
  );
  const lastMonth = displayMonths[displayMonths.length - 1];
  const dates = getDates(firstDayOfFirstMonth, lastMonth, toDate, {
    ISOWeek,
    fixedWeeks,
    locale: options?.locale,
    weekStartsOn: options?.weekStartsOn
  });
  const months = getDayPickerMonths(displayMonths, dates, {
    reverseMonths,
    ISOWeek,
    fixedWeeks,
    locale: options?.locale,
    weekStartsOn: options?.weekStartsOn,
    firstWeekContainsDate: options?.firstWeekContainsDate
  });

  return { dates, dayPickerMonths: months };
}
