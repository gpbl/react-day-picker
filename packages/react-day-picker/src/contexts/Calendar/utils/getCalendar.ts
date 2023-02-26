import { parseFromToProps } from 'contexts/DayPicker/utils';
import { startOfDay, startOfMonth } from 'date-fns';
import { DayPickerCalendarOptions, DayPickerCalendar } from '../types';
import { getDates } from './getDates';
import { getDayPickerMonths } from './getDayPickerMonths';
import { getDisplayMonths } from './getDisplayMonths';

export function getCalendar(
  options: DayPickerCalendarOptions = {}
): DayPickerCalendar {
  const { numberOfMonths = 1, today = new Date() } = options;
  const { fromDate = today, toDate } = parseFromToProps(options);

  const firstMonth = startOfMonth(startOfDay(fromDate));
  const displayMonths = getDisplayMonths(firstMonth, numberOfMonths, toDate);
  const lastMonth = displayMonths[displayMonths.length - 1];
  const dates = getDates(firstMonth, lastMonth, toDate, options);
  const months = getDayPickerMonths(displayMonths, dates, options);

  return { dates, months };
}
