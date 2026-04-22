import { format } from "date-fns";
import { enUS as dateFnsEnUS } from "date-fns/locale";

import type {
  DateLib,
  DateLibOptions,
  DayPickerLocale,
} from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

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
      let formatDate: (d: Date, pattern: string) => string;
      if (dateLib && typeof dateLib.format === "function") {
        formatDate = dateLib.format.bind(dateLib);
      } else {
        formatDate = (d, pattern) =>
          format(d, pattern, { locale: dateFnsEnUS, ...options });
      }
      let label = formatDate(date, "PPPP");
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
      let formatDate: (d: Date, pattern: string) => string;
      if (dateLib && typeof dateLib.format === "function") {
        formatDate = dateLib.format.bind(dateLib);
      } else {
        formatDate = (d, pattern) =>
          format(d, pattern, { locale: dateFnsEnUS, ...options });
      }
      let label = formatDate(date, "PPPP");
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
