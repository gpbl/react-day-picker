import { toEthiopicDate, toGregorianDate } from "../utils/index.js";

/**
 * Adds months to an Ethiopic date
 *
 * @param {Date} date - The original date
 * @param {number} amount - The number of months to add
 * @returns {Date} The new date
 */
export function addMonths(date: Date, amount: number): Date {
  const { year, month, day } = toEthiopicDate(date);
  const totalMonths = month + amount - 1;
  const newYear = year + Math.floor(totalMonths / 12);
  const newMonth = (totalMonths % 12) + 1;
  return toGregorianDate({ year: newYear, month: newMonth, day });
}
