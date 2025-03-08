import { toEthiopicDate, toGregorianDate } from "../utils/index.js";

/**
 * Set month
 *
 * @param {Date} date - The original date
 * @param {number} month - The zero-based month index
 * @returns {Date} The new date with the month set
 */
export function setMonth(date: Date, month: number): Date {
  const { year, day } = toEthiopicDate(date);
  return toGregorianDate({ year, month: month + 1, day }); // Add 1 to month as it's zero-based
}
