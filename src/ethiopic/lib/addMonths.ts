import { daysInMonth } from "../utils/daysInMonth.js";
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
  let newMonth = month + amount;
  const yearAdjustment = Math.floor((newMonth - 1) / 13);
  newMonth = ((newMonth - 1) % 13) + 1;

  if (newMonth < 1) {
    newMonth += 13;
  }

  const newYear = year + yearAdjustment;

  // Adjust day if it exceeds the month length
  const monthLength = daysInMonth(newMonth, newYear);
  const newDay = Math.min(day, monthLength);

  return toGregorianDate({ year: newYear, month: newMonth, day: newDay });
}
