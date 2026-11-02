import { format } from "date-fns/format";
import { enUS as dateFnsEnUS } from "date-fns/locale/en-US";

import type {
  DateLib,
  DateLibOptions,
  DayPickerLocale,
} from "../classes/DateLib.js";
import { getFullDatePattern } from "../helpers/getFullDatePattern.js";
import type { Modifiers } from "../types/index.js";

function formatFullDate(
  date: Date,
  options?: DateLibOptions,
  dateLib?: DateLib,
): string {
  if (dateLib && typeof dateLib.formatFullDate === "function") {
    return dateLib.formatFullDate(date);
  }
  if (dateLib && typeof dateLib.format === "function") {
    return dateLib.format(date, "PPPP");
  }
  const formatDate = (d: Date, pattern: string) =>
    format(d, pattern, { locale: dateFnsEnUS, ...options });
  const locale = options?.locale ?? dateFnsEnUS;
  return formatDate(date, getFullDatePattern(date, locale, formatDate));
}

/** English (United States) locale extended with DayPicker-specific translations. */
export const enUS: DayPickerLocale = {
  ...dateFnsEnUS,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      let label = formatFullDate(date, options, dateLib);
      if (modifiers.today) label = `Today, ${label}`;
      if (modifiers.selected) label = `${label}, selected`;
      return label;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (weekNumber: number) => `Week ${weekNumber}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (date: Date, options?: DateLibOptions, dateLib?: DateLib) => {
      let formatDate: (d: Date, pattern: string) => string;
      if (dateLib && typeof dateLib.format === "function") {
        formatDate = dateLib.format.bind(dateLib);
      } else {
        formatDate = (d, pattern) =>
          format(d, pattern, { locale: dateFnsEnUS, ...options });
      }
      return formatDate(date, "LLLL yyyy");
    },
    labelGridcell: (
      date: Date,
      modifiers?: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      let label = formatFullDate(date, options, dateLib);
      if (modifiers?.today) {
        label = `Today, ${label}`;
      }
      return label;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) => {
      let formatDate: (d: Date, pattern: string) => string;
      if (dateLib && typeof dateLib.format === "function") {
        formatDate = dateLib.format.bind(dateLib);
      } else {
        formatDate = (d, pattern) =>
          format(d, pattern, { locale: dateFnsEnUS, ...options });
      }
      return formatDate(date, "cccc");
    },
  },
};
