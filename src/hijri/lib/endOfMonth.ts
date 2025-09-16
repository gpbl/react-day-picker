import {
  fromHijriCalendarDate,
  getHijriCalendar,
  toHijriCalendarDate,
} from "../utils/calendar.js";

export function endOfMonth(date: Date, timeZone?: string): Date {
  const calendar = getHijriCalendar();
  const hijri = toHijriCalendarDate(date, timeZone);
  const day = calendar.getDaysInMonth(hijri);
  const end = hijri.set({ day });
  return fromHijriCalendarDate(end, timeZone);
}
