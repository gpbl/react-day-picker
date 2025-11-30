import { mn as dateFnsMn } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Mongolian locale extended with DayPicker-specific translations.
 */
export const mn: DayPickerLocale = {
  ...dateFnsMn,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Өнөөдөр, ${label}`;
      if (modifiers.selected) label = `${label}, сонгогдсон`;
      return label;
    },
    labelMonthDropdown: "Сараа сонгоно уу",
    labelNext: "Дараагийн сар руу очих",
    labelPrevious: "Өмнөх сар руу очих",
    labelWeekNumber: (weekNumber: number) => `Долоо хоног ${weekNumber}`,
    labelYearDropdown: "Жилээ сонгоно уу",
    labelGrid: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).formatMonthYear(date),
    labelGridcell: (
      date: Date,
      modifiers?: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers?.today) {
        label = `Өнөөдөр, ${label}`;
      }
      return label;
    },
    labelNav: "Навигацийн самбар",
    labelWeekNumberHeader: "Долоо хонгийн дугаар",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
