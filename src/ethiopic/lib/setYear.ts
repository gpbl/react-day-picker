import { ethiopicMonthLength } from "../utils/ethiopicDateUtils.js";
import { toEthiopicDate, toGregorianDate } from "../utils/index.js";

/**
 * Set year
 *
 * @param {Date} date - The original date
 * @param {number} year - The year to set
 * @returns {Date} The new date with the year set
 */
export function setYear(date: Date, year: number): Date {
  const { month, day } = toEthiopicDate(date);

  // Check if the day is valid in the new year (handles leap year changes)
  const maxDays = ethiopicMonthLength(month, year);
  const newDay = Math.min(day, maxDays);

  return toGregorianDate({ year, month, day: newDay });
}