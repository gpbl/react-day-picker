import { TZDate } from "@date-fns/tz";
import type {
  FormatOptions as DateFnsFormatOptions,
  EndOfWeekOptions,
  GetMonthOptions,
  GetWeekOptions,
  GetYearOptions,
  Interval,
  StartOfWeekOptions,
} from "date-fns";
import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  eachMonthOfInterval,
  eachYearOfInterval,
  endOfISOWeek,
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  getISOWeek,
  getMonth,
  getWeek,
  getYear,
  isAfter,
  isBefore,
  isDate,
  isSameDay,
  isSameMonth,
  isSameYear,
  max,
  min,
  setMonth,
  setYear,
  startOfDay,
  startOfISOWeek,
  startOfMonth,
  startOfWeek,
  startOfYear,
} from "date-fns";
import type { Locale as DateFnsLocale } from "date-fns/locale";
import { endOfBroadcastWeek } from "../helpers/endOfBroadcastWeek.js";
import { startOfBroadcastWeek } from "../helpers/startOfBroadcastWeek.js";
import { enUS } from "../locale/en-US.js";
import type { Labels, Numerals } from "../types/shared.js";

export type { Month as DateFnsMonth } from "date-fns";

/**
 * Translations for DayPicker-specific labels.
 *
 * @since V9.12.0
 */
export type DayPickerLocaleLabels = {
  [K in keyof Labels]?: string | Labels[K];
};

/**
 * Locale type used by DayPicker.
 *
 * @since V9.12.0
 */
export interface DayPickerLocale extends DateFnsLocale {
  /** Localized DayPicker-specific labels. */
  labels?: DayPickerLocaleLabels;
}
export type Locale = DayPickerLocale;

/** Indicates the preferred ordering of month and year for localized labels. */
export type MonthYearOrder = "month-first" | "year-first";

/**
 * The options for the `DateLib` class.
 *
 * Extends `date-fns` [format](https://date-fns.org/docs/format),
 * [startOfWeek](https://date-fns.org/docs/startOfWeek) and
 * [endOfWeek](https://date-fns.org/docs/endOfWeek) options.
 *
 * @since 9.2.0
 */
export interface DateLibOptions
  extends DateFnsFormatOptions,
    StartOfWeekOptions,
    EndOfWeekOptions {
  /** A constructor for the `Date` object. */
  Date?: typeof Date;
  /** A locale to use for formatting dates. */
  locale?: DayPickerLocale;
  /**
   * A time zone to use for dates.
   *
   * @since 9.5.0
   */
  timeZone?: string;
  /**
   * The numbering system to use for formatting numbers.
   *
   * @since 9.5.0
   */
  numerals?: Numerals;
}

/**
 * A wrapper class around [date-fns](http://date-fns.org) that provides utility
 * methods for date manipulation and formatting.
 *
 * @since 9.2.0
 * @example
 *   const dateLib = new DateLib({ locale: es });
 *   const newDate = dateLib.addDays(new Date(), 5);
 */
export class DateLib {
  /** The options for configuring the date library. */
  readonly options: DateLibOptions;

  /** Overrides for the default date library functions. */
  readonly overrides?: Partial<typeof DateLib.prototype>;

  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(
    options?: DateLibOptions,
    overrides?: Partial<typeof DateLib.prototype>,
  ) {
    this.options = { locale: enUS, ...options };
    this.overrides = overrides;
  }

  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  private getDigitMap(): Record<string, string> {
    const { numerals = "latn" } = this.options;

    // Use Intl.NumberFormat to create a formatter with the specified numbering system
    const formatter = new Intl.NumberFormat("en-US", {
      numberingSystem: numerals,
    });

    // Map Arabic digits (0-9) to the target numerals
    const digitMap: Record<string, string> = {};
    for (let i = 0; i < 10; i++) {
      digitMap[i.toString()] = formatter.format(i);
    }

    return digitMap;
  }

  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  private replaceDigits(input: string): string {
    const digitMap = this.getDigitMap();
    return input.replace(/\d/g, (digit) => digitMap[digit] || digit);
  }

  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(value: number | string): string {
    return this.replaceDigits(value.toString());
  }

  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder(): MonthYearOrder {
    const code = this.options.locale?.code;
    if (!code) {
      return "month-first";
    }
    return DateLib.yearFirstLocales.has(code) ? "year-first" : "month-first";
  }

  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(date: Date): string {
    const { locale, timeZone, numerals } = this.options;
    const localeCode = locale?.code;
    if (localeCode && DateLib.yearFirstLocales.has(localeCode)) {
      try {
        const intl = new Intl.DateTimeFormat(localeCode, {
          month: "long",
          year: "numeric",
          timeZone,
          numberingSystem: numerals,
        });
        const formatted = intl.format(date);
        return formatted;
      } catch {
        // Fallback to date-fns formatting below.
      }
    }

    const pattern =
      this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(date, pattern);
  }

  private static readonly yearFirstLocales = new Set([
    "eu",
    "hu",
    "ja",
    "ja-Hira",
    "ja-JP",
    "ko",
    "ko-KR",
    "lt",
    "lt-LT",
    "lv",
    "lv-LV",
    "mn",
    "mn-MN",
    "zh",
    "zh-CN",
    "zh-HK",
    "zh-TW",
  ]);

  /**
   * Creates a new `Date` object representing today's date.
   *
   * @since 9.5.0
   * @returns A `Date` object for today's date.
   */
  today = (): Date => {
    if (this.overrides?.today) {
      return this.overrides.today();
    }
    if (this.options.timeZone) {
      return TZDate.tz(this.options.timeZone);
    }
    const DateCtor = this.options.Date ?? Date;
    return new DateCtor();
  };

  /**
   * Creates a new `Date` object with the specified year, month, and day.
   *
   * @since 9.5.0
   * @param year The year.
   * @param monthIndex The month (0-11).
   * @param date The day of the month.
   * @returns A new `Date` object.
   */
  newDate = (year: number, monthIndex: number, date: number): Date => {
    if (this.overrides?.newDate) {
      return this.overrides.newDate(year, monthIndex, date);
    }
    if (this.options.timeZone) {
      return new TZDate(year, monthIndex, date, this.options.timeZone);
    }
    return new Date(year, monthIndex, date);
  };

  /**
   * Adds the specified number of days to the given date.
   *
   * @param date The date to add days to.
   * @param amount The number of days to add.
   * @returns The new date with the days added.
   */
  addDays = (date: Date, amount: number): Date => {
    return this.overrides?.addDays
      ? this.overrides.addDays(date, amount)
      : addDays(date, amount);
  };

  /**
   * Adds the specified number of months to the given date.
   *
   * @param date The date to add months to.
   * @param amount The number of months to add.
   * @returns The new date with the months added.
   */
  addMonths = (date: Date, amount: number): Date => {
    return this.overrides?.addMonths
      ? this.overrides.addMonths(date, amount)
      : addMonths(date, amount);
  };

  /**
   * Adds the specified number of weeks to the given date.
   *
   * @param date The date to add weeks to.
   * @param amount The number of weeks to add.
   * @returns The new date with the weeks added.
   */
  addWeeks = (date: Date, amount: number): Date => {
    return this.overrides?.addWeeks
      ? this.overrides.addWeeks(date, amount)
      : addWeeks(date, amount);
  };

  /**
   * Adds the specified number of years to the given date.
   *
   * @param date The date to add years to.
   * @param amount The number of years to add.
   * @returns The new date with the years added.
   */
  addYears = (date: Date, amount: number): Date => {
    return this.overrides?.addYears
      ? this.overrides.addYears(date, amount)
      : addYears(date, amount);
  };

  /**
   * Returns the number of calendar days between the given dates.
   *
   * @param dateLeft The later date.
   * @param dateRight The earlier date.
   * @returns The number of calendar days between the dates.
   */
  differenceInCalendarDays = (dateLeft: Date, dateRight: Date): number => {
    return this.overrides?.differenceInCalendarDays
      ? this.overrides.differenceInCalendarDays(dateLeft, dateRight)
      : differenceInCalendarDays(dateLeft, dateRight);
  };

  /**
   * Returns the number of calendar months between the given dates.
   *
   * @param dateLeft The later date.
   * @param dateRight The earlier date.
   * @returns The number of calendar months between the dates.
   */
  differenceInCalendarMonths = (dateLeft: Date, dateRight: Date): number => {
    return this.overrides?.differenceInCalendarMonths
      ? this.overrides.differenceInCalendarMonths(dateLeft, dateRight)
      : differenceInCalendarMonths(dateLeft, dateRight);
  };

  /**
   * Returns the months between the given dates.
   *
   * @param interval The interval to get the months for.
   */
  eachMonthOfInterval = (interval: Interval): Date[] => {
    return this.overrides?.eachMonthOfInterval
      ? this.overrides.eachMonthOfInterval(interval)
      : eachMonthOfInterval(interval);
  };

  /**
   * Returns the years between the given dates.
   *
   * @since 9.11.1
   * @param interval The interval to get the years for.
   * @returns The array of years in the interval.
   */
  eachYearOfInterval = (interval: Interval): Date[] => {
    const years = this.overrides?.eachYearOfInterval
      ? this.overrides.eachYearOfInterval(interval)
      : eachYearOfInterval(interval);
    // Remove duplicates that may happen across DST transitions (e.g., "America/Sao_Paulo")
    // See https://github.com/date-fns/tz/issues/72
    const uniqueYears = new Set(years.map((d) => this.getYear(d)));
    if (uniqueYears.size === years.length) {
      // No duplicates, return as is
      return years;
    }
    // Rebuild the array to ensure one date per year
    const yearsArray: Date[] = [];
    uniqueYears.forEach((y) => {
      yearsArray.push(new Date(y, 0, 1));
    });
    return yearsArray;
  };

  /**
   * Returns the end of the broadcast week for the given date.
   *
   * @param date The original date.
   * @returns The end of the broadcast week.
   */
  endOfBroadcastWeek = (date: Date): Date => {
    return this.overrides?.endOfBroadcastWeek
      ? this.overrides.endOfBroadcastWeek(date)
      : endOfBroadcastWeek(date, this);
  };

  /**
   * Returns the end of the ISO week for the given date.
   *
   * @param date The original date.
   * @returns The end of the ISO week.
   */
  endOfISOWeek = (date: Date): Date => {
    return this.overrides?.endOfISOWeek
      ? this.overrides.endOfISOWeek(date)
      : endOfISOWeek(date);
  };

  /**
   * Returns the end of the month for the given date.
   *
   * @param date The original date.
   * @returns The end of the month.
   */
  endOfMonth = (date: Date): Date => {
    return this.overrides?.endOfMonth
      ? this.overrides.endOfMonth(date)
      : endOfMonth(date);
  };

  /**
   * Returns the end of the week for the given date.
   *
   * @param date The original date.
   * @returns The end of the week.
   */
  endOfWeek = (date: Date, options?: EndOfWeekOptions<Date>): Date => {
    return this.overrides?.endOfWeek
      ? this.overrides.endOfWeek(date, options)
      : endOfWeek(date, this.options);
  };

  /**
   * Returns the end of the year for the given date.
   *
   * @param date The original date.
   * @returns The end of the year.
   */
  endOfYear = (date: Date): Date => {
    return this.overrides?.endOfYear
      ? this.overrides.endOfYear(date)
      : endOfYear(date);
  };

  /**
   * Formats the given date using the specified format string.
   *
   * @param date The date to format.
   * @param formatStr The format string.
   * @returns The formatted date string.
   */
  format = (
    date: Date,
    formatStr: string,
    _options?: DateFnsFormatOptions,
  ): string => {
    const formatted = this.overrides?.format
      ? this.overrides.format(date, formatStr, this.options)
      : format(date, formatStr, this.options);
    if (this.options.numerals && this.options.numerals !== "latn") {
      return this.replaceDigits(formatted);
    }
    return formatted;
  };

  /**
   * Returns the ISO week number for the given date.
   *
   * @param date The date to get the ISO week number for.
   * @returns The ISO week number.
   */
  getISOWeek = (date: Date): number => {
    return this.overrides?.getISOWeek
      ? this.overrides.getISOWeek(date)
      : getISOWeek(date);
  };

  /**
   * Returns the month of the given date.
   *
   * @param date The date to get the month for.
   * @returns The month.
   */
  getMonth = (date: Date, _options?: GetMonthOptions): number => {
    return this.overrides?.getMonth
      ? this.overrides.getMonth(date, this.options)
      : getMonth(date, this.options);
  };

  /**
   * Returns the year of the given date.
   *
   * @param date The date to get the year for.
   * @returns The year.
   */
  getYear = (date: Date, _options?: GetYearOptions): number => {
    return this.overrides?.getYear
      ? this.overrides.getYear(date, this.options)
      : getYear(date, this.options);
  };

  /**
   * Returns the local week number for the given date.
   *
   * @param date The date to get the week number for.
   * @returns The week number.
   */
  getWeek = (date: Date, _options?: GetWeekOptions): number => {
    return this.overrides?.getWeek
      ? this.overrides.getWeek(date, this.options)
      : getWeek(date, this.options);
  };

  /**
   * Checks if the first date is after the second date.
   *
   * @param date The date to compare.
   * @param dateToCompare The date to compare with.
   * @returns True if the first date is after the second date.
   */
  isAfter = (date: Date, dateToCompare: Date): boolean => {
    return this.overrides?.isAfter
      ? this.overrides.isAfter(date, dateToCompare)
      : isAfter(date, dateToCompare);
  };

  /**
   * Checks if the first date is before the second date.
   *
   * @param date The date to compare.
   * @param dateToCompare The date to compare with.
   * @returns True if the first date is before the second date.
   */
  isBefore = (date: Date, dateToCompare: Date): boolean => {
    return this.overrides?.isBefore
      ? this.overrides.isBefore(date, dateToCompare)
      : isBefore(date, dateToCompare);
  };

  /**
   * Checks if the given value is a Date object.
   *
   * @param value The value to check.
   * @returns True if the value is a Date object.
   */
  isDate: (value: unknown) => value is Date = (value): value is Date => {
    return this.overrides?.isDate
      ? this.overrides.isDate(value)
      : isDate(value);
  };

  /**
   * Checks if the given dates are on the same day.
   *
   * @param dateLeft The first date to compare.
   * @param dateRight The second date to compare.
   * @returns True if the dates are on the same day.
   */
  isSameDay = (dateLeft: Date, dateRight: Date): boolean => {
    return this.overrides?.isSameDay
      ? this.overrides.isSameDay(dateLeft, dateRight)
      : isSameDay(dateLeft, dateRight);
  };

  /**
   * Checks if the given dates are in the same month.
   *
   * @param dateLeft The first date to compare.
   * @param dateRight The second date to compare.
   * @returns True if the dates are in the same month.
   */
  isSameMonth = (dateLeft: Date, dateRight: Date): boolean => {
    return this.overrides?.isSameMonth
      ? this.overrides.isSameMonth(dateLeft, dateRight)
      : isSameMonth(dateLeft, dateRight);
  };

  /**
   * Checks if the given dates are in the same year.
   *
   * @param dateLeft The first date to compare.
   * @param dateRight The second date to compare.
   * @returns True if the dates are in the same year.
   */
  isSameYear = (dateLeft: Date, dateRight: Date): boolean => {
    return this.overrides?.isSameYear
      ? this.overrides.isSameYear(dateLeft, dateRight)
      : isSameYear(dateLeft, dateRight);
  };

  /**
   * Returns the latest date in the given array of dates.
   *
   * @param dates The array of dates to compare.
   * @returns The latest date.
   */
  max = (dates: Date[]): Date => {
    return this.overrides?.max ? this.overrides.max(dates) : max(dates);
  };

  /**
   * Returns the earliest date in the given array of dates.
   *
   * @param dates The array of dates to compare.
   * @returns The earliest date.
   */
  min = (dates: Date[]): Date => {
    return this.overrides?.min ? this.overrides.min(dates) : min(dates);
  };

  /**
   * Sets the month of the given date.
   *
   * @param date The date to set the month on.
   * @param month The month to set (0-11).
   * @returns The new date with the month set.
   */
  setMonth = (date: Date, month: number): Date => {
    return this.overrides?.setMonth
      ? this.overrides.setMonth(date, month)
      : setMonth(date, month);
  };

  /**
   * Sets the year of the given date.
   *
   * @param date The date to set the year on.
   * @param year The year to set.
   * @returns The new date with the year set.
   */
  setYear = (date: Date, year: number): Date => {
    return this.overrides?.setYear
      ? this.overrides.setYear(date, year)
      : setYear(date, year);
  };

  /**
   * Returns the start of the broadcast week for the given date.
   *
   * @param date The original date.
   * @returns The start of the broadcast week.
   */
  startOfBroadcastWeek = (date: Date, _dateLib: DateLib): Date => {
    return this.overrides?.startOfBroadcastWeek
      ? this.overrides.startOfBroadcastWeek(date, this)
      : startOfBroadcastWeek(date, this);
  };

  /**
   * Returns the start of the day for the given date.
   *
   * @param date The original date.
   * @returns The start of the day.
   */
  startOfDay = (date: Date): Date => {
    return this.overrides?.startOfDay
      ? this.overrides.startOfDay(date)
      : startOfDay(date);
  };

  /**
   * Returns the start of the ISO week for the given date.
   *
   * @param date The original date.
   * @returns The start of the ISO week.
   */
  startOfISOWeek = (date: Date): Date => {
    return this.overrides?.startOfISOWeek
      ? this.overrides.startOfISOWeek(date)
      : startOfISOWeek(date);
  };

  /**
   * Returns the start of the month for the given date.
   *
   * @param date The original date.
   * @returns The start of the month.
   */
  startOfMonth = (date: Date): Date => {
    return this.overrides?.startOfMonth
      ? this.overrides.startOfMonth(date)
      : startOfMonth(date);
  };

  /**
   * Returns the start of the week for the given date.
   *
   * @param date The original date.
   * @returns The start of the week.
   */
  startOfWeek = (date: Date, _options?: StartOfWeekOptions): Date => {
    return this.overrides?.startOfWeek
      ? this.overrides.startOfWeek(date, this.options)
      : startOfWeek(date, this.options);
  };

  /**
   * Returns the start of the year for the given date.
   *
   * @param date The original date.
   * @returns The start of the year.
   */
  startOfYear = (date: Date): Date => {
    return this.overrides?.startOfYear
      ? this.overrides.startOfYear(date)
      : startOfYear(date);
  };
}
/** The default locale (English). */
export { enUS as defaultLocale } from "../locale/en-US.js";

/**
 * The default date library with English locale.
 *
 * @since 9.2.0
 */
export const defaultDateLib = new DateLib();
