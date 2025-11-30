import { ht as dateFnsHt } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Haitian Creole locale extended with DayPicker-specific translations.
 */
export const ht: DayPickerLocale = {
  ...dateFnsHt,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Jodi a, ${label}`;
      if (modifiers.selected) label = `${label}, chwazi`;
      return label;
    },
    labelMonthDropdown: "Chwazi mwa a",
    labelNext: "Ale nan pwochen mwa",
    labelPrevious: "Ale nan mwa anvan",
    labelWeekNumber: (weekNumber: number) => `Semèn ${weekNumber}`,
    labelYearDropdown: "Chwazi ane a",
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
        label = `Jodi a, ${label}`;
      }
      return label;
    },
    labelNav: "Ba navigasyon",
    labelWeekNumberHeader: "Nimewo semèn",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
