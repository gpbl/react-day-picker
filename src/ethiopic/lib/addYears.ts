import {
  toEthiopicDate,
  isEthiopicLeapYear,
  toGregorianDate
} from "../utils/index.js";

/**
 * Adds years to an Ethiopic date
 *
 * @param {Date} date - The original date
 * @param {number} amount - The number of years to add
 * @returns {Date} The new date
 */
export function addYears(date: Date, amount: number): Date {
  const { year, month, day } = toEthiopicDate(date);
  const newYear = year + amount;
  const newDay =
    month === 13 && day === 6 && !isEthiopicLeapYear(newYear) ? 5 : day;
  return toGregorianDate({ year: newYear, month, day: newDay });
}
