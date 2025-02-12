import { addDays as addDaysFns } from "date-fns";

/**
 * Adds days to an Ethiopic date
 *
 * @param {Date} date - The original date
 * @param {number} amount - The number of days to add
 * @returns {Date} The new date
 */
//TODO: We can use the addDays from Date-fns
export function addDays(date: Date, amount: number): Date {
  return addDaysFns(date, amount);
}
