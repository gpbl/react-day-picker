import {
  createHijriCalendarDate,
  fromHijriCalendarDate,
  getHijriCalendar,
  toHijriDate,
} from "../utils/calendar.js";

export function setYear(date: Date, year: number, timeZone?: string): Date {
  const calendar = getHijriCalendar();
  const hijri = toHijriDate(date, timeZone);
  const base = createHijriCalendarDate({ year, monthIndex: hijri.monthIndex, day: 1 });
  const maxDay = calendar.getDaysInMonth(base);
  const day = Math.min(hijri.day, maxDay);
  const result = createHijriCalendarDate({
    year,
    monthIndex: hijri.monthIndex,
    day,
  });
  return fromHijriCalendarDate(result, timeZone);
}
