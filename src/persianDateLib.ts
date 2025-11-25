import { TZDate } from "@date-fns/tz";
import * as dateFnsJalali from "date-fns-jalali";

import { DateLib, type DateLibOptions } from "./index.js";

type DateLibOverrides = Partial<typeof DateLib.prototype>;

const baseOverrides: DateLibOverrides = dateFnsJalali;

function createTimeZonedOverrides(options: DateLibOptions): DateLibOverrides {
  // Convert a jalali date into the requested time zone while preserving Y/M/D.
  const toTimeZone = (date: Date) => {
    const zoned = new TZDate(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      options.timeZone,
    );
    zoned.setHours(
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    );
    return zoned;
  };

  // Clamp the day so month changes never spill into the previous month.
  const clampToMonth = (date: Date, day: number) => {
    const daysInMonth = dateFnsJalali.endOfMonth(date).getDate();
    const clampedDay = Math.min(day, daysInMonth);
    const base = dateFnsJalali.setDate(
      dateFnsJalali.startOfMonth(date),
      clampedDay,
    );
    return toTimeZone(base);
  };

  return {
    ...baseOverrides,
    addMonths: (date: Date, amount: number) =>
      clampToMonth(dateFnsJalali.addMonths(date, amount), date.getDate()),
    addYears: (date: Date, amount: number) =>
      clampToMonth(dateFnsJalali.addYears(date, amount), date.getDate()),
    setMonth: (date: Date, month: number) =>
      clampToMonth(dateFnsJalali.setMonth(date, month), date.getDate()),
    setYear: (date: Date, year: number) =>
      clampToMonth(dateFnsJalali.setYear(date, year), date.getDate()),
    startOfDay: (date: Date) => toTimeZone(dateFnsJalali.startOfDay(date)),
    startOfMonth: (date: Date) => toTimeZone(dateFnsJalali.startOfMonth(date)),
    endOfMonth: (date: Date) => toTimeZone(dateFnsJalali.endOfMonth(date)),
    startOfYear: (date: Date) => toTimeZone(dateFnsJalali.startOfYear(date)),
    endOfYear: (date: Date) => toTimeZone(dateFnsJalali.endOfYear(date)),
  };
}

export function getPersianDateLib(options?: DateLibOptions) {
  const overrides =
    options?.timeZone === undefined
      ? baseOverrides
      : createTimeZonedOverrides(options);
  return new DateLib(options, overrides);
}
