import { toEth, toGreg } from "../utils/ethiopicDateUtils.js";

/**
 * Returns the first day of the Ethiopian month for the given date.
 *
 * @param date - The gregorian date to get the start of month for
 * @returns A new gregorian date representing the first day of the Ethiopian
 *   month
 */
export function startOfMonth(date: Date): Date {
  const etDate = toEth(date);
  return toGreg({
    ...etDate,
    Day: 1
  });
}
