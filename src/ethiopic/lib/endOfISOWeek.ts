import { addDays } from "./addDays.js";

/**
 * End of ISO week
 *
 * @param {Date} date - The original date
 * @returns {Date} The end of the ISO week
 */
export function endOfISOWeek(date: Date): Date {
  const day = date.getDay();
  const diff = (7 - day + 1) % 7; // ISO week ends on Sunday
  return addDays(date, diff);
}
