import { TZDate } from "@date-fns/tz";
import type { EndOfWeekOptions, StartOfWeekOptions } from "date-fns";
import {
  addDays as addDaysJalali,
  addMonths as addMonthsJalali,
  addWeeks as addWeeksJalali,
  addYears as addYearsJalali,
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
import type { CreateNoonDateLibOverridesOptions } from "./noonDateLib.js";

/**
 * Jalali-aware version of {@link createNoonDateLibOverrides}.
 *
 * Keeps all calendar math at noon in the target time zone while deferring to
 * `date-fns-jalali` for calendar logic.
 */
export function createJalaliNoonDateLibOverrides(
  options: CreateNoonDateLibOverridesOptions = {},
): Partial<typeof DateLib.prototype> {
  const { timeZone, weekStartsOn, locale } = options;
  const fallbackWeekStartsOn =
    weekStartsOn ?? locale?.options?.weekStartsOn ?? 0;

  const normalize = (date: Date | number | string) => {
    const normalizedDate =
      typeof date === "number" || typeof date === "string"
        ? new Date(date)
        : date;
    if (!timeZone || Number.isNaN(+normalizedDate)) return normalizedDate;
    const tzDate = new TZDate(
      normalizedDate.getFullYear(),
      normalizedDate.getMonth(),
      normalizedDate.getDate(),
      12,
      0,
      0,
      timeZone,
    );
    return new Date(tzDate.getTime());
  };

  return {
    today: () => normalize(timeZone ? TZDate.tz(timeZone) : new Date()),
    newDate: (year: number, monthIndex: number, date: number) =>
      timeZone
        ? new TZDate(year, monthIndex, date, 12, 0, 0, timeZone)
        : new Date(year, monthIndex, date),

    startOfDay: (date) => {
      if (!timeZone) return startOfDayJalali(date);
      const base = normalize(date);
      return normalize(startOfDayJalali(base));
    },
    startOfWeek: (date, options?: StartOfWeekOptions) => {
      const base = normalize(date);
      const weekStartsOnValue = options?.weekStartsOn ?? fallbackWeekStartsOn;
      return normalize(
        startOfWeekJalali(base, {
          weekStartsOn: weekStartsOnValue,
        }),
      );
    },
    startOfISOWeek: (date) => {
      const base = normalize(date);
      return normalize(startOfISOWeekJalali(base));
    },
    startOfMonth: (date) =>
      normalize(startOfMonthJalali(normalize(date))),
    startOfYear: (date) =>
      normalize(startOfYearJalali(normalize(date))),

    endOfWeek: (date, options?: EndOfWeekOptions) => {
      const base = normalize(date);
      const weekStartsOnValue = options?.weekStartsOn ?? fallbackWeekStartsOn;
      return normalize(
        endOfWeekJalali(base, {
          weekStartsOn: weekStartsOnValue,
        }),
      );
    },
    endOfISOWeek: (date) => {
      const base = normalize(date);
      return normalize(endOfISOWeekJalali(base));
    },
    endOfMonth: (date) =>
      normalize(endOfMonthJalali(normalize(date))),
    endOfYear: (date) =>
      normalize(endOfYearJalali(normalize(date))),

    eachMonthOfInterval: (interval) => {
      return eachMonthOfIntervalJalali(
        {
          start: normalize(interval.start),
          end: normalize(interval.end),
        },
        { weekStartsOn: fallbackWeekStartsOn },
      ).map((date) => normalize(date));
    },

    addDays: (date, amount) =>
      normalize(addDaysJalali(normalize(date), amount)),
    addWeeks: (date, amount) =>
      normalize(addWeeksJalali(normalize(date), amount)),
    addMonths: (date, amount) =>
      normalize(addMonthsJalali(normalize(date), amount)),
    addYears: (date, amount) =>
      normalize(addYearsJalali(normalize(date), amount)),

    eachYearOfInterval: (interval) => {
      return eachYearOfIntervalJalali({
        start: normalize(interval.start),
        end: normalize(interval.end),
      }).map((date) => normalize(date));
    },

    getWeek: (date) => {
      return getWeekJalali(normalize(date), {
        weekStartsOn: fallbackWeekStartsOn,
      });
    },
  };
}
