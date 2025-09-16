import {
  CalendarDate,
  createCalendar,
  fromDate,
  toCalendar,
} from "@internationalized/date";

const hijriCalendar = createCalendar("islamic-umalqura");

export type HijriDate = {
  year: number;
  monthIndex: number;
  day: number;
};

const DEFAULT_TIME_ZONE = "UTC";

export function toHijriCalendarDate(
  date: Date,
  timeZone: string = DEFAULT_TIME_ZONE,
): CalendarDate {
  const zoned = fromDate(date, timeZone);
  const converted = toCalendar(zoned, hijriCalendar);
  return new CalendarDate(
    hijriCalendar,
    converted.year,
    converted.month,
    converted.day,
  );
}

export function fromHijriCalendarDate(
  calendarDate: CalendarDate,
  timeZone: string | undefined,
): Date {
  if (timeZone) {
    return calendarDate.toDate(timeZone);
  }
  const utcDate = calendarDate.toDate(DEFAULT_TIME_ZONE);
  return new Date(
    utcDate.getUTCFullYear(),
    utcDate.getUTCMonth(),
    utcDate.getUTCDate(),
  );
}

export function createHijriCalendarDate({
  year,
  monthIndex,
  day,
}: HijriDate): CalendarDate {
  return new CalendarDate(hijriCalendar, year, monthIndex + 1, day);
}

export function toHijriDate(
  date: Date,
  timeZone: string | undefined,
): HijriDate {
  const calendarDate = toHijriCalendarDate(date, timeZone ?? DEFAULT_TIME_ZONE);
  return {
    year: calendarDate.year,
    monthIndex: calendarDate.month - 1,
    day: calendarDate.day,
  };
}

export function toGregorianDate(
  hijriDate: HijriDate,
  timeZone: string | undefined,
): Date {
  const calendarDate = createHijriCalendarDate(hijriDate);
  return fromHijriCalendarDate(calendarDate, timeZone);
}

export function getHijriCalendar() {
  return hijriCalendar;
}
