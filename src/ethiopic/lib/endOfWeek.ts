import { addDays } from "./addDays.js";

/**
 * End of week
 *
 * @param {Date} date - The original date
 * @param {Object} [options] - The options object
 * @param {number} [options.weekStartsOn=0] - The index of the first day of the
 *   week (0 - Sunday). Default is `0`
 * @returns {Date} The end of the week
 */

//TODO: We can use the endOfWeek from Date-fns
export function endOfWeek(
  date: Date,
  options?: { weekStartsOn?: number }
): Date {
  const weekStartsOn = options?.weekStartsOn ?? 0;
  const day = date.getDay();
  const diff = (7 - day + weekStartsOn - 1) % 7;
  return addDays(date, diff);
}
