import {
  toEth,
  toGreg,
  ethiopianMonthLength
} from "../utils/ethiopicDateUtils.js";

/**
 * Adds the specified number of months to the given Ethiopian date. Handles
 * month overflow and year boundaries correctly.
 *
 * @param date - The starting gregorian date
 * @param amount - The number of months to add (can be negative)
 * @returns A new gregorian date with the months added
 */
export function addMonths(date: Date, amount: number): Date {
  const etDate = toEth(date);
  let newMonth = etDate.Month + amount;
  const yearAdjustment = Math.floor((newMonth - 1) / 13);
  newMonth = ((newMonth - 1) % 13) + 1;

  if (newMonth < 1) {
    newMonth += 13;
  }

  const newYear = etDate.Year + yearAdjustment;

  // Adjust day if it exceeds the month length
  const monthLength = ethiopianMonthLength(newMonth, newYear);
  const newDay = Math.min(etDate.Day, monthLength);

  return toGreg({
    Year: newYear,
    Month: newMonth,
    Day: newDay
  });
}
