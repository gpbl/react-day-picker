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
  // Convert from 0-based month index to 1-based Ethiopian month
  const month = monthIndex + 1;

  if (month < 1 || month > 13) {
    throw new Error(
      "Month must be between 0 and 12 (1-13 in Ethiopian calendar)"
    );
  }

  return toGregorianDate({ year, month, day: date });
}
