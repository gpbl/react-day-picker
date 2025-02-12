import {
  toEth,
  toGreg,
  ethiopianMonthLength
} from "../utils/ethiopicDateUtils.js";

/**
 * Sets the Ethiopian year while preserving the month and day when possible.
 *
 * @param date - The gregorian date to modify
 * @param year - The Ethiopian year to set
 * @returns A new gregorian date with the Ethiopian year set
 */
export function setYear(date: Date, year: number): Date {
  const etDate = toEth(date);

  // Check if the day is valid in the new year (handles leap year changes)
  const maxDays = ethiopianMonthLength(etDate.Month, year);
  const newDay = Math.min(etDate.Day, maxDays);

  return toGreg({
    ...etDate,
    Year: year,
    Day: newDay
  });
}
