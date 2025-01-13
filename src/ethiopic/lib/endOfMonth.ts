import {
  toEthiopicDate,
  isEthiopicLeapYear,
  toGregorianDate
} from "../utils/index.js";

/**
 * End of month
 *
 * @param {Date} date - The original date
 * @returns {Date} The end of the month
 */
export function endOfMonth(date: Date): Date {
  const { year, month } = toEthiopicDate(date);
  const daysInMonth = month === 13 ? (isEthiopicLeapYear(year) ? 6 : 5) : 30;
  return toGregorianDate({ year, month, day: daysInMonth });
}
