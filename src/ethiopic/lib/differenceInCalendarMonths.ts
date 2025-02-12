import { toEth } from "../utils/ethiopicDateUtils.js";

/**
 * Calculates the number of calendar months between two Ethiopian dates.
 *
 * @param dateLeft - The later gregorian date
 * @param dateRight - The earlier gregorian date
 * @returns The number of ethiopian months between the dates
 */
export function differenceInCalendarMonths(
  dateLeft: Date,
  dateRight: Date
): number {
  const etDate1 = toEth(dateLeft);
  const etDate2 = toEth(dateRight);
  return (etDate1.Year - etDate2.Year) * 13 + (etDate1.Month - etDate2.Month);
}
