import { startOfDay, startOfMonth } from 'date-fns';

import { FormatOptions } from '../../types/FormatOptions';

import { getDates } from './utils/getDates';
import { getDayPickerMonths } from './utils/getDayPickerMonths';
import { getDisplayMonths } from './utils/getDisplayMonths';

export function getMonthsAndDates(
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
) {
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

  return { dates, months };
}
