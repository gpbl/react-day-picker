import { fromHijriCalendarDate, toHijriCalendarDate } from "../utils/calendar.js";

export function startOfMonth(date: Date, timeZone?: string): Date {
  const hijri = toHijriCalendarDate(date, timeZone);
  const start = hijri.set({ day: 1 });
  return fromHijriCalendarDate(start, timeZone);
}
