import {
  createHijriCalendarDate,
  fromHijriCalendarDate,
  getHijriCalendar,
  toHijriDate,
} from "../utils/calendar.js";

export function setMonth(
  date: Date,
  month: number,
  timeZone?: string,
): Date {
  const calendar = getHijriCalendar();
  const hijri = toHijriDate(date, timeZone);
  const targetMonth = Math.max(0, Math.min(11, month));
  const temp = createHijriCalendarDate({
    year: hijri.year,
    monthIndex: targetMonth,
    day: 1,
  });
  const maxDay = calendar.getDaysInMonth(temp);
  const day = Math.min(hijri.day, maxDay);
  const result = createHijriCalendarDate({
    year: hijri.year,
    monthIndex: targetMonth,
    day,
  });
  return fromHijriCalendarDate(result, timeZone);
}
