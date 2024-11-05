import {
  EndOfWeekOptions,
  FormatOptions as DateFnsFormatOptions,
  StartOfWeekOptions
} from "date-fns";
import type { Locale } from "date-fns/locale";
import { enUS } from "date-fns/locale";
import HijriDate from "hijri-date/lib/safe";

export type { Locale } from "date-fns/locale";
export type { Month as DateFnsMonth } from "date-fns";

export interface DateLibHijriOptions
  extends DateFnsFormatOptions,
    StartOfWeekOptions,
    EndOfWeekOptions {
  Date?: typeof HijriDate;
  locale?: Locale;
}

export class DateLibHijri {
  readonly options: DateLibHijriOptions;
  readonly overrides?: Partial<typeof DateLibHijri.prototype>;

  constructor(
    options?: DateLibHijriOptions,
    overrides?: Partial<typeof DateLibHijri.prototype>
  ) {
    this.options = { locale: enUS, ...options };
    this.overrides = overrides;
  }

  Date: typeof HijriDate = HijriDate;

  addDays = (date: Date, amount: number) => {
    const hijriDate = new HijriDate(date);
    hijriDate.setDate(hijriDate.getDate() + amount);
    return hijriDate;
  };

  addMonths = (date: Date, amount: number) => {
    const hijriDate = new HijriDate(date);
    hijriDate.setMonth(hijriDate.getMonth() + amount);
    return hijriDate;
  };

  addWeeks = (date: Date, amount: number) => {
    return this.addDays(date, amount * 7);
  };

  addYears = (date: Date, amount: number) => {
    const hijriDate = new HijriDate(date);
    hijriDate.setFullYear(hijriDate.getFullYear() + amount);
    return hijriDate;
  };

  differenceInCalendarDays = (dateLeft: Date, dateRight: Date) => {
    const hijriDateLeft = new HijriDate(dateLeft);
    const hijriDateRight = new HijriDate(dateRight);
    return hijriDateLeft.getDate() - hijriDateRight.getDate();
  };

  differenceInCalendarMonths = (dateLeft: Date, dateRight: Date) => {
    const hijriDateLeft = new HijriDate(dateLeft);
    const hijriDateRight = new HijriDate(dateRight);
    return (
      hijriDateLeft.getFullYear() * 12 +
      hijriDateLeft.getMonth() -
      (hijriDateRight.getFullYear() * 12 + hijriDateRight.getMonth())
    );
  };

  endOfWeek = (date: Date) => {
    const hijriDate = new HijriDate(date);
    hijriDate.setDate(hijriDate.getDate() + (6 - hijriDate.getDay()));
    return hijriDate;
  };

  endOfYear = (date: Date) => {
    const hijriDate = new HijriDate(date);
    hijriDate.setMonth(11, 29);
    return hijriDate;
  };

  format = (date: Date, formatStr: string) => {
    const hijriDate = new HijriDate(date);
    return hijriDate.format(formatStr);
  };

  getWeek = (date: Date) => {
    const hijriDate = new HijriDate(date);
    return Math.ceil((hijriDate.getDate() + 6 - hijriDate.getDay()) / 7);
  };

  isAfter = (date: Date, dateToCompare: Date) => {
    return new HijriDate(date) > new HijriDate(dateToCompare);
  };

  isBefore = (date: Date, dateToCompare: Date) => {
    return new HijriDate(date) < new HijriDate(dateToCompare);
  };

  isDate: (value: unknown) => value is Date = (value): value is Date => {
    return value instanceof HijriDate;
  };

  isSameDay = (dateLeft: Date, dateRight: Date) => {
    const hijriDateLeft = new HijriDate(dateLeft);
    const hijriDateRight = new HijriDate(dateRight);
    return hijriDateLeft.getDate() === hijriDateRight.getDate();
  };

  isSameMonth = (dateLeft: Date, dateRight: Date) => {
    const hijriDateLeft = new HijriDate(dateLeft);
    const hijriDateRight = new HijriDate(dateRight);
    return hijriDateLeft.getMonth() === hijriDateRight.getMonth();
  };

  isSameYear = (dateLeft: Date, dateRight: Date) => {
    const hijriDateLeft = new HijriDate(dateLeft);
    const hijriDateRight = new HijriDate(dateRight);
    return hijriDateLeft.getFullYear() === hijriDateRight.getFullYear();
  };

  max = (dates: Date[]) => {
    return dates.reduce((maxDate, currentDate) => {
      return new HijriDate(currentDate) > new HijriDate(maxDate)
        ? currentDate
        : maxDate;
    });
  };

  min = (dates: Date[]) => {
    return dates.reduce((minDate, currentDate) => {
      return new HijriDate(currentDate) < new HijriDate(minDate)
        ? currentDate
        : minDate;
    });
  };

  setMonth = (date: Date, month: number) => {
    const hijriDate = new HijriDate(date);
    hijriDate.setMonth(month);
    return hijriDate;
  };

  setYear = (date: Date, year: number) => {
    const hijriDate = new HijriDate(date);
    hijriDate.setFullYear(year);
    return hijriDate;
  };

  startOfDay = (date: Date) => {
    const hijriDate = new HijriDate(date);
    hijriDate.setHours(0, 0, 0, 0);
    return hijriDate;
  };

  startOfWeek = (date: Date) => {
    const hijriDate = new HijriDate(date);
    hijriDate.setDate(hijriDate.getDate() - hijriDate.getDay());
    return hijriDate;
  };

  startOfYear = (date: Date) => {
    const hijriDate = new HijriDate(date);
    hijriDate.setMonth(0, 1);
    return hijriDate;
  };
}

export const defaultDateLibHijri = new DateLibHijri();
