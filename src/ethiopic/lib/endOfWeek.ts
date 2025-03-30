import { endOfWeek as endOfWeekFns, EndOfWeekOptions } from "date-fns";

/**
 * End of week
 *
 * @param {Date} date - The original date
 * @param {EndOfWeekOptions} [options] - The options object
 * @returns {Date} The end of the week
 */
export function endOfWeek(date: Date, options?: EndOfWeekOptions): Date {
  const weekStartsOn = options?.weekStartsOn ?? 0; // Default to Monday (1)
  const endOfWeek = endOfWeekFns(date, { weekStartsOn });
  return endOfWeek;
}
