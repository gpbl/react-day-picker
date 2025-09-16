import {
  fromHijriCalendarDate,
  getHijriCalendar,
  toHijriCalendarDate,
} from "../utils/calendar.js";

export function endOfYear(date: Date, timeZone?: string): Date {
  const calendar = getHijriCalendar();
  const hijri = toHijriCalendarDate(date, timeZone);
  const lastMonth = 12;
  const endOfMonth = hijri.set({ month: lastMonth, day: 1 });
  const day = calendar.getDaysInMonth(endOfMonth);
  const end = endOfMonth.set({ day });
  return fromHijriCalendarDate(end, timeZone);
}
