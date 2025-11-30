import { oc as dateFnsOc } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Occitan locale extended with DayPicker-specific translations.
 */
export const oc: DayPickerLocale = {
  ...dateFnsOc,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Uèi, ${label}`;
      if (modifiers.selected) label = `${label}, seleccionat`;
      return label;
    },
    labelMonthDropdown: "Causissètz lo mes",
    labelNext: "Anar al mes que ven",
    labelPrevious: "Anar al mes precedent",
    labelWeekNumber: (weekNumber: number) => `Setmana ${weekNumber}`,
    labelYearDropdown: "Causissètz l'annada",
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
        label = `Uèi, ${label}`;
      }
      return label;
    },
    labelNav: "Barra de navigacion",
    labelWeekNumberHeader: "Numèro de setmana",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
