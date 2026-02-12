import { toGregorianDate, toHijriDate } from "../utils/conversion.js";
import { getDaysInMonth } from "../utils/daysInMonth.js";

export function setMonth(date: Date, monthIndex: number): Date {
  const hijri = toHijriDate(date);

  // Handle overflow/underflow of monthIndex
  // Note: monthIndex argument is absolute month index for the year.
  // E.g. setMonth(..., 13) sets to Safar next year.

  let targetYear = hijri.year;
  let targetMonth = monthIndex;

  if (targetMonth > 11 || targetMonth < 0) {
      targetYear += Math.floor(targetMonth / 12);
      targetMonth = targetMonth % 12;
      if (targetMonth < 0) {
          targetMonth += 12;
      }
  }

  const daysInTargetMonth = getDaysInMonth(targetYear, targetMonth);
  const day = Math.min(hijri.day, daysInTargetMonth);

  return toGregorianDate({
    year: targetYear,
    monthIndex: targetMonth,
    day,
  });
}
