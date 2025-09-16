import { toGregorianDate, toHijriCalendarDate } from "../utils/calendar.js";

export function addMonths(
  date: Date,
  amount: number,
  timeZone?: string,
): Date {
  if (amount === 0) {
    return new Date(date.getTime());
  }
  const hijriCalendarDate = toHijriCalendarDate(date, timeZone);
  const moved = hijriCalendarDate.add({ months: amount });
  return toGregorianDate(
    {
      year: moved.year,
      monthIndex: moved.month - 1,
      day: moved.day,
    },
    timeZone,
  );
}
