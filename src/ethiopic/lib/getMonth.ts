import { toEth } from "../utils/ethiopicDateUtils.js";

/**
 * Gets the Ethiopian month (0-12) from a given date.
 *
 * @param date - The gregorian date to get the Ethiopian month from
 * @returns The Ethiopian month number (0-based, where 0 = Meskerem and 12 =
 *   Pagume)
 */
export function getMonth(date: Date): number {
  const etDate = toEth(date);
  return etDate.Month - 1; // Convert to 0-based for compatibility
}
