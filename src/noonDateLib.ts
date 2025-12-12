import { TZDate } from "@date-fns/tz";
import type { EndOfWeekOptions, Locale, StartOfWeekOptions } from "date-fns";
import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  startOfDay as startOfDayFn,
} from "date-fns";

import type { DateLib } from "./classes/DateLib.js";

export interface CreateNoonDateLibOverridesOptions {
  timeZone?: string;
  weekStartsOn?: number;
  locale?: Locale;
}

/**
 * Creates `dateLib` overrides that keep all calendar math at noon in the target
 * time zone. This avoids second-level offset changes (e.g., historical zones
 * with +03:41:12) from pushing dates backward across midnight.
 */
export function createNoonDateLibOverrides(
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

  return {
    today: () => normalize(timeZone ? TZDate.tz(timeZone) : new Date()),
    newDate: (year: number, monthIndex: number, date: number) =>
      timeZone
        ? new TZDate(year, monthIndex, date, 12, 0, 0, timeZone)
        : new Date(year, monthIndex, date),

    startOfDay: (date) => {
      if (!timeZone) return startOfDayFn(date);
      const base = normalize(date);
      return new TZDate(
        base.getFullYear(),
        base.getMonth(),
        base.getDate(),
        12,
        0,
        0,
        timeZone,
      );
    },
    startOfWeek: (date, options?: StartOfWeekOptions) => {
      const base = normalize(date);
      const weekStartsOnValue = options?.weekStartsOn ?? fallbackWeekStartsOn;
      const diff = (base.getDay() - weekStartsOnValue + 7) % 7;
      return normalize(
        new TZDate(
          base.getFullYear(),
          base.getMonth(),
          base.getDate() - diff,
          12,
          0,
          0,
          timeZone,
        ),
      );
    },
    startOfISOWeek: (date) => {
      const base = normalize(date);
      const diff = (base.getDay() - 1 + 7) % 7;
      return normalize(
        new TZDate(
          base.getFullYear(),
          base.getMonth(),
          base.getDate() - diff,
          12,
          0,
          0,
          timeZone,
        ),
      );
    },
    startOfMonth: (date) =>
      normalize(
        new TZDate(date.getFullYear(), date.getMonth(), 1, 12, 0, 0, timeZone),
      ),
    startOfYear: (date) =>
      normalize(new TZDate(date.getFullYear(), 0, 1, 12, 0, 0, timeZone)),

    endOfWeek: (date, options?: EndOfWeekOptions) => {
      const base = normalize(date);
      const weekStartsOnValue = options?.weekStartsOn ?? fallbackWeekStartsOn;
      const endDow = (weekStartsOnValue + 6) % 7;
      const diff = (endDow - base.getDay() + 7) % 7;
      return normalize(
        new TZDate(
          base.getFullYear(),
          base.getMonth(),
          base.getDate() + diff,
          12,
          0,
          0,
          timeZone,
        ),
      );
    },
    endOfISOWeek: (date) => {
      const base = normalize(date);
      const diff = (7 - base.getDay()) % 7;
      return normalize(
        new TZDate(
          base.getFullYear(),
          base.getMonth(),
          base.getDate() + diff,
          12,
          0,
          0,
          timeZone,
        ),
      );
    },
    endOfMonth: (date) =>
      normalize(
        new TZDate(
          date.getFullYear(),
          date.getMonth() + 1,
          0,
          12,
          0,
          0,
          timeZone,
        ),
      ),
    endOfYear: (date) =>
      normalize(new TZDate(date.getFullYear(), 11, 31, 12, 0, 0, timeZone)),

    eachMonthOfInterval: (interval) => {
      const start = normalize(interval.start);
      const end = normalize(interval.end);
      const result: Date[] = [];
      let y = start.getFullYear();
      let m = start.getMonth();
      const endKey = end.getFullYear() * 12 + end.getMonth();
      while (y * 12 + m <= endKey) {
        result.push(new TZDate(y, m, 1, 12, 0, 0, timeZone));
        m++;
        if (m > 11) {
          m = 0;
          y++;
        }
      }
      return result;
    },

    addDays: (date, amount) => normalize(addDays(normalize(date), amount)),
    addWeeks: (date, amount) => normalize(addWeeks(normalize(date), amount)),
    addMonths: (date, amount) => normalize(addMonths(normalize(date), amount)),
    addYears: (date, amount) => normalize(addYears(normalize(date), amount)),

    eachYearOfInterval: (interval) => {
      const start = normalize(interval.start);
      const end = normalize(interval.end);
      const years: Date[] = [];
      for (let y = start.getFullYear(); y <= end.getFullYear(); y++) {
        years.push(new TZDate(y, 0, 1, 12, 0, 0, timeZone));
      }
      return years;
    },

    getWeek: (date) => {
      const base = normalize(date);
      const weekStartsOnValue = fallbackWeekStartsOn;
      const diff = (base.getDay() - weekStartsOnValue + 7) % 7;
      const start = new TZDate(
        base.getFullYear(),
        base.getMonth(),
        base.getDate() - diff,
        12,
        0,
        0,
        timeZone,
      );
      return start.getTime();
    },
  };
}
