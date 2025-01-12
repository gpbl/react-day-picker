import { ethiopicMonthLength } from "../utils/ethiopicDateUtils.js";
import { toEthiopicDate, toGregorianDate } from "../utils/index.js";

/**
 * End of month
 *
 * @param {Date} date - The original date
 * @returns {Date} The end of the month
 */
export function endOfMonth(date: Date): Date {
  const { year, month } = toEthiopicDate(date);
  const lastDay = ethiopicMonthLength(month, year);

  return toGregorianDate({ year, month, day: lastDay });
}
