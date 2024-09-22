import type {
  FormatOptions as DateFnsFormatOptions,
  Locale as DateFnsLocale
} from "date-fns";
import { addDays } from "date-fns/addDays";
import { addMonths } from "date-fns/addMonths";
import { addWeeks } from "date-fns/addWeeks";
import { addYears } from "date-fns/addYears";
import { differenceInCalendarDays } from "date-fns/differenceInCalendarDays";
import { differenceInCalendarMonths } from "date-fns/differenceInCalendarMonths";
import { endOfISOWeek } from "date-fns/endOfISOWeek";
import { endOfMonth } from "date-fns/endOfMonth";
import { endOfWeek } from "date-fns/endOfWeek";
import { endOfYear } from "date-fns/endOfYear";
import { format } from "date-fns/format";
import { getISOWeek } from "date-fns/getISOWeek";
import { getWeek } from "date-fns/getWeek";
import { isAfter } from "date-fns/isAfter";
import { isBefore } from "date-fns/isBefore";
import { isDate } from "date-fns/isDate";
import { isSameDay } from "date-fns/isSameDay";
import { isSameMonth } from "date-fns/isSameMonth";
import { isSameYear } from "date-fns/isSameYear";
import { max } from "date-fns/max";
import { min } from "date-fns/min";
import { setMonth } from "date-fns/setMonth";
import { setYear } from "date-fns/setYear";
import { startOfDay } from "date-fns/startOfDay";
import { startOfISOWeek } from "date-fns/startOfISOWeek";
import { startOfMonth } from "date-fns/startOfMonth";
import { startOfWeek } from "date-fns/startOfWeek";
import { startOfYear } from "date-fns/startOfYear";

/** The options for the {@link Formatters}. */
export type FormatOptions = DateFnsFormatOptions;

/** The options for the {@link Labels}. */
export type LabelOptions = DateFnsFormatOptions;

/** The locale used within DayPicker. */
export type Locale = DateFnsLocale;

export type { Month as DateFnsMonth } from "date-fns";

/**
 * The date library used by DayPicker. It's a subset of the date-fns functions
 * plus an optional Date constructor.
 *
 * Override the default date library with the `dateLib` prop.
 */
export type DateLib = {
  /** The constructor of the date object. */
  Date?: DateConstructor | undefined;

  /** Adds the specified number of days to the given date. */
  addDays: typeof addDays;

  /** Adds the specified number of months to the given date. */
  addMonths: typeof addMonths;

  /** Adds the specified number of weeks to the given date. */
  addWeeks: typeof addWeeks;

  /** Adds the specified number of years to the given date. */
  addYears: typeof addYears;

  /** Returns the number of calendar days between the given dates. */
  differenceInCalendarDays: typeof differenceInCalendarDays;

  /** Returns the number of calendar months between the given dates. */
  differenceInCalendarMonths: typeof differenceInCalendarMonths;

  /** Returns the end of an ISO week for the given date. */
  endOfISOWeek: typeof endOfISOWeek;

  /** Returns the end of the month for the given date. */
  endOfMonth: typeof endOfMonth;

  /** Returns the end of the week for the given date. */
  endOfWeek: typeof endOfWeek;

  /** Returns the end of the year for the given date. */
  endOfYear: typeof endOfYear;

  /** Formats the given date using the specified format string. */
  format: typeof format;

  /** Returns the ISO week number for the given date. */
  getISOWeek: typeof getISOWeek;

  /** Returns the week number for the given date. */
  getWeek: typeof getWeek;

  /** Checks if the first date is after the second date. */
  isAfter: typeof isAfter;

  /** Checks if the first date is before the second date. */
  isBefore: typeof isBefore;

  /** Checks if the given value is a date. */
  isDate: typeof isDate;

  /** Checks if the given dates are the same day. */
  isSameDay: typeof isSameDay;

  /** Checks if the given dates are in the same month. */
  isSameMonth: typeof isSameMonth;

  /** Checks if the given dates are in the same year. */
  isSameYear: typeof isSameYear;

  /** Returns the maximum of the given dates. */
  max: typeof max;

  /** Returns the minimum of the given dates. */
  min: typeof min;

  /** Sets the month for the given date. */
  setMonth: typeof setMonth;

  /** Sets the year for the given date. */
  setYear: typeof setYear;

  /** Returns the start of the day for the given date. */
  startOfDay: typeof startOfDay;

  /** Returns the start of an ISO week for the given date. */
  startOfISOWeek: typeof startOfISOWeek;

  /** Returns the start of the month for the given date. */
  startOfMonth: typeof startOfMonth;

  /** Returns the start of the week for the given date. */
  startOfWeek: typeof startOfWeek;

  /** Returns the start of the year for the given date. */
  startOfYear: typeof startOfYear;
};

/**
 * The default date library to use with the date picker.
 *
 * @private
 * @internal
 */
export const dateLib = {
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
};
