import { TZDate } from "@date-fns/tz";
import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  eachMonthOfInterval,
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
  startOfYear
} from "date-fns";
import type {
  EndOfWeekOptions,
  StartOfWeekOptions,
  FormatOptions as DateFnsFormatOptions,
  GetWeekOptions,
  Interval
} from "date-fns";
import type { Locale } from "date-fns/locale";
import { enUS } from "date-fns/locale/en-US";

import { endOfBroadcastWeek } from "../helpers/endOfBroadcastWeek.js";
import { startOfBroadcastWeek } from "../helpers/startOfBroadcastWeek.js";
import { Numerals } from "../types/shared.js";

export type { Locale } from "date-fns/locale";
export type { Month as DateFnsMonth } from "date-fns";

/**
 * @ignore
 * @deprecated Use {@link DateLibOptions} instead.
 */
export type FormatOptions = DateLibOptions;
/**
 * @ignore
 * @deprecated Use {@link DateLibOptions} instead.
 */
export type LabelOptions = DateLibOptions;

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
  locale?: Locale;
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
 * A wrapper class around [date-fns](http://date-fns.org) sharing the same
 * options.
 *
 * @since 9.2.0
 * @example
 *   const dateLib = new DateLib({ locale: es });
 *   const newDate = dateLib.addDays(new Date(), 5);
 */
export class DateLib {
  /** The options for the date library. */
  readonly options: DateLibOptions;

  /** Overrides for the date library functions. */
  readonly overrides?: Partial<typeof DateLib.prototype>;

  /**
   * Creates an instance of DateLib.
   *
   * @param options The options for the date library.
   * @param overrides Overrides for the date library functions.
   */
  constructor(
    options?: DateLibOptions,
    overrides?: Partial<typeof DateLib.prototype>
  ) {
    this.options = { locale: enUS, ...options };
    this.overrides = overrides;
  }

  /**
   * Generate digit map dynamically using Intl.NumberFormat.
   *
   * @since 9.5.0
   */
  private getDigitMap(): Record<string, string> {
    const { numerals = "latn" } = this.options;

    // Use Intl.NumberFormat to create a formatter with the specified numbering system
    const formatter = new Intl.NumberFormat("en-US", {
      numberingSystem: numerals
    });

    // Map Arabic digits (0-9) to the target numerals
    const digitMap: Record<string, string> = {};
    for (let i = 0; i < 10; i++) {
      digitMap[i.toString()] = formatter.format(i);
    }

    return digitMap;
  }

  /**
   * Replace Arabic digits with the target numbering system digits.
   *
   * @since 9.5.0
   */
  private replaceDigits(input: string): string {
    const digitMap = this.getDigitMap();
    return input.replace(/\d/g, (digit) => digitMap[digit] || digit);
  }

  /**
   * Format number using the custom numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number.
   */
  formatNumber(value: number): string {
    return this.replaceDigits(value.toString());
  }

  /**
   * Reference to the built-in Date constructor.
   *
   * @deprecated Use `newDate()` or `today()`.
   */
  Date: typeof Date = Date;

  /**
   * Creates a new date object to the today's date.
   *
   * @since 9.5.0
   * @returns The new date object.
   */
  today = (): Date => {
    if (this.overrides?.today) {
      return this.overrides.today();
    }
    if (this.options.timeZone) {
      return TZDate.tz(this.options.timeZone);
    }
    return new this.Date();
  };

  /**
   * Creates a new date object with the specified year, month and date.
   *
   * @since 9.5.0
   * @param year The year.
   * @param monthIndex The month (0-11).
   * @param date The day of the month.
   * @returns The new date object.
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
    return this.overrides?.addDays?.(date, amount) ?? addDays(date, amount);
  };

  /**
   * Adds the specified number of months to the given date.
   *
   * @param date The date to add months to.
   * @param amount The number of months to add.
   * @returns The new date with the months added.
   */
  addMonths = (date: Date, amount: number): Date => {
    return this.overrides?.addMonths?.(date, amount) ?? addMonths(date, amount);
  };

  /**
   * Adds the specified number of weeks to the given date.
   *
   * @param date The date to add weeks to.
   * @param amount The number of weeks to add.
   * @returns The new date with the weeks added.
   */
  addWeeks = (date: Date, amount: number): Date => {
    return this.overrides?.addWeeks?.(date, amount) ?? addWeeks(date, amount);
  };

  /**
   * Adds the specified number of years to the given date.
   *
   * @param date The date to add years to.
   * @param amount The number of years to add.
   * @returns The new date with the years added.
   */
  addYears = (date: Date, amount: number): Date => {
    return this.overrides?.addYears?.(date, amount) ?? addYears(date, amount);
  };

  /**
   * Returns the number of calendar days between the given dates.
   *
   * @param dateLeft The later date.
   * @param dateRight The earlier date.
   * @returns The number of calendar days between the dates.
   */
  differenceInCalendarDays = (dateLeft: Date, dateRight: Date): number => {
    return (
      this.overrides?.differenceInCalendarDays?.(dateLeft, dateRight) ??
      differenceInCalendarDays(dateLeft, dateRight)
    );
  };

  /**
   * Returns the number of calendar months between the given dates.
   *
   * @param dateLeft The later date.
   * @param dateRight The earlier date.
   * @returns The number of calendar months between the dates.
   */
  differenceInCalendarMonths = (dateLeft: Date, dateRight: Date): number => {
    return (
      this.overrides?.differenceInCalendarMonths?.(dateLeft, dateRight) ??
      differenceInCalendarMonths(dateLeft, dateRight)
    );
  };

  /**
   * Returns the months between the given dates.
   *
   * @param interval The interval to get the months for.
   */
  eachMonthOfInterval = (interval: Interval<Date>): Date[] => {
    return (
      this.overrides?.eachMonthOfInterval?.(interval) ??
      eachMonthOfInterval(interval)
    );
  };

  /**
   * Returns the end of the broadcast week for the given date.
   *
   * @param date The original date.
   * @returns The end of the broadcast week.
   */
  endOfBroadcastWeek = (date: Date, dateLib?: DateLib): Date => {
    return (
      this.overrides?.endOfBroadcastWeek?.(date, dateLib) ??
      endOfBroadcastWeek(date, this)
    );
  };

  /**
   * Returns the end of the ISO week for the given date.
   *
   * @param date The original date.
   * @returns The end of the ISO week.
   */
  endOfISOWeek = (date: Date): Date => {
    return this.overrides?.endOfISOWeek?.(date) ?? endOfISOWeek(date);
  };

  /**
   * Returns the end of the month for the given date.
   *
   * @param date The original date.
   * @returns The end of the month.
   */
  endOfMonth = (date: Date): Date => {
    return this.overrides?.endOfMonth?.(date) ?? endOfMonth(date);
  };

  /**
   * Returns the end of the week for the given date.
   *
   * @param date The original date.
   * @returns The end of the week.
   */
  endOfWeek = (date: Date, options?: EndOfWeekOptions<Date>): Date => {
    return (
      this.overrides?.endOfWeek?.(date, options ?? this.options) ??
      endOfWeek(date, options ?? this.options)
    );
  };

  /**
   * Returns the end of the year for the given date.
   *
   * @param date The original date.
   * @returns The end of the year.
   */
  endOfYear = (date: Date): Date => {
    return this.overrides?.endOfYear?.(date) ?? endOfYear(date);
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
    options?: DateFnsFormatOptions
  ): string => {
    const formatted =
      this.overrides?.format?.(date, formatStr, options ?? this.options) ??
      format(date, formatStr, options ?? this.options);

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
    return this.overrides?.getISOWeek?.(date) ?? getISOWeek(date);
  };

  /**
   * Returns the month of the given date.
   *
   * @param date The date to get the month for.
   * @returns The month.
   */
  getMonth = (date: Date): number => {
    return this.overrides?.getMonth?.(date) ?? getMonth(date);
  };

  /**
   * Returns the year of the given date.
   *
   * @param date The date to get the year for.
   * @returns The year.
   */
  getYear = (date: Date): number => {
    return this.overrides?.getYear?.(date) ?? getYear(date);
  };

  /**
   * Returns the local week number for the given date.
   *
   * @param date The date to get the week number for.
   * @returns The week number.
   */
  getWeek = (date: Date, options?: GetWeekOptions): number => {
    return (
      this.overrides?.getWeek?.(date, options ?? this.options) ??
      getWeek(date, options ?? this.options)
    );
  };

  /**
   * Checks if the first date is after the second date.
   *
   * @param date The date to compare.
   * @param dateToCompare The date to compare with.
   * @returns True if the first date is after the second date.
   */
  isAfter = (date: Date, dateToCompare: Date): boolean => {
    return (
      this.overrides?.isAfter?.(date, dateToCompare) ??
      isAfter(date, dateToCompare)
    );
  };

  /**
   * Checks if the first date is before the second date.
   *
   * @param date The date to compare.
   * @param dateToCompare The date to compare with.
   * @returns True if the first date is before the second date.
   */
  isBefore = (date: Date, dateToCompare: Date): boolean => {
    return (
      this.overrides?.isBefore?.(date, dateToCompare) ??
      isBefore(date, dateToCompare)
    );
  };

  /**
   * Checks if the given value is a Date object.
   *
   * @param value The value to check.
   * @returns True if the value is a Date object.
   */
  isDate: (value: unknown) => value is Date = (value): value is Date => {
    return this.overrides?.isDate?.(value) ?? isDate(value);
  };

  /**
   * Checks if the given dates are on the same day.
   *
   * @param dateLeft The first date to compare.
   * @param dateRight The second date to compare.
   * @returns True if the dates are on the same day.
   */
  isSameDay = (dateLeft: Date, dateRight: Date): boolean => {
    return (
      this.overrides?.isSameDay?.(dateLeft, dateRight) ??
      isSameDay(dateLeft, dateRight)
    );
  };

  /**
   * Checks if the given dates are in the same month.
   *
   * @param dateLeft The first date to compare.
   * @param dateRight The second date to compare.
   * @returns True if the dates are in the same month.
   */
  isSameMonth = (dateLeft: Date, dateRight: Date): boolean => {
    return (
      this.overrides?.isSameMonth?.(dateLeft, dateRight) ??
      isSameMonth(dateLeft, dateRight)
    );
  };

  /**
   * Checks if the given dates are in the same year.
   *
   * @param dateLeft The first date to compare.
   * @param dateRight The second date to compare.
   * @returns True if the dates are in the same year.
   */
  isSameYear = (dateLeft: Date, dateRight: Date): boolean => {
    return (
      this.overrides?.isSameYear?.(dateLeft, dateRight) ??
      isSameYear(dateLeft, dateRight)
    );
  };

  /**
   * Returns the latest date in the given array of dates.
   *
   * @param dates The array of dates to compare.
   * @returns The latest date.
   */
  max = (dates: Date[]): Date => {
    return this.overrides?.max?.(dates) ?? max(dates);
  };

  /**
   * Returns the earliest date in the given array of dates.
   *
   * @param dates The array of dates to compare.
   * @returns The earliest date.
   */
  min = (dates: Date[]): Date => {
    return this.overrides?.min?.(dates) ?? min(dates);
  };

  /**
   * Sets the month of the given date.
   *
   * @param date The date to set the month on.
   * @param month The month to set (0-11).
   * @returns The new date with the month set.
   */
  setMonth = (date: Date, month: number): Date => {
    return this.overrides?.setMonth?.(date, month) ?? setMonth(date, month);
  };

  /**
   * Sets the year of the given date.
   *
   * @param date The date to set the year on.
   * @param year The year to set.
   * @returns The new date with the year set.
   */
  setYear = (date: Date, year: number): Date => {
    return this.overrides?.setYear?.(date, year) ?? setYear(date, year);
  };

  /**
   * Returns the start of the broadcast week for the given date.
   *
   * @param date The original date.
   * @returns The start of the broadcast week.
   */
  startOfBroadcastWeek = (date: Date, dateLib?: DateLib): Date => {
    return (
      this.overrides?.startOfBroadcastWeek?.(date, dateLib ?? this) ??
      startOfBroadcastWeek(date, dateLib ?? this)
    );
  };

  /**
   * Returns the start of the day for the given date.
   *
   * @param date The original date.
   * @returns The start of the day.
   */
  startOfDay = (date: Date): Date => {
    return this.overrides?.startOfDay?.(date) ?? startOfDay(date);
  };

  /**
   * Returns the start of the ISO week for the given date.
   *
   * @param date The original date.
   * @returns The start of the ISO week.
   */
  startOfISOWeek = (date: Date): Date => {
    return this.overrides?.startOfISOWeek?.(date) ?? startOfISOWeek(date);
  };

  /**
   * Returns the start of the month for the given date.
   *
   * @param date The original date.
   * @returns The start of the month.
   */
  startOfMonth = (date: Date): Date => {
    return this.overrides?.startOfMonth?.(date) ?? startOfMonth(date);
  };

  /**
   * Returns the start of the week for the given date.
   *
   * @param date The original date.
   * @returns The start of the week.
   */
  startOfWeek = (date: Date): Date => {
    return (
      this.overrides?.startOfWeek?.(date) ?? startOfWeek(date, this.options)
    );
  };

  /**
   * Returns the start of the year for the given date.
   *
   * @param date The original date.
   * @returns The start of the year.
   */
  startOfYear = (date: Date): Date => {
    return this.overrides?.startOfYear?.(date) ?? startOfYear(date);
  };
}
/** The default locale (English). */
export { enUS as defaultLocale } from "date-fns/locale/en-US";

/**
 * The default date library with English locale.
 *
 * @since 9.2.0
 */
export const defaultDateLib = new DateLib();

/**
 * @ignore
 * @deprecated Use `defaultDateLib`.
 */
export const dateLib = defaultDateLib;
