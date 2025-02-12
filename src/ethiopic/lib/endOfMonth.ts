import {
  toEth,
  toGreg,
  ethiopianMonthLength
} from "../utils/ethiopicDateUtils.js";

/**
 * Returns the last day of the Ethiopian month for the given date.
 *
 * @param date - The gregorian date to get the end of month for
 * @returns A new gregorian date representing the last day of the Ethiopian
 *   month
 */
export function endOfMonth(date: Date): Date {
  const etDate = toEth(date);
  const lastDay = ethiopianMonthLength(etDate.Month, etDate.Year);

  return toGreg({
    ...etDate,
    Day: lastDay
  });
}
