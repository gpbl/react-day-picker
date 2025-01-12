import { addDays } from "./addDays.js";

/**
 * Start of week
 *
 * @param {Date} date - The original date
 * @returns {Date} The start of the week
 */
export function startOfWeek(date: Date): Date {
  const day = date.getDay();
  return addDays(date, -day); // Subtract days to get to Sunday (start of week)
}
