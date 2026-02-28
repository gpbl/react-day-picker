import { toGregorianDate, toHijriDate } from "../utils/conversion.js";
import { getDaysInMonth } from "../utils/daysInMonth.js";

export function endOfYear(date: Date): Date {
  const hijri = toHijriDate(date);
  const day = getDaysInMonth(hijri.year, 11);
  return toGregorianDate({
    year: hijri.year,
    monthIndex: 11,
    day,
  });
}
