import { startOfDay, startOfMonth } from 'date-fns';
import { DayPickerCalendar } from 'contexts/Calendar';
import { getDates } from './utils/getDates';
import { getDayPickerMonths } from './utils/getDayPickerMonths';
import { getDisplayMonths } from './utils/getDisplayMonths';

export function getCalendar(
  firstMonth: Date,
  toDate?: Date | undefined,
  options?: {
    numberOfMonths?: number;
    ISOWeek?: boolean;
    locale?: Locale;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  }
): DayPickerCalendar {
  const { numberOfMonths = 1 } = options || {};
  const firstDayOfFirstMonth = startOfMonth(startOfDay(firstMonth));
  const displayMonths = getDisplayMonths(
    firstDayOfFirstMonth,
    numberOfMonths,
    toDate
  );
  const lastMonth = displayMonths[displayMonths.length - 1];
  const dates = getDates(firstDayOfFirstMonth, lastMonth, toDate, options);
  const months = getDayPickerMonths(displayMonths, dates, options);

  return { dates, months };
}
