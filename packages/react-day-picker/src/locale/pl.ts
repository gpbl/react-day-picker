import { pl as dateFnsPl } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/** Polish locale extended with DayPicker-specific translations. */
export const pl: DayPickerLocale = {
  ...dateFnsPl,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Dziś, ${label}`;
      if (modifiers.selected) label = `${label}, zaznaczony`;
      return label;
    },
    labelMonthDropdown: "Wybierz miesiąc",
    labelNext: "Przejdź do następnego miesiąca",
    labelPrevious: "Przejdź do poprzedniego miesiąca",
    labelWeekNumber: (weekNumber: number) => `Tydzień ${weekNumber}`,
    labelYearDropdown: "Wybierz rok",
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
        label = `Dziś, ${label}`;
      }
      return label;
    },
    labelNav: "Pasek nawigacyjny",
    labelWeekNumberHeader: "Numer tygodnia",
    labelWeekday: (date: Date, options?: DateLibOptions, dateLib?: DateLib) =>
      (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
