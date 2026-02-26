import { toGregorianDate, toHijriDate } from "../utils/conversion.js";

export function startOfMonth(date: Date): Date {
  const hijri = toHijriDate(date);
  return toGregorianDate({
    year: hijri.year,
    monthIndex: hijri.monthIndex,
    day: 1,
  });
}
