import { fromHijriCalendarDate, toHijriCalendarDate } from "../utils/calendar.js";

export function startOfYear(date: Date, timeZone?: string): Date {
  const hijri = toHijriCalendarDate(date, timeZone);
  const start = hijri.set({ month: 1, day: 1 });
  return fromHijriCalendarDate(start, timeZone);
}
