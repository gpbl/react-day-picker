import { TZDate } from "@date-fns/tz";
import type { EndOfWeekOptions, Locale, StartOfWeekOptions } from "date-fns";
import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  differenceInCalendarDays as differenceInCalendarDaysFn,
  differenceInCalendarMonths as differenceInCalendarMonthsFn,
  getWeek as getWeekFn,
  startOfDay as startOfDayFn,
} from "date-fns";
import type { DateLib } from "./classes/DateLib.js";

export interface CreateNoonOverridesOptions {
  weekStartsOn?: number;
  locale?: Locale;
}

/**
 * Creates `dateLib` overrides that keep all calendar math at noon in the target
 * time zone. This avoids second-level offset changes (e.g., historical zones
 * with +03:41:12) from pushing dates backward across midnight.
 */
export function createNoonOverrides(
  timeZone: string,
  options: CreateNoonOverridesOptions = {},
): Partial<typeof DateLib.prototype> {
  const { weekStartsOn, locale } = options;
  type WeekStartsOn = NonNullable<StartOfWeekOptions["weekStartsOn"]>;
  const fallbackWeekStartsOn: WeekStartsOn = (weekStartsOn ??
    locale?.options?.weekStartsOn ??
    0) as WeekStartsOn;

  const toNoonDate = (date: Date | number | string) => {
    // Always normalize inputs (including TZDate) to a plain Date at noon in the
    // target zone. date-fns coerces TZDate to Date internally, so we rebuild the
    // instant here to keep return types consistent and avoid leaking TZDate.
    const normalizedDate =
      typeof date === "number" || typeof date === "string"
        ? new Date(date)
        : date;
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
    today: () => {
      return toNoonDate(TZDate.tz(timeZone));
    },

    newDate: (year: number, monthIndex: number, date: number) => {
      return new TZDate(year, monthIndex, date, 12, 0, 0, timeZone);
    },

    startOfDay: (date) => {
      const base = toNoonDate(date);
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
      const base = toNoonDate(date);
      const weekStartsOnValue = (options?.weekStartsOn ??
        fallbackWeekStartsOn) as WeekStartsOn;
      const diff = (base.getDay() - weekStartsOnValue + 7) % 7;
      return toNoonDate(
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
      const base = toNoonDate(date);
      const diff = (base.getDay() - 1 + 7) % 7;
      return toNoonDate(
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

    startOfMonth: (date) => {
      return toNoonDate(
        new TZDate(date.getFullYear(), date.getMonth(), 1, 12, 0, 0, timeZone),
      );
    },

    startOfYear: (date) => {
      return toNoonDate(
        new TZDate(date.getFullYear(), 0, 1, 12, 0, 0, timeZone),
      );
    },

    endOfWeek: (date, options?: EndOfWeekOptions) => {
      const base = toNoonDate(date);
      const weekStartsOnValue = (options?.weekStartsOn ??
        fallbackWeekStartsOn) as WeekStartsOn;
      const endDow = (weekStartsOnValue + 6) % 7;
      const diff = (endDow - base.getDay() + 7) % 7;
      return toNoonDate(
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
      const base = toNoonDate(date);
      const diff = (7 - base.getDay()) % 7;
      return toNoonDate(
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

    endOfMonth: (date) => {
      return toNoonDate(
        new TZDate(
          date.getFullYear(),
          date.getMonth() + 1,
          0,
          12,
          0,
          0,
          timeZone,
        ),
      );
    },

    endOfYear: (date) => {
      return toNoonDate(
        new TZDate(date.getFullYear(), 11, 31, 12, 0, 0, timeZone),
      );
    },

    eachMonthOfInterval: (interval) => {
      const start = toNoonDate(interval.start);
      const end = toNoonDate(interval.end);
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

    // Normalize to noon before arithmetic (avoid DST/midnight edge cases) and
    // re-normalize after (ensure the result is back at noon and returned as a
    // plain Date). Both passes are intentional.
    addDays: (date, amount) => {
      return toNoonDate(addDays(toNoonDate(date), amount));
    },

    addWeeks: (date, amount) => {
      return toNoonDate(addWeeks(toNoonDate(date), amount));
    },

    addMonths: (date, amount) => {
      return toNoonDate(addMonths(toNoonDate(date), amount));
    },

    addYears: (date, amount) => {
      return toNoonDate(addYears(toNoonDate(date), amount));
    },

    eachYearOfInterval: (interval) => {
      const start = toNoonDate(interval.start);
      const end = toNoonDate(interval.end);
      const years: Date[] = [];
      for (let y = start.getFullYear(); y <= end.getFullYear(); y++) {
        years.push(new TZDate(y, 0, 1, 12, 0, 0, timeZone));
      }
      return years;
    },

    getWeek: (date) => {
      const base = toNoonDate(date);
      return getWeekFn(base, { weekStartsOn: fallbackWeekStartsOn });
    },

    differenceInCalendarDays: (dateLeft, dateRight) => {
      const left = startOfDayFn(toNoonDate(dateLeft));
      const right = startOfDayFn(toNoonDate(dateRight));
      return differenceInCalendarDaysFn(left, right);
    },

    differenceInCalendarMonths: (dateLeft, dateRight) => {
      const left = startOfDayFn(toNoonDate(dateLeft));
      const right = startOfDayFn(toNoonDate(dateRight));
      return differenceInCalendarMonthsFn(left, right);
    },
  };
}
