import {
  toEthiopicDate,
  toGregorianDate,
  daysInMonth,
} from "../utils/index.js";

/**
 * Set month
 *
 * @param {Date} date - The original date
 * @param {number} month - The zero-based month index
 * @returns {Date} The new date with the month set
 */
export function setMonth(date: Date, month: number): Date {
  const { year, day } = toEthiopicDate(date);
  const targetMonth = month + 1; // Convert from zero-based index
  const safeDay = Math.min(day, daysInMonth(targetMonth, year));
  return toGregorianDate({ year, month: targetMonth, day: safeDay });
}
