import { toGregorianDate } from "../utils/index.js";

/**
 * Creates a new Ethiopic date
 *
 * @param {number} year - The year of the Ethiopic date
 * @param {number} monthIndex - The zero-based month index of the Ethiopic date
 * @param {number} date - The day of the month of the Ethiopic date
 * @returns {Date} The corresponding Gregorian date
 */
export function newDate(year: number, monthIndex: number, date: number): Date {
  return toGregorianDate({ year, month: monthIndex + 1, day: date });
}
