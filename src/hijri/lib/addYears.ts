import { toGregorianDate, toHijriDate } from "../utils/calendar.js";

export function addYears(
  date: Date,
  amount: number,
  timeZone?: string,
): Date {
  if (amount === 0) {
    return new Date(date.getTime());
  }
  const hijri = toHijriDate(date, timeZone);
  return toGregorianDate(
    {
      year: hijri.year + amount,
      monthIndex: hijri.monthIndex,
      day: hijri.day,
    },
    timeZone,
  );
}
