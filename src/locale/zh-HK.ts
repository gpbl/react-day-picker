import { zhHK as dateFnsZhHK } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Chinese (Traditional, Hong Kong) locale extended with DayPicker-specific
 * translations.
 */
export const zhHK: DayPickerLocale = {
  ...dateFnsZhHK,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `今日，${label}`;
      if (modifiers.selected) label = `${label}，已選擇`;
      return label;
    },
    labelMonthDropdown: "選擇月份",
    labelNext: "前往下個月",
    labelPrevious: "前往上個月",
    labelWeekNumber: (weekNumber: number) => `第 ${weekNumber} 週`,
    labelYearDropdown: "選擇年份",
    labelGrid: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).formatMonthYear(date),
    labelGridcell: (
      date: Date,
      modifiers?: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers?.today) {
        label = `今日，${label}`;
      }
      return label;
    },
    labelNav: "導覽列",
    labelWeekNumberHeader: "週數",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
