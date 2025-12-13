import { TZDate } from "@date-fns/tz";
import type { EndOfWeekOptions, StartOfWeekOptions } from "date-fns";
import {
  addDays as addDaysJalali,
  addMonths as addMonthsJalali,
  addWeeks as addWeeksJalali,
  addYears as addYearsJalali,
  differenceInCalendarDays as differenceInCalendarDaysJalali,
  differenceInCalendarMonths as differenceInCalendarMonthsJalali,
  eachMonthOfInterval as eachMonthOfIntervalJalali,
  eachYearOfInterval as eachYearOfIntervalJalali,
  endOfISOWeek as endOfISOWeekJalali,
  endOfMonth as endOfMonthJalali,
  endOfWeek as endOfWeekJalali,
  endOfYear as endOfYearJalali,
  getWeek as getWeekJalali,
  startOfDay as startOfDayJalali,
  startOfISOWeek as startOfISOWeekJalali,
  startOfMonth as startOfMonthJalali,
  startOfWeek as startOfWeekJalali,
  startOfYear as startOfYearJalali,
} from "date-fns-jalali";

import type { DateLib } from "./classes/DateLib.js";
import type { CreateNoonOverridesOptions } from "./noonDateLib.js";

/**
 * Jalali-aware version of {@link createNoonDateLibOverrides}.
 *
 * Keeps all calendar math at noon in the target time zone while deferring to
 * `date-fns-jalali` for calendar logic.
 */
export function createJalaliNoonOverrides(
  timeZone: string,
  options: CreateNoonOverridesOptions = {},
): Partial<typeof DateLib.prototype> {
  const { weekStartsOn, locale } = options;
  type WeekStartsOn = NonNullable<StartOfWeekOptions["weekStartsOn"]>;
  const fallbackWeekStartsOn: WeekStartsOn = (weekStartsOn ??
    locale?.options?.weekStartsOn ??
    6) as WeekStartsOn;

  type SupportedDate = Date | number | string | TZDate;

  const toNoonTZDate = (date: SupportedDate): TZDate => {
    const normalizedDate =
      typeof date === "number" || typeof date === "string"
        ? new Date(date)
        : date;
    return new TZDate(
      normalizedDate.getFullYear(),
      normalizedDate.getMonth(),
      normalizedDate.getDate(),
      12,
      0,
      0,
      timeZone,
    );
  };

  const toNoonDate = (date: SupportedDate): TZDate => {
    return toNoonTZDate(date);
  };

  // Represent the target-zone calendar date in the host zone so date-fns-jalali
  // (which is not time-zone aware) can operate on stable wall times.
  const toCalendarDate = (date: SupportedDate): Date => {
    const zoned = toNoonTZDate(date);
    return new Date(
      zoned.getFullYear(),
      zoned.getMonth(),
      zoned.getDate(),
      12,
      0,
      0,
      0,
    );
  };

  return {
    today: () => toNoonTZDate(TZDate.tz(timeZone)),
    newDate: (year: number, monthIndex: number, date: number) =>
      new TZDate(year, monthIndex, date, 12, 0, 0, timeZone),

    startOfDay: (date) => {
      return toNoonDate(date);
    },
    startOfWeek: (date, options?: StartOfWeekOptions) => {
      const weekStartsOnValue = (options?.weekStartsOn ??
        fallbackWeekStartsOn) as WeekStartsOn;
      const start = startOfWeekJalali(toCalendarDate(date), {
        weekStartsOn: weekStartsOnValue,
      });
      return toNoonTZDate(start);
    },
    startOfISOWeek: (date) => {
      const start = startOfISOWeekJalali(toCalendarDate(date));
      return toNoonTZDate(start);
    },
    startOfMonth: (date) => {
      const start = startOfMonthJalali(toCalendarDate(date));
      return toNoonTZDate(start);
    },
    startOfYear: (date) => {
      const start = startOfYearJalali(toCalendarDate(date));
      return toNoonTZDate(start);
    },

    endOfWeek: (date, options?: EndOfWeekOptions) => {
      const weekStartsOnValue = (options?.weekStartsOn ??
        fallbackWeekStartsOn) as WeekStartsOn;
      const end = endOfWeekJalali(toCalendarDate(date), {
        weekStartsOn: weekStartsOnValue,
      });
      return toNoonTZDate(end);
    },
    endOfISOWeek: (date) => {
      const end = endOfISOWeekJalali(toCalendarDate(date));
      return toNoonTZDate(end);
    },
    endOfMonth: (date) => {
      const end = endOfMonthJalali(toCalendarDate(date));
      return toNoonTZDate(end);
    },
    endOfYear: (date) => {
      const end = endOfYearJalali(toCalendarDate(date));
      return toNoonTZDate(end);
    },

    eachMonthOfInterval: (interval) => {
      return eachMonthOfIntervalJalali({
        start: toCalendarDate(interval.start),
        end: toCalendarDate(interval.end),
      }).map((date) => toNoonTZDate(date));
    },

    addDays: (date, amount) =>
      toNoonTZDate(addDaysJalali(toCalendarDate(date), amount)),
    addWeeks: (date, amount) =>
      toNoonTZDate(addWeeksJalali(toCalendarDate(date), amount)),
    addMonths: (date, amount) =>
      toNoonTZDate(addMonthsJalali(toCalendarDate(date), amount)),
    addYears: (date, amount) =>
      toNoonTZDate(addYearsJalali(toCalendarDate(date), amount)),

    eachYearOfInterval: (interval) => {
      return eachYearOfIntervalJalali({
        start: toCalendarDate(interval.start),
        end: toCalendarDate(interval.end),
      }).map((date) => toNoonTZDate(date));
    },

    getWeek: (date, options) => {
      const base = toCalendarDate(date);
      return getWeekJalali(base, {
        weekStartsOn: options?.weekStartsOn ?? fallbackWeekStartsOn,
        firstWeekContainsDate:
          options?.firstWeekContainsDate ??
          locale?.options?.firstWeekContainsDate ??
          1,
      });
    },

    differenceInCalendarDays: (dateLeft, dateRight) => {
      const left = toCalendarDate(dateLeft);
      const right = toCalendarDate(dateRight);
      return differenceInCalendarDaysJalali(left, right);
    },

    differenceInCalendarMonths: (dateLeft, dateRight) => {
      const left = toCalendarDate(dateLeft);
      const right = toCalendarDate(dateRight);
      return differenceInCalendarMonthsJalali(left, right);
    },
  };
}
