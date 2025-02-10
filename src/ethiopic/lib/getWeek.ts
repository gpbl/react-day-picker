import { toGregorianDate, toEthiopicDate } from "../utils/index.js";

import { differenceInCalendarDays } from "./differenceInCalendarDays.js";

/**
 * Get week
 *
 * @param {Date} date - The original date
 * @param {Object} [options] - The options object
 * @param {number} [options.weekStartsOn=0] - The index of the first day of the
 *   week (0 - Sunday). Default is `0`
 * @returns {number} The week number
 */
export function getWeek(
  date: Date,
  options?: { weekStartsOn?: number }
): number {
  const weekStartsOn = options?.weekStartsOn ?? 0; // Default to Sunday
  const startOfYear = toGregorianDate({
    year: toEthiopicDate(date).year,
    month: 1,
    day: 1
  });
  const diffInDays = differenceInCalendarDays(date, startOfYear);
  return Math.floor((diffInDays + weekStartsOn) / 7) + 1;
}
