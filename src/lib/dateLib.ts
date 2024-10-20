import {
  DateArg,
  EndOfWeekOptions,
  FormatOptions,
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

export type { Locale } from "date-fns/locale";
export type { Month as DateFnsMonth } from "date-fns";

/** The options for the `DateLib` class. */
export interface DateLibOptions
  extends FormatOptions,
    StartOfWeekOptions,
    EndOfWeekOptions {
  Date?: typeof Date;
  locale?: Locale;
}

type DateFnsOverrides = Partial<typeof DateLib.prototype>;

/**
 * A wrapper around date-fns functions that can be initialized with an options
 * object to share settings across the functions. Methods can be overridden via
 * the `overrides` param.
 *
 * @example
 *   const dateLib = new DateLib({ locale: enUS });
 *   const newDate = dateLib.addDays(new Date(), 5);
 *   console.log(dateLib.format(newDate, "yyyy-MM-dd"));
 */
export class DateLib {
  /** The formatting options for the date library. */
  options: DateLibOptions;

  /** The overrides for the date library functions. */
  overrides?: DateFnsOverrides;

  /**
   * @param options - The formatting options for the date library.
   * @param overrides - Optional overrides for the date library functions.
   */
  constructor(options?: DateLibOptions, overrides?: DateFnsOverrides) {
    this.options = { locale: enUS, ...options };
    this.overrides = overrides;
  }

  Date: typeof Date = Date;

  addDays: typeof addDays = (date, amount) => {
    return this.overrides?.addDays
      ? this.overrides.addDays(date, amount)
      : addDays(date, amount);
  };

  addMonths: typeof addMonths = (date, amount) => {
    return this.overrides?.addMonths
      ? this.overrides.addMonths(date, amount)
      : addMonths(date, amount);
  };

  addWeeks: typeof addWeeks = (date, amount) => {
    return this.overrides?.addWeeks
      ? this.overrides.addWeeks(date, amount)
      : addWeeks(date, amount);
  };

  addYears: typeof addYears = (date, amount) => {
    return this.overrides?.addYears
      ? this.overrides.addYears(date, amount)
      : addYears(date, amount);
  };

  differenceInCalendarDays: typeof differenceInCalendarDays = (
    dateLeft,
    dateRight
  ) => {
    return this.overrides?.differenceInCalendarDays
      ? this.overrides.differenceInCalendarDays(dateLeft, dateRight)
      : differenceInCalendarDays(dateLeft, dateRight);
  };

  differenceInCalendarMonths: typeof differenceInCalendarMonths = (
    dateLeft,
    dateRight
  ) => {
    return this.overrides?.differenceInCalendarMonths
      ? this.overrides.differenceInCalendarMonths(dateLeft, dateRight)
      : differenceInCalendarMonths(dateLeft, dateRight);
  };

  endOfISOWeek: typeof endOfISOWeek = (date) => {
    return this.overrides?.endOfISOWeek
      ? this.overrides.endOfISOWeek(date)
      : endOfISOWeek(date);
  };

  endOfMonth: typeof endOfMonth = (date) => {
    return this.overrides?.endOfMonth
      ? this.overrides.endOfMonth(date)
      : endOfMonth(date);
  };

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

  endOfYear: typeof endOfYear = (date) => {
    return this.overrides?.endOfYear
      ? this.overrides.endOfYear(date)
      : endOfYear(date);
  };

  format: typeof format = (date, formatStr) => {
    return this.overrides?.format
      ? this.overrides.format(date, formatStr, this.options)
      : format(date, formatStr, this.options);
  };

  getISOWeek: typeof getISOWeek = (date) => {
    return this.overrides?.getISOWeek
      ? this.overrides.getISOWeek(date)
      : getISOWeek(date);
  };

  getWeek: typeof getWeek = (date) => {
    return this.overrides?.getWeek
      ? this.overrides.getWeek(date, this.options)
      : getWeek(date, this.options);
  };

  isAfter: typeof isAfter = (date, dateToCompare) => {
    return this.overrides?.isAfter
      ? this.overrides.isAfter(date, dateToCompare)
      : isAfter(date, dateToCompare);
  };

  isBefore: typeof isBefore = (date, dateToCompare) => {
    return this.overrides?.isBefore
      ? this.overrides.isBefore(date, dateToCompare)
      : isBefore(date, dateToCompare);
  };

  isDate: (value: unknown) => value is Date = (value): value is Date => {
    return this.overrides?.isDate
      ? this.overrides.isDate(value)
      : isDate(value);
  };

  isSameDay: typeof isSameDay = (dateLeft, dateRight) => {
    return this.overrides?.isSameDay
      ? this.overrides.isSameDay(dateLeft, dateRight)
      : isSameDay(dateLeft, dateRight);
  };

  isSameMonth: typeof isSameMonth = (dateLeft, dateRight) => {
    return this.overrides?.isSameMonth
      ? this.overrides.isSameMonth(dateLeft, dateRight)
      : isSameMonth(dateLeft, dateRight);
  };

  isSameYear: typeof isSameYear = (dateLeft, dateRight) => {
    return this.overrides?.isSameYear
      ? this.overrides.isSameYear(dateLeft, dateRight)
      : isSameYear(dateLeft, dateRight);
  };

  max: typeof max = (dates) => {
    return this.overrides?.max ? this.overrides.max(dates) : max(dates);
  };

  min: typeof min = (dates) => {
    return this.overrides?.min ? this.overrides.min(dates) : min(dates);
  };

  setMonth: typeof setMonth = (date, month) => {
    return this.overrides?.setMonth
      ? this.overrides.setMonth(date, month)
      : setMonth(date, month);
  };

  setYear: typeof setYear = (date, year) => {
    return this.overrides?.setYear
      ? this.overrides.setYear(date, year)
      : setYear(date, year);
  };

  startOfDay: typeof startOfDay = (date) => {
    return this.overrides?.startOfDay
      ? this.overrides.startOfDay(date)
      : startOfDay(date);
  };

  startOfISOWeek: typeof startOfISOWeek = (date) => {
    return this.overrides?.startOfISOWeek
      ? this.overrides.startOfISOWeek(date)
      : startOfISOWeek(date);
  };

  startOfMonth: typeof startOfMonth = (date) => {
    return this.overrides?.startOfMonth
      ? this.overrides.startOfMonth(date)
      : startOfMonth(date);
  };

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

  startOfYear: typeof startOfYear = (date) => {
    return this.overrides?.startOfYear
      ? this.overrides.startOfYear(date)
      : startOfYear(date);
  };
}
