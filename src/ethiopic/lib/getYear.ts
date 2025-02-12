import { toEth } from "../utils/ethiopicDateUtils.js";

/**
 * Gets the Ethiopian year from a given date.
 *
 * @param date - The gregorian date to get the Ethiopian year from
 * @returns The Ethiopian year
 */
export function getYear(date: Date): number {
  const etDate = toEth(date);
  return etDate.Year;
}
