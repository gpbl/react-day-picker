import { is as dateFnsIs } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Icelandic locale extended with DayPicker-specific translations.
 */
export const is: DayPickerLocale = {
  ...dateFnsIs,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Í dag, ${label}`;
      if (modifiers.selected) label = `${label}, valið`;
      return label;
    },
    labelMonthDropdown: "Veldu mánuð",
    labelNext: "Farðu í næsta mánuð",
    labelPrevious: "Farðu í fyrri mánuð",
    labelWeekNumber: (weekNumber: number) => `Vika ${weekNumber}`,
    labelYearDropdown: "Veldu árið",
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
        label = `Í dag, ${label}`;
      }
      return label;
    },
    labelNav: "Leiðarstika",
    labelWeekNumberHeader: "Vikunúmer",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
