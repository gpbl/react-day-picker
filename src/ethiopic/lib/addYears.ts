import { isLeapYearEt, toEth, toGreg } from "../utils/ethiopicDateUtils.js";

/**
 * Adds the specified number of years to the given Ethiopian date. Handles leap
 * year transitions for Pagume month.
 *
 * @param date - The starting gregorian date
 * @param amount - The number of years to add (can be negative)
 * @returns A new gregorian date with the years added
 */
export function addYears(date: Date, amount: number): Date {
  const etDate = toEth(date);
  const day =
    isLeapYearEt(etDate.Year) &&
    etDate.Month === 13 &&
    etDate.Day === 6 &&
    amount % 4 !== 0
      ? 5
      : etDate.Day;
  return toGreg({
    Month: etDate.Month,
    Day: day,
    Year: etDate.Year + amount
  });
}
