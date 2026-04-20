import { toGregorianDate, toHijriDate } from "../utils/conversion.js";

export function startOfYear(date: Date): Date {
  const hijri = toHijriDate(date);
  return toGregorianDate({
    year: hijri.year,
    monthIndex: 0,
    day: 1,
  });
}
