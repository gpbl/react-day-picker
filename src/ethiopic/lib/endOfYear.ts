import { toEth, toGreg, isLeapYearEt } from "../utils/ethiopicDateUtils.js";

/**
 * Returns the last day of the Ethiopian year for the given date.
 *
 * @param date - The gregorian date to get the end of year for
 * @returns A new gregorian date representing the last day of the Ethiopian year
 *   (Pagume 5 or 6)
 */
export function endOfYear(date: Date): Date {
  const etDate = toEth(date);
  return toGreg({
    Year: etDate.Year,
    Month: 13,
    Day: isLeapYearEt(etDate.Year) ? 6 : 5
  });
}
