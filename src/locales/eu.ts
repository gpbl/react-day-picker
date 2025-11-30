import { eu as dateFnsEu } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Basque locale extended with DayPicker-specific translations.
 */
export const eu: DayPickerLocale = {
  ...dateFnsEu,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Gaur, ${label}`;
      if (modifiers.selected) label = `${label}, hautatua`;
      return label;
    },
    labelMonthDropdown: "Hautatu hilabetea",
    labelNext: "Joan hurrengo hilabetera",
    labelPrevious: "Joan aurreko hilabetera",
    labelWeekNumber: (weekNumber: number) => `Astea ${weekNumber}`,
    labelYearDropdown: "Hautatu urtea",
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
        label = `Gaur, ${label}`;
      }
      return label;
    },
    labelNav: "Nabigazio barra",
    labelWeekNumberHeader: "Aste zenbakia",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
