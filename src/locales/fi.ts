import { fi as dateFnsFi } from "date-fns/locale";

import type { DateLibOptions, DayPickerLocale } from "../classes/DateLib.js";
import { DateLib } from "../classes/DateLib.js";
import type { Modifiers } from "../types/index.js";

/**
 * Finnish locale extended with DayPicker-specific translations.
 */
export const fi: DayPickerLocale = {
  ...dateFnsFi,
  labels: {
    labelDayButton: (
      date: Date,
      modifiers: Modifiers,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => {
      const lib = dateLib ?? new DateLib(options);
      let label = lib.format(date, "PPPP");
      if (modifiers.today) label = `Tänään, ${label}`;
      if (modifiers.selected) label = `${label}, valittu`;
      return label;
    },
    labelMonthDropdown: "Valitse kuukausi",
    labelNext: "Siirry seuraavaan kuukauteen",
    labelPrevious: "Siirry edelliseen kuukauteen",
    labelWeekNumber: (weekNumber: number) => `Viikko ${weekNumber}`,
    labelYearDropdown: "Valitse vuosi",
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
        label = `Tänään, ${label}`;
      }
      return label;
    },
    labelNav: "Navigointipalkki",
    labelWeekNumberHeader: "Viikkonumero",
    labelWeekday: (
      date: Date,
      options?: DateLibOptions,
      dateLib?: DateLib,
    ) => (dateLib ?? new DateLib(options)).format(date, "cccc"),
  },
};
