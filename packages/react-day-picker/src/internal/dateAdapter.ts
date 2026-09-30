import type { DateLib } from "../classes/DateLib.js";

/**
 * Internal boundary for calendar date operations.
 *
 * `react-day-picker` still exposes `Date` everywhere. This adapter keeps the
 * implementation from reaching directly for native `Date` methods in core
 * algorithms, so a future package can provide the same operations for another
 * date type without changing the public API of this package.
 */
export type DateAdapter<TDate> = {
  /**
   * Preserves DayPicker's matcher/type-guard behavior for the active date
   * implementation.
   */
  isDate: (value: unknown) => value is TDate;
  /** Compares two dates at DayPicker's selected-day granularity. */
  isSameDay: (dateLeft: TDate, dateRight: TDate) => boolean;
  /** Compares two dates at displayed-month granularity. */
  isSameMonth: (dateLeft: TDate, dateRight: TDate) => boolean;
  /** Returns whether a date falls before another date in calendar logic. */
  isBefore: (date: TDate, dateToCompare: TDate) => boolean;
  /** Returns whether a date falls after another date in calendar logic. */
  isAfter: (date: TDate, dateToCompare: TDate) => boolean;
  /**
   * Orders dates for navigation clamps and boundary filtering.
   *
   * The return value follows `Array.prototype.sort` comparator semantics.
   */
  compare: (dateLeft: TDate, dateRight: TDate) => number;
  /**
   * Stable numeric key for memo dependencies.
   *
   * The `Date` adapter must keep this equivalent to `date.getTime()` so the
   * refactor does not change existing rerender behavior.
   */
  timeKey: (date: TDate) => number;
  /** Stable calendar-day id used by `CalendarDay` keys and data attributes. */
  dayKey: (date: TDate) => string;
  /** Stable calendar-month id used by `CalendarDay` keys and data attributes. */
  monthKey: (date: TDate) => string;
  /** Adds calendar days using the active date implementation. */
  addDays: (date: TDate, amount: number) => TDate;
  /** Adds calendar months using the active date implementation. */
  addMonths: (date: TDate, amount: number) => TDate;
  /** Normalizes a date to the first day of its month. */
  startOfMonth: (date: TDate) => TDate;
  /** Normalizes a date to the last day of its month. */
  endOfMonth: (date: TDate) => TDate;
  /** Returns the weekday number used by DayPicker matchers and week helpers. */
  getDay: (date: TDate) => number;
  /** Returns the month index used by dropdown values. */
  getMonth: (date: TDate) => number;
  /** Returns the year used by dropdown and caption helpers. */
  getYear: (date: TDate) => number;
  /** Formats dates through the active date implementation. */
  format: (date: TDate, formatStr: string) => string;
};

/**
 * Creates the current `Date`-backed adapter from `DateLib`.
 *
 * The adapter deliberately delegates to `DateLib` so custom `dateLib`
 * overrides, timezone handling, and `TZDate` behavior remain the source of
 * truth while internals move behind a future-ready boundary.
 */
export function createDateAdapter(dateLib: DateLib): DateAdapter<Date> {
  return {
    isDate: dateLib.isDate,
    isSameDay: dateLib.isSameDay,
    isSameMonth: dateLib.isSameMonth,
    isBefore: dateLib.isBefore,
    isAfter: dateLib.isAfter,
    compare: (dateLeft, dateRight) => dateLeft.getTime() - dateRight.getTime(),
    timeKey: (date) => date.getTime(),
    dayKey: (date) => dateLib.format(date, "yyyy-MM-dd"),
    monthKey: (date) => dateLib.format(date, "yyyy-MM"),
    addDays: dateLib.addDays,
    addMonths: dateLib.addMonths,
    startOfMonth: dateLib.startOfMonth,
    endOfMonth: dateLib.endOfMonth,
    getDay: (date) => date.getDay(),
    getMonth: dateLib.getMonth,
    getYear: dateLib.getYear,
    format: dateLib.format,
  };
}
