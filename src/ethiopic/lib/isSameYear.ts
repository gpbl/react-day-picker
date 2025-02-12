import { toEth } from "../utils/ethiopicDateUtils.js";

/**
 * Checks if two dates fall in the same Ethiopian year.
 *
 * @param dateLeft - The first gregorian date to compare
 * @param dateRight - The second gregorian date to compare
 * @returns True if the dates are in the same Ethiopian year
 */
export function isSameYear(dateLeft: Date, dateRight: Date): boolean {
  const etDate1 = toEth(dateLeft);
  const etDate2 = toEth(dateRight);
  return etDate1.Year === etDate2.Year;
}
