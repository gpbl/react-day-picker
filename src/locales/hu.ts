import { hu as dateFnsHu } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Hungarian locale extended with DayPicker-specific translations.
 */
export const hu: DayPickerLocale = {
  ...dateFnsHu,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Ma, ${label}`;
      if (modifiers.selected) label = `${label}, kiválasztva`;
      return label;
    },
    labelMonthDropdown: "Válassza ki a hónapot",
    labelNext: "Ugrás a következő hónapra",
    labelPrevious: "Ugrás az előző hónapra",
    labelWeekNumber: (weekNumber: number) => `Hét ${weekNumber}`,
    labelYearDropdown: "Válassza ki az évet",
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
        label = `Ma, ${label}`;
      }
      return label;
    },
    labelNav: "Navigációs sáv",
    labelWeekNumberHeader: "Hét száma",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
