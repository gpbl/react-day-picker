import {
  differenceInDays,
  getWeek as getWeekFns,
  GetWeekOptions
} from "date-fns";

import { toGregorianDate, toEthiopicDate } from "../utils/index.js";

import { startOfWeek } from "./startOfWeek.js";

/**
 * Get week number for Ethiopian calendar
 *
 * @param {Date} date - The original date
 * @param {GetWeekOptions} [options] - The options object
 * @returns {number} The week number
 */
export function getWeek(date: Date, options?: GetWeekOptions): number {
  const weekStartsOn = options?.weekStartsOn ?? 1; // Default to Tuesday for Ethiopian calendar
  const etDate = toEthiopicDate(date);
  const currentWeekStart = startOfWeek(date, { weekStartsOn });

  // Get the first day of the current year
  const firstDayOfYear = toGregorianDate({
    year: etDate.year,
    month: 1,
    day: 1
  });

  const firstWeekStart = startOfWeek(firstDayOfYear, { weekStartsOn });

  // If date is before the first week of its year
  if (date < firstWeekStart) {
    return getWeekFns(date, { weekStartsOn, firstWeekContainsDate: 1 });
  }

  // Calculate week number based on days since first week
  const daysSinceFirstWeek = differenceInDays(currentWeekStart, firstWeekStart);
  return Math.floor(daysSinceFirstWeek / 7) + 1;
}
