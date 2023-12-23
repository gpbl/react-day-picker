import { CalendarMonth } from '../../../classes/CalendarMonth';
import { CalendarWeek } from '../../../classes/CalendarWeek';

/**
 * Returns all the days belonging to the calendar by merging the days in the
 * weeks for each month.
 */
export function getWeeks(months: CalendarMonth[]) {
  const initialWeeks: CalendarWeek[] = [];
  return months.reduce((weeks, month) => {
    return [...weeks, ...month.weeks];
  }, initialWeeks);
}
