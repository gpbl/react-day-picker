import { mk as dateFnsMk } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Macedonian locale extended with DayPicker-specific translations. */
export const mk: DayPickerLocale = {
  ...dateFnsMk,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Денес, ${label}`;
      if (modifiers.selected) label = `${label}, избрано`;
      return label;
    },
    labelMonthDropdown: "Изберете месец",
    labelNext: "Оди на следниот месец",
    labelPrevious: "Оди на претходниот месец",
    labelWeekNumber: (weekNumber: number) => `Недела ${weekNumber}`,
    labelYearDropdown: "Изберете година",
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
        label = `Денес, ${label}`;
      }
      return label;
    },
    labelNav: "Лента за навигација",
    labelWeekNumberHeader: "Број на недела",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
