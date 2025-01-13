import { daysInMonth } from "../utils/daysInMonth.js";
import { toEthiopicDate, toGregorianDate } from "../utils/index.js";

/**
 * End of month
 *
 * @param {Date} date - The original date
 * @returns {Date} The end of the month
 */
export function endOfMonth(date: Date): Date {
  const { year, month } = toEthiopicDate(date);
  const day = daysInMonth(month, year);
  return toGregorianDate({ year, month, day: day });
}
