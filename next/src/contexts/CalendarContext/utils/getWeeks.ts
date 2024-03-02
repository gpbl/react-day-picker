import { Month } from "../../../classes/CalendarMonth";
import { Week } from "../../../classes/CalendarWeek";

/**
 * Returns all the days belonging to the calendar by merging the days in the
 * weeks for each month.
 */
export function getWeeks(months: Month[]) {
  const initialWeeks: Week[] = [];
  return months.reduce((weeks, month) => {
    return [...weeks, ...month.weeks];
  }, initialWeeks);
}
