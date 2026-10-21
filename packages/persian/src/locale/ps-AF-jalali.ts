import type { Month } from "date-fns";
import * as dateFnsJalali from "date-fns-jalali";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

const months = [
  "وری",
  "غویی",
  "غبرګولی",
  "چنګاښ",
  "زمری",
  "وږی",
  "تله",
  "لړم",
  "لیندۍ",
  "مرغومی",
  "سلواغه",
  "کب",
] as const;
const weekdays = [
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنج شنبه",
  "جمعه",
  "شنبه",
] as const;
const dayPeriods = {
  am: "غرمې مخکې",
  pm: "غرمې وروسته",
  midnight: "نیمه شپه",
  noon: "غرمه",
  morning: "سهار",
  afternoon: "ماسپښین",
  evening: "ماښام",
  night: "شپه",
} as const;

const monthWidths = {
  wide: months,
  abbreviated: months,
  narrow: months.map((name) => name.slice(0, 1)),
} as const;
const dayWidths = {
  wide: weekdays,
  abbreviated: weekdays,
  short: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
  narrow: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
} as const;

/** Match a localized name at the start of a string, preferring the longest name. */
function matchPashtoNames<Result>(
  names: readonly string[],
  toValue: (index: number) => Result,
): (input: string) => { value: Result; rest: string } | null {
  return (input: string) => {
    const match = names
      .map((name, index) => ({ name, index }))
      .sort((a, b) => b.name.length - a.name.length)
      .find(({ name }) => input.startsWith(name));
    return match
      ? { value: toValue(match.index), rest: input.slice(match.name.length) }
      : null;
  };
}

const monthMatch = matchPashtoNames(months, (index) => index as Month);
type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;
const dayMatch = matchPashtoNames(weekdays, (index) => index as Weekday);
const periodKeys = Object.keys(dayPeriods) as (keyof typeof dayPeriods)[];
const periodMatch = matchPashtoNames(
  periodKeys.map((key) => dayPeriods[key]),
  (index) => periodKeys[index],
);

const datePatterns = {
  full: "EEEE 'د' y 'د' MMMM d",
  long: "y 'د' MMMM d",
  medium: "y MMM d",
  short: "yyyy/MM/dd",
} as const;
const timePatterns = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm",
} as const;

/** Afghan Pashto locale for the Solar Hijri calendar. */
export const psAFJalali: DayPickerLocale = {
  code: "ps-AF",
  options: { weekStartsOn: 6, firstWeekContainsDate: 1 },
  formatDistance: (token, count, options) => {
    const units: Record<string, string> = {
      lessThanXSeconds: "ثانیو",
      xSeconds: "ثانیې",
      halfAMinute: "نیمه دقیقه",
      lessThanXMinutes: "دقیقو",
      xMinutes: "دقیقې",
      aboutXHours: "ساعتونه",
      xHours: "ساعتونه",
      xDays: "ورځې",
      aboutXWeeks: "اونۍ",
      xWeeks: "اونۍ",
      aboutXMonths: "میاشتې",
      xMonths: "میاشتې",
      aboutXYears: "کلونه",
      xYears: "کلونه",
      overXYears: "کلونو څخه زیات",
      almostXYears: "نږدې کلونه",
    };
    const value =
      token === "halfAMinute" ? units[token] : `${count} ${units[token]}`;
    return options?.addSuffix
      ? options.comparison && options.comparison > 0
        ? `په ${value} کې`
        : `${value} مخکې`
      : value;
  },
  formatRelative: (token) =>
    ({
      lastWeek: "'تېره' eeee 'په' p",
      yesterday: "'پرون په' p",
      today: "'نن په' p",
      tomorrow: "'سبا په' p",
      nextWeek: "'راتلونکې' eeee 'په' p",
      other: "P",
    })[token],
  formatLong: {
    date: ({ width } = {}) =>
      datePatterns[width === "any" ? "full" : (width ?? "full")],
    time: ({ width } = {}) =>
      timePatterns[width === "any" ? "full" : (width ?? "full")],
    dateTime: ({ width } = {}) =>
      width === undefined || width === "full" || width === "long"
        ? "{{date}} 'په' {{time}}"
        : "{{date}}, {{time}}",
  },
  localize: {
    ordinalNumber: (value) => String(value),
    era: (value, options) =>
      (options?.width === "narrow"
        ? ["ق", "ه"]
        : ["له هجرت مخکې", "هجري لمریز"])[value],
    quarter: (value) => `${value}مه ربعه`,
    month: (value, options) =>
      monthWidths[
        options?.width === "narrow"
          ? "narrow"
          : options?.width === "abbreviated"
            ? "abbreviated"
            : "wide"
      ][value],
    day: (value, options) =>
      dayWidths[
        options?.width === "narrow"
          ? "narrow"
          : options?.width === "short"
            ? "short"
            : options?.width === "abbreviated"
              ? "abbreviated"
              : "wide"
      ][value],
    dayPeriod: (value) => dayPeriods[value],
  },
  match: {
    ordinalNumber: (input) => {
      const match = /^(\d+)/.exec(input);
      return match
        ? { value: Number(match[1]), rest: input.slice(match[0].length) }
        : null;
    },
    era: (input, options) =>
      matchPashtoNames(
        options?.width === "narrow"
          ? ["ق", "ه"]
          : ["له هجرت مخکې", "هجري لمریز"],
        (index) => index as 0 | 1,
      )(input),
    quarter: (input) => {
      const match = /^([1-4])مه ربعه/.exec(input);
      return match
        ? {
            value: Number(match[1]) as 1 | 2 | 3 | 4,
            rest: input.slice(match[0].length),
          }
        : null;
    },
    month: (input, options) =>
      options?.width === "narrow"
        ? matchPashtoNames(monthWidths.narrow, (index) => index as Month)(input)
        : monthMatch(input),
    day: (input, options) =>
      options?.width === "narrow" || options?.width === "short"
        ? matchPashtoNames(dayWidths.short, (index) => index as Weekday)(input)
        : dayMatch(input),
    dayPeriod: periodMatch,
  },
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const label = (
        dateLib ??
        new DateLib({ locale: psAFJalali, ...options }, dateFnsJalali)
      ).format(date, "PPPP");
      return `${modifiers.today ? "نن، " : ""}${label}${modifiers.selected ? "، ټاکل شوې" : ""}`;
    },
    labelMonthDropdown: "میاشت وټاکئ",
    labelNext: "راتلونکې میاشت ته لاړ شئ",
    labelPrevious: "تېرې میاشت ته لاړ شئ",
    labelWeekNumber: (weekNumber: number) => `${weekNumber}مه اونۍ`,
    labelYearDropdown: "کال وټاکئ",
    labelGrid: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (
        dateLib ??
        new DateLib({ locale: psAFJalali, ...options }, dateFnsJalali)
      ).formatMonthYear(date),
    labelGridcell: (
      date: Date,
      modifiers?: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const label = (
        dateLib ??
        new DateLib({ locale: psAFJalali, ...options }, dateFnsJalali)
      ).format(date, "PPPP");
      return `${modifiers?.today ? "نن، " : ""}${label}`;
    },
    labelNav: "د جنتري لټون",
    labelWeekNumberHeader: "د اونۍ شمېره",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (
        dateLib ??
        new DateLib({ locale: psAFJalali, ...options }, dateFnsJalali)
      ).format(date, "cccc"),
  },
};
