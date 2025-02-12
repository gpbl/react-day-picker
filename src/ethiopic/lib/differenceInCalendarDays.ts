import { differenceInCalendarDays as differenceInCalendarDaysNative } from "date-fns";

/**
 * Difference in calendar days
 *
 * @param {Date} dateLeft - The later date
 * @param {Date} dateRight - The earlier date
 * @returns {number} The number of calendar days between the two dates
 */
//TODO: We can use the differenceInCalendarDays from Date-fns
export function differenceInCalendarDays(
  dateLeft: Date,
  dateRight: Date
): number {
  const result = differenceInCalendarDaysNative(dateLeft, dateRight);
  return result;
}
