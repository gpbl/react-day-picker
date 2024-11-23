import {
  DateArg,
  EndOfWeekOptions,
  FormatOptions as DateFnsFormatOptions,
  StartOfWeekOptions,
  addDays,
  addMonths,
  addWeeks,
  addYears,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  endOfISOWeek,
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  getISOWeek,
  getWeek,
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
import type { Locale } from "date-fns/locale";
import { enUS } from "date-fns/locale";

import type { PropsBase } from "../types/props.js";

export type { Locale } from "date-fns/locale";
export type { Month as DateFnsMonth } from "date-fns";

/** @deprecated Use {@link DateLibOptions} instead. */
export type FormatOptions = DateLibOptions;
/** @deprecated Use {@link DateLibOptions} instead. */
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
}

/**
 * A wrapper class around [date-fns](http://date-fns.org) sharing the same
 * options. Methods of this class can be overridden using the
 * {@link PropsBase.dateLib} prop.
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

  /** Reference to the built-in Date constructor. */
  Date: typeof Date = Date;

  /**
   * Adds the specified number of days to the given date.
   *
   * @param date The date to add days to.
   * @param amount The number of days to add.
   * @returns The new date with the days added.
   */
  addDays: typeof addDays = (date, amount) => {
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
  addMonths: typeof addMonths = (date, amount) => {
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
  addWeeks: typeof addWeeks = (date, amount) => {
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
  addYears: typeof addYears = (date, amount) => {
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
  differenceInCalendarDays: typeof differenceInCalendarDays = (
    dateLeft,
    dateRight
  ) => {
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
  differenceInCalendarMonths: typeof differenceInCalendarMonths = (
    dateLeft,
    dateRight
  ) => {
    return this.overrides?.differenceInCalendarMonths
      ? this.overrides.differenceInCalendarMonths(dateLeft, dateRight)
      : differenceInCalendarMonths(dateLeft, dateRight);
  };

  /**
   * Returns the end of the ISO week for the given date.
   *
   * @param date The original date.
   * @returns The end of the ISO week.
   */
  endOfISOWeek: typeof endOfISOWeek = (date) => {
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
  endOfMonth: typeof endOfMonth = (date) => {
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
  endOfWeek: typeof endOfWeek = <
    DateType extends Date,
    ResultDate extends Date = DateType
  >(
    date: DateArg<DateType>
  ): ResultDate => {
    return this.overrides?.endOfWeek
      ? this.overrides.endOfWeek(
          date,
          this.options as EndOfWeekOptions<ResultDate>
        )
      : endOfWeek(date, this.options as EndOfWeekOptions<ResultDate>);
  };

  /**
   * Returns the end of the year for the given date.
   *
   * @param date The original date.
   * @returns The end of the year.
   */
  endOfYear: typeof endOfYear = (date) => {
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
  format: typeof format = (date, formatStr) => {
    return this.overrides?.format
      ? this.overrides.format(date, formatStr, this.options)
      : format(date, formatStr, this.options);
  };

  /**
   * Returns the ISO week number for the given date.
   *
   * @param date The date to get the ISO week number for.
   * @returns The ISO week number.
   */
  getISOWeek: typeof getISOWeek = (date) => {
    return this.overrides?.getISOWeek
      ? this.overrides.getISOWeek(date)
      : getISOWeek(date);
  };

  /**
   * Returns the local week number for the given date.
   *
   * @param date The date to get the week number for.
   * @returns The week number.
   */
  getWeek: typeof getWeek = (date) => {
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
  isAfter: typeof isAfter = (date, dateToCompare) => {
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
  isBefore: typeof isBefore = (date, dateToCompare) => {
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
  isSameDay: typeof isSameDay = (dateLeft, dateRight) => {
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
  isSameMonth: typeof isSameMonth = (dateLeft, dateRight) => {
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
  isSameYear: typeof isSameYear = (dateLeft, dateRight) => {
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
  max: typeof max = (dates) => {
    return this.overrides?.max ? this.overrides.max(dates) : max(dates);
  };

  /**
   * Returns the earliest date in the given array of dates.
   *
   * @param dates The array of dates to compare.
   * @returns The earliest date.
   */
  min: typeof min = (dates) => {
    return this.overrides?.min ? this.overrides.min(dates) : min(dates);
  };

  /**
   * Sets the month of the given date.
   *
   * @param date The date to set the month on.
   * @param month The month to set (0-11).
   * @returns The new date with the month set.
   */
  setMonth: typeof setMonth = (date, month) => {
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
  setYear: typeof setYear = (date, year) => {
    return this.overrides?.setYear
      ? this.overrides.setYear(date, year)
      : setYear(date, year);
  };

  /**
   * Returns the start of the day for the given date.
   *
   * @param date The original date.
   * @returns The start of the day.
   */
  startOfDay: typeof startOfDay = (date) => {
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
  startOfISOWeek: typeof startOfISOWeek = (date) => {
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
  startOfMonth: typeof startOfMonth = (date) => {
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
  startOfWeek: typeof startOfWeek = <
    DateType extends Date,
    ResultDate extends Date = DateType
  >(
    date: DateArg<DateType>
  ): ResultDate => {
    return this.overrides?.startOfWeek
      ? this.overrides.startOfWeek(
          date,
          this.options as StartOfWeekOptions<ResultDate>
        )
      : startOfWeek(date, this.options as StartOfWeekOptions<ResultDate>);
  };

  /**
   * Returns the start of the year for the given date.
   *
   * @param date The original date.
   * @returns The start of the year.
   */
  startOfYear: typeof startOfYear = (date) => {
    return this.overrides?.startOfYear
      ? this.overrides.startOfYear(date)
      : startOfYear(date);
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

/** @deprecated Use `defaultDateLib`. */
export const dateLib = defaultDateLib;
