import type {
  LocaleDayPeriod,
  LocaleOptions,
  LocaleWidth,
  Localize,
} from "date-fns/locale";
import {
  DateLib,
  type DateLibOptions,
  type DayPickerLocale,
  type Modifiers,
} from "react-day-picker";
import { enUS } from "./en-US.js";

/**
 * Minimal Amharic (Ethiopia) locale for date-fns v4.
 *
 * - Uses `Intl.DateTimeFormat('am-ET')` to localize month and weekday names.
 * - Reuses `en-US` implementations for `formatLong`, `formatDistance`,
 *   `formatRelative`, and `match` to keep the footprint small.
 * - Ordinals are returned as plain numeric strings.
 */

function mapWidth(width: LocaleWidth | undefined): "narrow" | "short" | "long" {
  switch (width) {
    case "narrow":
      return "narrow";
    case "short":
    case "abbreviated":
      return "short";
    default:
      return "long";
  }
}

function buildMonthNames(width: LocaleWidth | undefined) {
  const intlWidth = mapWidth(width);
  const fmt = new Intl.DateTimeFormat("am-ET", {
    month: intlWidth,
    timeZone: "UTC",
  });
  const names: string[] = [];
  for (let i = 0; i < 12; i++) {
    names.push(fmt.format(new Date(Date.UTC(2017, i, 1))));
  }
  return names;
}

function buildDayNames(width: LocaleWidth | undefined) {
  const intlWidth = mapWidth(width);
  const fmt = new Intl.DateTimeFormat("am-ET", {
    weekday: intlWidth,
    timeZone: "UTC",
  });
  const names: string[] = [];
  const base = Date.UTC(2017, 0, 1);
  for (let i = 0; i < 7; i++) {
    names.push(fmt.format(new Date(base + i * 24 * 60 * 60 * 1000)));
  }
  return names;
}

function getDayPeriod(
  value: LocaleDayPeriod,
  width: LocaleWidth | undefined,
): string {
  if (value === "am" || value === "pm") {
    const sampleHour = value === "am" ? 1 : 13;
    const parts = new Intl.DateTimeFormat("am-ET", {
      hour: "numeric",
      hour12: true,
      timeZone: "UTC",
    })
      .formatToParts(new Date(Date.UTC(2017, 0, 1, sampleHour)))
      .find((p) => p.type === "dayPeriod");
    if (parts?.value) return parts.value;
  }
  return enUS.localize.dayPeriod(value, { width: width });
}

const localize: Localize = {
  ...enUS.localize,
  ordinalNumber: (n) => String(n),
  month: (value, options) => {
    const names = buildMonthNames(options?.width);
    return names[value];
  },
  day: (value, options) => {
    const names = buildDayNames(options?.width);
    return names[value];
  },
  dayPeriod: (value, options) => getDayPeriod(value, options?.width),
};

const options: LocaleOptions = {
  weekStartsOn: 1,
  firstWeekContainsDate: 1,
};

/**
 * Amharic (Ethiopia) locale backed by Intl for core names plus DayPicker
 * labels.
 */
export const amET: DayPickerLocale = {
  code: "am-ET",
  formatDistance: enUS.formatDistance,
  formatRelative: enUS.formatRelative,
  formatLong: enUS.formatLong,
  localize,
  match: enUS.match,
  options,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      opts?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(opts);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `ዛሬ፣ ${label}`;
      if (modifiers.selected) label = `${label}, ተመርጧል`;
      return label;
    },
    labelMonthDropdown: "ወርን ይምረጡ",
    labelNext: "ወደ ቀጣይ ወር ይሂዱ",
    labelPrevious: "ወደ ቀዳሚ ወር ይሂዱ",
    labelWeekNumber: (weekNumber: number) => `ሳምንት ${weekNumber}`,
    labelYearDropdown: "ዓመቱን ይምረጡ",
    labelGrid: (date: Date, opts?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(opts)).formatMonthYear(date),
    labelGridcell: (
      date: Date,
      modifiers?: Modifiers,
      opts?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(opts);
      let label = lib.format(date, "PPPP");
      if (modifiers?.today) {
        label = `ዛሬ፣ ${label}`;
      }
      return label;
    },
    labelNav: "መምሪያ አሞሌ",
    labelWeekNumberHeader: "የሳምንት ቁጥር",
    labelWeekday: (date: Date, opts?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(opts)).format(date, "cccc"),
  },
};

export default amET;
