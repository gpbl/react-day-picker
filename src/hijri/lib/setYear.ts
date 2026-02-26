import { toGregorianDate, toHijriDate } from "../utils/conversion.js";
import { getDaysInMonth } from "../utils/daysInMonth.js";

export function setYear(date: Date, year: number): Date {
  const hijri = toHijriDate(date);
  const daysInTargetMonth = getDaysInMonth(year, hijri.monthIndex);
  const day = Math.min(hijri.day, daysInTargetMonth);

  return toGregorianDate({
    year,
    monthIndex: hijri.monthIndex,
    day,
  });
}
